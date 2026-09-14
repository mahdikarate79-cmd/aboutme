(function () {
  'use strict';

  const STORAGE_KEY = 'mew-lang';
  let currentLang = 'en';

  /* ── Language ── */

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
  }

  function setLanguage(lang) {
    if (!MEW_TRANSLATIONS[lang]) return;
    currentLang = lang;
    const t = MEW_TRANSLATIONS[lang];
    const isRtl = lang === 'fa';

    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    document.title = t.meta.title;
    document.querySelector('meta[name="description"]').content = t.meta.description;
    document.querySelector('meta[property="og:title"]').content = t.meta.title;
    document.querySelector('meta[property="og:description"]').content = t.meta.description;
    document.querySelector('meta[property="og:locale"]').content = t.meta.ogLocale;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = getNestedValue(t, key);
      if (value) el.textContent = value;
    });

    document.querySelectorAll('[data-link]').forEach((el) => {
      const key = el.getAttribute('data-link');
      if (MEW_LINKS[key]) el.href = MEW_LINKS[key];
    });

    renderServices();
    updateLangButtons(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function updateLangButtons(lang) {
    document.querySelectorAll('.lang-switcher__btn').forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  /* ── Services Grid ── */

  const PAW_ICON = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="12" cy="16" rx="3.5" ry="3" fill="currentColor"/>
    <ellipse cx="6" cy="10" rx="2" ry="2.5" fill="currentColor"/>
    <ellipse cx="10.5" cy="8" rx="2" ry="2.5" fill="currentColor"/>
    <ellipse cx="16" cy="8.5" rx="2" ry="2.5" fill="currentColor"/>
    <ellipse cx="19" cy="12" rx="1.8" ry="2.2" fill="currentColor"/>
  </svg>`;

  function createImageFallback(alt) {
    const wrap = document.createElement('div');
    wrap.className = 'service-card__image-placeholder';
    wrap.innerHTML = PAW_ICON;
    wrap.setAttribute('aria-label', alt);
    return wrap;
  }

  function setupServiceImage(img, alt) {
    const wrap = img.parentElement;

    img.addEventListener('error', () => {
      img.remove();
      if (!wrap.querySelector('.service-card__image-placeholder')) {
        wrap.appendChild(createImageFallback(alt));
      }
    });

    img.addEventListener('load', () => {
      const ph = wrap.querySelector('.service-card__image-placeholder');
      if (ph) ph.remove();
    });
  }

  function renderServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    const t = MEW_TRANSLATIONS[currentLang];
    grid.innerHTML = '';

    t.services.items.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'service-card glass';
      card.setAttribute('role', 'listitem');

      const imageWrap = document.createElement('div');
      imageWrap.className = 'service-card__image-wrap';

      const img = document.createElement('img');
      img.className = 'service-card__image';
      img.src = item.image;
      img.alt = item.title;
      img.loading = 'lazy';
      img.width = 48;
      img.height = 48;
      setupServiceImage(img, item.title);
      imageWrap.appendChild(img);

      const title = document.createElement('h3');
      title.className = 'service-card__title';
      title.textContent = item.title;

      const desc = document.createElement('p');
      desc.className = 'service-card__description';
      desc.textContent = item.description;

      const link = document.createElement('a');
      link.className = 'btn btn--primary btn--card';
      link.href = item.link;
      link.textContent = item.button;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      card.append(imageWrap, title, desc, link);
      grid.appendChild(card);
    });
  }

  /* ── Logo Placeholder ── */

  function setupLogo() {
    const logo = document.getElementById('hero-logo');
    const placeholder = document.getElementById('logo-placeholder');
    if (!logo || !placeholder) return;

    function showLogo() {
      logo.classList.remove('is-hidden');
      placeholder.hidden = true;
    }

    function showPlaceholder() {
      logo.classList.add('is-hidden');
      placeholder.hidden = false;
    }

    function syncLogo() {
      if (logo.naturalWidth > 0 && logo.naturalHeight > 0) {
        showLogo();
      } else {
        showPlaceholder();
      }
    }

    logo.addEventListener('load', syncLogo);
    logo.addEventListener('error', showPlaceholder);

    if (logo.complete) {
      syncLogo();
    }
  }

  /* ── Favicon Fallback ── */

  function setupFavicon() {
    const favicon = document.getElementById('favicon');
    if (!favicon) return;

    const test = new Image();
    test.onerror = () => {
      favicon.href =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%23060a12'/%3E%3Ctext x='16' y='21' text-anchor='middle' fill='%232aabee' font-size='12' font-weight='700' font-family='sans-serif'%3EM%3C/text%3E%3C/svg%3E";
    };
    test.src = favicon.href;
  }

  /* ── Smooth scroll offset for fixed navbar ── */

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const id = anchor.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 64;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ── Init ── */

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const lang = MEW_TRANSLATIONS[saved] ? saved : 'en';

    document.querySelectorAll('.lang-switcher__btn').forEach((btn) => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    setLanguage(lang);
    setupLogo();
    setupFavicon();
    setupSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

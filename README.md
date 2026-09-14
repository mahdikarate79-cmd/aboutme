# Mew — Landing Page

A minimal, premium static landing page for the **Mew** brand. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no backend.

**Live site (after GitHub Pages setup):**  
`https://mahdikarate79-cmd.github.io/aboutme/`

---

## Project Structure

```
/
├── index.html          # Main page
├── styles.css          # All styles + CSS variables (colors)
├── script.js           # Language switcher, services render, image fallbacks
├── translations.js       # All text (EN/FA) + links + image paths
├── README.md
└── assets/
    └── images/
        ├── logo.png              ← Your main logo (Hero section)
        ├── favicon.png           ← Browser tab icon
        ├── virtual-services.png  ← Virtual Services card
        ├── group.png             ← Mew Group card
        ├── vouches.png           ← Vouches card
        ├── rent-x.png            ← Rent X card
        ├── mew-mm.png            ← Mew MM card
        └── mew-coin.png          ← Mew Coin card
```

---

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages** in your repository.
3. Under **Source**, select **Deploy from a branch**.
4. Choose branch **`main`** (or your default branch) and folder **`/ (root)`**.
5. Click **Save**. Wait 1–2 minutes.
6. Your site will be live at:  
   `https://<username>.github.io/<repo-name>/`  
   For this repo: `https://mahdikarate79-cmd.github.io/aboutme/`

> All asset paths are **relative** (`assets/images/...`), so they work on GitHub Pages without a custom domain.

---

## Where to Upload Images

| File | Path | Used in |
|------|------|---------|
| Main logo | `assets/images/logo.png` | Hero section |
| Favicon | `assets/images/favicon.png` | Browser tab |
| Virtual Services | `assets/images/virtual-services.png` | Services card |
| Mew Group | `assets/images/group.png` | Services card |
| Vouches | `assets/images/vouches.png` | Services card |
| Rent X | `assets/images/rent-x.png` | Services card |
| Mew MM | `assets/images/mew-mm.png` | Services card |
| Mew Coin | `assets/images/mew-coin.png` | Services card |

**Recommended:** PNG or WebP, small file size. If a file is missing, the site shows a clean placeholder — layout won't break.

---

## How to Edit Content

### Links (Telegram URLs, etc.)

Open **`translations.js`** → edit the `MEW_LINKS` object at the top:

```js
const MEW_LINKS = {
  virtualServices: 'https://t.me/MewCommunity/2432',
  mewGroup: 'https://t.me/MewGap',
  // ...
};
```

### English & Persian Text

Open **`translations.js`** → edit `MEW_TRANSLATIONS.en` and `MEW_TRANSLATIONS.fa`.

Each section (`hero`, `services`, `about`, `contact`, `footer`) has its own keys. Service cards are in `services.items[]`.

### Image Paths

Open **`translations.js`** → edit the `MEW_IMAGES` object:

```js
const MEW_IMAGES = {
  logo: 'assets/images/logo.png',
  // ...
};
```

### Colors & Design

Open **`styles.css`** → edit CSS variables in `:root` at the top:

```css
:root {
  --bg-primary: #060a12;
  --accent: #2aabee;
  /* ... */
}
```

---

## Local Preview

```bash
# Python 3
python3 -m http.server 8080

# Or Node.js (if npx available)
npx serve .
```

Then open `http://localhost:8080` in your browser.

---

## Features

- Liquid Glass / Glassmorphism UI
- Dark theme (Black + Telegram Blue)
- Subtle cat paw ambient animation (CSS only)
- Bilingual: English / فارسی with RTL support
- Fully responsive (mobile-first)
- Lazy-loaded images with graceful fallbacks
- SEO meta tags + Open Graph
- Zero dependencies — fast on all devices

---

## License

Content and branding belong to Mew. Code is provided for deployment on GitHub Pages.

/**
 * Mew Landing Page — Content & Links
 * Edit translations and links here. No need to touch HTML for text changes.
 */

const MEW_LINKS = {
  virtualServices: 'https://t.me/MewCommunity/2432',
  mewGroup: 'https://t.me/MewGap',
  vouches: 'https://t.me/MewTrust',
  rentX: 'https://t.me/Rent_X',
  mewMM: 'https://t.me/MewMMBot',
  mewCoin: 'https://t.me/MewCoinBot',
  contact: 'https://t.me/immeow',
};

const MEW_IMAGES = {
  logo: 'assets/images/logo.png',
  favicon: 'assets/images/favicon.png',
  virtualServices: 'assets/images/virtual-services.png',
  group: 'assets/images/group.png',
  vouches: 'assets/images/vouches.png',
  rentX: 'assets/images/rent-x.png',
  mewMM: 'assets/images/mew-mm.png',
  mewCoin: 'assets/images/mew-coin.png',
};

const MEW_TRANSLATIONS = {
  en: {
    meta: {
      title: 'Mew — Digital Services, Telegram & Crypto',
      description:
        'A collection of digital services, Telegram tools, crypto solutions and more — built around Mew.',
      ogLocale: 'en_US',
    },
    nav: {
      brand: 'Mew',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Digital Services. Telegram. Crypto.',
      description:
        'A collection of digital services, Telegram tools, crypto solutions and more — built around Mew.',
      cta: 'Explore Services',
      logoPlaceholder: 'Upload logo.png',
    },
    services: {
      title: 'Services',
      subtitle: 'Everything Mew offers — in one place.',
      items: [
        {
          id: 'virtual-services',
          title: 'Virtual Services',
          description:
            'Digital services for Telegram and online communities, from Premium and Stars to usernames, gifts and other virtual services.',
          button: 'View Services',
          link: MEW_LINKS.virtualServices,
          image: MEW_IMAGES.virtualServices,
        },
        {
          id: 'mew-group',
          title: 'Mew Group',
          description:
            'Join the Mew community to chat, discover services, trade and stay connected with other members.',
          button: 'Join Group',
          link: MEW_LINKS.mewGroup,
          image: MEW_IMAGES.group,
        },
        {
          id: 'vouches',
          title: 'Vouches',
          description:
            "See feedback and vouches from people who have used Mew's services.",
          button: 'View Vouches',
          link: MEW_LINKS.vouches,
          image: MEW_IMAGES.vouches,
        },
        {
          id: 'rent-x',
          title: 'Rent Services',
          description:
            'Rental services for Telegram assets and digital items, including usernames, numbers and other supported assets.',
          button: 'Open Rent X',
          link: MEW_LINKS.rentX,
          image: MEW_IMAGES.rentX,
        },
        {
          id: 'mew-mm',
          title: 'Auto OTC / Mew MM',
          description:
            'An automated Telegram middleman solution designed to make supported trades simpler and more secure.',
          button: 'Open Mew MM',
          link: MEW_LINKS.mewMM,
          image: MEW_IMAGES.mewMM,
        },
        {
          id: 'mew-coin',
          title: 'Crypto Price',
          description:
            'A Telegram bot for checking cryptocurrency prices and market information quickly.',
          button: 'Open Mew Coin',
          link: MEW_LINKS.mewCoin,
          image: MEW_IMAGES.mewCoin,
        },
      ],
    },
    about: {
      title: 'About Mew',
      text:
        'Mew is a digital services brand focused on Telegram, crypto and online communities. From virtual goods to automated trading tools — everything is built to be fast, reliable and easy to access.',
    },
    contact: {
      title: 'Connect with Mew',
      text: 'Have a question or need a service? Get in touch with Mew.',
      button: 'Contact Mew',
      link: MEW_LINKS.contact,
    },
    footer: {
      copyright: '© Mew — Digital Services & Telegram',
      contact: 'Contact',
      link: MEW_LINKS.contact,
    },
    imagePlaceholder: 'Image coming soon',
  },

  fa: {
    meta: {
      title: 'Mew — خدمات دیجیتال، تلگرام و کریپتو',
      description:
        'مجموعه‌ای از خدمات دیجیتال، ابزارهای تلگرامی، سرویس‌های کریپتو و خدمات مختلف در مجموعه Mew.',
      ogLocale: 'fa_IR',
    },
    nav: {
      brand: 'Mew',
      services: 'خدمات',
      about: 'درباره',
      contact: 'ارتباط',
    },
    hero: {
      tagline: 'خدمات دیجیتال، تلگرام و کریپتو',
      description:
        'مجموعه‌ای از خدمات دیجیتال، ابزارهای تلگرامی، سرویس‌های کریپتو و خدمات مختلف در مجموعه Mew.',
      cta: 'مشاهده خدمات',
      logoPlaceholder: 'لوگو را در logo.png قرار دهید',
    },
    services: {
      title: 'خدمات',
      subtitle: 'همه خدمات Mew — در یک جا.',
      items: [
        {
          id: 'virtual-services',
          title: 'Virtual Services',
          description:
            'خدمات مجازی و دیجیتال برای تلگرام و کامیونیتی‌ها؛ از Premium و Stars گرفته تا یوزرنیم، گیفت و سایر خدمات مجازی.',
          button: 'مشاهده خدمات',
          link: MEW_LINKS.virtualServices,
          image: MEW_IMAGES.virtualServices,
        },
        {
          id: 'mew-group',
          title: 'Mew Group',
          description:
            'به کامیونیتی Mew بپیوندید، گفتگو کنید، خدمات مختلف را ببینید و با اعضای دیگر در ارتباط باشید.',
          button: 'عضویت در گروه',
          link: MEW_LINKS.mewGroup,
          image: MEW_IMAGES.group,
        },
        {
          id: 'vouches',
          title: 'Vouches',
          description:
            'رضایت‌ها و بازخوردهای کاربران درباره خدمات Mew را مشاهده کنید.',
          button: 'مشاهده رضایت‌ها',
          link: MEW_LINKS.vouches,
          image: MEW_IMAGES.vouches,
        },
        {
          id: 'rent-x',
          title: 'Rent Services',
          description:
            'سرویس اجاره برای دارایی‌ها و آیتم‌های تلگرامی و دیجیتال، از جمله یوزرنیم، شماره و سایر موارد پشتیبانی‌شده.',
          button: 'باز کردن Rent X',
          link: MEW_LINKS.rentX,
          image: MEW_IMAGES.rentX,
        },
        {
          id: 'mew-mm',
          title: 'Auto OTC / Mew MM',
          description:
            'یک سرویس واسطه‌گری خودکار در تلگرام برای ساده‌تر و امن‌تر شدن معاملات پشتیبانی‌شده.',
          button: 'باز کردن Mew MM',
          link: MEW_LINKS.mewMM,
          image: MEW_IMAGES.mewMM,
        },
        {
          id: 'mew-coin',
          title: 'Crypto Price',
          description:
            'ربات تلگرامی برای مشاهده سریع قیمت ارزهای دیجیتال و اطلاعات بازار.',
          button: 'باز کردن Mew Coin',
          link: MEW_LINKS.mewCoin,
          image: MEW_IMAGES.mewCoin,
        },
      ],
    },
    about: {
      title: 'درباره Mew',
      text:
        'Mew یک برند خدمات دیجیتال با تمرکز بر تلگرام، کریپتو و کامیونیتی‌های آنلاین است. از خدمات مجازی تا ابزارهای معاملاتی خودکار — همه چیز برای دسترسی سریع، قابل اعتماد و آسان طراحی شده است.',
    },
    contact: {
      title: 'ارتباط با Mew',
      text: 'سؤالی دارید یا به یکی از خدمات نیاز دارید؟ با Mew در ارتباط باشید.',
      button: 'تماس با Mew',
      link: MEW_LINKS.contact,
    },
    footer: {
      copyright: '© Mew — Digital Services & Telegram',
      contact: 'ارتباط',
      link: MEW_LINKS.contact,
    },
    imagePlaceholder: 'تصویر به‌زودی',
  },
};

// Mirror of CONTENT.md - the editorial single source of truth.
// Edit copy in CONTENT.md, then keep this file in sync.

export const site = {
  brand: 'D-Zen Interiors',
  brandMark: 'D-ZEN',

  hero: {
    eyebrow: 'Cluj-Napoca',
    headline: 'Renovări și finisaje interioare în Cluj-Napoca',
    subline:
      'Transformăm spații rezidențiale și comerciale prin lucrări de calitate și atenție la detaliu.',
    image: '/img/hero.webp',
    primaryCta: { label: 'Vezi proiecte', href: '#proiecte' },
    secondaryCta: { label: 'Contact', href: '#contact' },
  },

  beforeAfter: {
    eyebrow: 'Transformare',
    title: 'Înainte și după',
    caption: 'Apartament, Cluj-Napoca - renovare și finisaje',
    before: '/img/ba-before.webp',
    after: '/img/ba-after.webp',
  },

  projects: {
    eyebrow: 'Portofoliu',
    title: 'Proiecte selectate',
    items: [
      {
        title: 'Renovare apartament',
        subtitle: 'Finisaje complete, tâmplărie și iluminat',
        image: '/img/proj-apartament.webp',
      },
      {
        title: 'Amenajare dormitor',
        subtitle: 'Vopsitorie decorativă și parchet',
        image: '/img/proj-dormitor.webp',
      },
      {
        title: 'Finisaje living',
        subtitle: 'Pregătire pereți, vopsitorie și finisaje',
        image: '/img/proj-living.webp',
      },
      {
        title: 'Amenajare balcon',
        subtitle: 'Tapet decorativ și pardoseală',
        image: '/img/proj-balcon.webp',
      },
    ],
  },

  about: {
    eyebrow: 'Despre',
    title: 'Calitate, încredere, detaliu',
    paragraph:
      'D-Zen Interiors oferă servicii de zugrăveli, finisaje și renovări interioare în Cluj-Napoca și județul Cluj. Lucrăm ca o echipă de zugravi cu experiență, concentrată pe calitatea execuției, atenția la detaliu și o comunicare clară pe tot parcursul proiectului.',
    image: '/img/about.webp',
  },

  instagram: {
    eyebrow: 'Urmărește',
    title: 'Pe Instagram',
    handle: '@dzen_interiors',
    url: 'https://www.instagram.com/dzen_interiors/',
    tiles: [
      '/img/ig-1.webp',
      '/img/ig-2.webp',
      '/img/ig-3.webp',
      '/img/ig-4.webp',
      '/img/ig-5.webp',
      '/img/ig-6.webp',
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Hai să discutăm proiectul tău',
    phoneDisplay: '+40 743 226 628',
    phoneHref: 'tel:+40743226628',
    whatsappHref: 'https://wa.me/40743226628',
    facebookHref: 'https://www.facebook.com/profile.php?id=61577879934515',
    instagramHref: 'https://www.instagram.com/dzen_interiors/',
  },
} as const

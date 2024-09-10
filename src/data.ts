export type FeaturedProductProps = {
  title: string;
  category: string;
  image: string;
  hoverImage: string;
};

export const featuredProducts: FeaturedProductProps[] = [
  {
    title: 'David Beckham',
    category: 'Sunčane',
    image: '/products/david_beckham_naocare.png',
    hoverImage: '/home/aktuelna-ponuda.png',
  },
  {
    title: 'David Beckham',
    category: 'Sunčane',
    image: '/products/david_beckham_naocare.png',
    hoverImage: '/home/aktuelna-ponuda.png',
  },
  {
    title: 'David Beckham',
    category: 'Sunčane',
    image: '/products/david_beckham_naocare.png',
    hoverImage: '/home/aktuelna-ponuda.png',
  },
  {
    title: 'David Beckham',
    category: 'Sunčane',
    image: '/products/david_beckham_naocare.png',
    hoverImage: '/home/aktuelna-ponuda.png',
  },
];

type BrandProps = {
  name: string;
  logo: string;
};

export const brands: BrandProps[] = [
  {
    name: 'Dsquared',
    logo: '/brands/dsquared-logo.svg',
  },
  {
    name: 'Etnia',
    logo: '/brands/etnia-logo.svg',
  },
  {
    name: 'lool',
    logo: '/brands/lool-logo.svg',
  },
  {
    name: 'Marc Jacobs',
    logo: '/brands/marc_jacobs-logo.svg',
  },
  {
    name: 'Polaroid',
    logo: '/brands/polaroid-logo.svg',
  },
];

type BrandAnimatedProps = {
  name: string;
  image1: string;
  image2: string;
};

export const brandsAnimated: BrandAnimatedProps[] = [
  {
    name: 'Moschino',
    image1: '/brands/animated/hugo-eyewear-1.png',
    image2: '/brands/animated/hugo-eyewear-2.png',
  },
  {
    name: 'Fosil',
    image1: '/brands/animated/hugo-eyewear-1.png',
    image2: '/brands/animated/hugo-eyewear-2.png',
  },
  {
    name: 'Hugo Boss',
    image1: '/brands/animated/hugo-eyewear-1.png',
    image2: '/brands/animated/hugo-eyewear-2.png',
  },
  {
    name: 'David Beckham',
    image1: '/brands/animated/hugo-eyewear-1.png',
    image2: '/brands/animated/hugo-eyewear-2.png',
  },
  {
    name: 'Jaguar',
    image1: '/brands/animated/hugo-eyewear-1.png',
    image2: '/brands/animated/hugo-eyewear-2.png',
  },
  {
    name: 'lool',
    image1: '/brands/animated/hugo-eyewear-1.png',
    image2: '/brands/animated/hugo-eyewear-2.png',
  },
];

type TestimonialProps = {
  author: string;
  text: string;
};

export const testimonials: TestimonialProps[] = [
  {
    author: 'Pavle Popovic, Dipota CEO',
    text: '¨If we could give every individual the right amount of nourishment and exercise, not too little and not too much, we would have found the safest way to health.¨',
  },
  {
    author: 'Pavle Popovic, Dipota CEO',
    text: '¨If we could give every individual the right amount of nourishment and exercise, not too little and not too much, we would have found the safest way to health.¨',
  },
  {
    author: 'Pavle Popovic, Dipota CEO',
    text: '¨If we could give every individual the right amount of nourishment and exercise, not too little and not too much, we would have found the safest way to health.¨',
  },
];

export type CtaItemProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  buttonText: string;
};

export const ctaItems: CtaItemProps[] = [
  {
    imageSrc: '/home/contact.png',
    imageAlt: 'Star Vision kontakt',
    title: 'Za svaki stil, kontaktirajte nas za upit',
    buttonText: 'Kontaktirajte nas',
  },
  {
    imageSrc: '/home/locations.png',
    imageAlt: 'Star Vision lokacije',
    title: 'Regionalno prisutni, globalno orijentisani',
    buttonText: 'Nadjite lokaciju',
  },
];

export type MenuItem = {
  href: string;
  text: string;
};

export const footerFirstColumnItems: MenuItem[] = [
  { href: '#partners', text: 'Lista partnera' },
  { href: '#contact', text: 'Kontakt' },
];

export const footerSecondColumnItems: MenuItem[] = [
  { href: '#brands', text: 'Brendovi' },
  { href: '#about', text: 'O nama' },
  { href: '#testimonials', text: 'Utisci' },
  { href: '#suggestions', text: 'Preporuka' },
];

export type ManufacturerProps = {
  name: string;
  image: string;
  imageMobile: string;
  logo: string;
  logoWhite: string;
  title?: string;
  description: string;
  link: string;
};

export const manufacturers: ManufacturerProps[] = [
  {
    name: 'etnia',
    image: '/brands/etnia.png',
    logo: '/brands/etnia-logo.svg',
    imageMobile: '/brands/mobile/etnia.png',
    logoWhite: '/brands/etnia-logo-white.svg',
    title: 'Spojiti nesvakidasnje',
    description:
      'Strast prema naočarima, koja je započela u pedesetim godinama prošlog veka, traje kroz rad tri generacije poznatog porodičnog španskog brenda Etnia Barcelona. Od svog osnivanja, poznati proizvođač naočara je sinonim za vrhunski kvalitet širom sveta. Kombinovanjem kreativnog dizajna i modnih detalja, Etnia Barcelona naočare postaju više od praktičnog dodatka – one su izraz autentičnog stila. Zahvaljujući sočivima od mineralnog stakla, brend nudi izuzetno vizuelno iskustvo, omogućavajući svakom korisniku da vidi svet jasnije i sa stilom.',
    link: 'https://www.etniabarcelona.com/',
  },
  {
    name: 'safilo',
    image: '/brands/safilo.png',
    imageMobile: '/brands/mobile/safilo.png',
    logo: '/brands/safilo-logo.svg',
    logoWhite: '/brands/safilo-logo-white.svg',
    description:
      'Safilo je internacionalno prepoznatljiv brend u svetu optike, poznat po svojoj posvećenosti inovacijama, kvalitetu i održivosti. Sa više od 80 godina iskustva, Safilo se ističe kroz svoju jedinstvenu filozofiju Safilo Way, koja kombinuje strast prema dizajnu sa odgovornošću prema životnoj sredini. Brend neprekidno teži ka tehnološkim inovacijama i visokom kvalitetu proizvoda, dok istovremeno implementira održive prakse u svim aspektima poslovanja.',
    link: 'https://www.safilogroup.com/en',
  },
  {
    name: 'menrad',
    image: '/brands/menrad.png',
    imageMobile: '/brands/mobile/menrad.png',
    logo: '/brands/menrad-logo.svg',
    logoWhite: '/brands/menrad-logo-white.svg',
    description:
      'Menrad, porodična kompanija osnovana 1896. godine, jedan je od vodećih proizvođača naočara u Evropi. Sa sedištem u Nemačkoj i prisustvom u preko 100 zemalja, Menrad nudi vrhunske dioptrijske i sunčane naočare koje spajaju kvalitetne materijale, inovativan dizajn i komfor. Vođen četvrtom generacijom porodice, brend pažljivo prati trendove i garantuje visok nivo izrade kroz kontrolu celokupnog proizvodnog procesa.',
    link: 'https://www.menrad.de/en/',
  },
  {
    name: 'forartssake',
    image: '/brands/fas.png',
    logo: '/brands/fas-logo.png',
    imageMobile: '/brands/mobile/fas.png',
    logoWhite: '/brands/fas-logo.png',
    description:
      'Londonski brend For Art&#39;s Sake, osnovan 2016. godine, poznat je po luksuznim sunčanim naočarima koje kombinuju umetnost i funkcionalnost. Njihovi dizajni su kreirani za samouverene žene i dostupni su u preko 500 prestižnih prodavnica širom sveta. Obožavaju ih slavne ličnosti poput Beyonce i Olivije Palermo, a često se pojavljuju u vodećim modnim časopisima poput Vogue i Elle.',
    link: 'https://www.fasforartssake.com//',
  },
];

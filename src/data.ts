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

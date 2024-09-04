type FeaturedProductProps = {
  title: string;
  category: string;
  image: string;
};

export const featuredProducts: FeaturedProductProps[] = [
  {
    title: 'David Beckham',
    category: 'Sunčane',
    image: '/products/david_beckham_naocare.png',
  },
  {
    title: 'David Beckham',
    category: 'Sunčane',
    image: '/products/david_beckham_naocare.png',
  },
  {
    title: 'David Beckham',
    category: 'Sunčane',
    image: '/products/david_beckham_naocare.png',
  },
  {
    title: 'David Beckham',
    category: 'Sunčane',
    image: '/products/david_beckham_naocare.png',
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

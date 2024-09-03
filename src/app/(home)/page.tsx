import Image from 'next/image';
import styles from './page.module.scss';
import Hero from '@/components/home/Hero';
import BrandsSlider from '@/components/home/BrandsSlider';
import OfferSection from '@/components/home/OfferSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BrandsAnimated from '@/components/home/BrandsAnimated';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <BrandsSlider />
      {/* <OfferSection />
      <TestimonialsSection />
      <AboutSection /> */}
      {/* <PartnersSection/> */}
      {/* <FeaturedProducts />
      <BrandsAnimated /> */}
      {/* kvadrati ovde */}
      <NewsletterSection />
    </main>
  );
}

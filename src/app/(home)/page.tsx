import Image from 'next/image';
import styles from './page.module.scss';
import Hero from '@/components/Hero';
import BrandsSlider from '@/components/BrandsSlider';
import OfferSection from '@/components/OfferSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandsAnimated from '@/components/BrandsAnimated';
import NewsletterSection from '@/components/NewsletterSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <BrandsSlider />
      <OfferSection />
      <FeaturedProducts />
      <BrandsAnimated />
      <AboutSection />
      <TestimonialsSection />

      {/* <PartnersSection/> */}

      {/* kvadrati ovde */}
      <NewsletterSection />
    </main>
  );
}

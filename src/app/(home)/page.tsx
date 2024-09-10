import styles from './page.module.scss';
import Hero from '@/components/Hero';
import BrandsSlider from '@/components/BrandsSlider';
import OfferSection from '@/components/OfferSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutSection from '@/components/AboutSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandsAnimated from '@/components/BrandsAnimated';
import BenefitsSection from '@/components/BenefitsSection';
import CtaSection from '@/components/CtaSection';
import Manufacturers from '@/components/manufacturers/Manufacturers';

export default function Home() {
  return (
    <main id='home' className={styles.main}>
      <Hero />
      <BrandsSlider />
      <OfferSection />
      <FeaturedProducts />
      <Manufacturers />
      <BrandsAnimated />
      <AboutSection />
      <TestimonialsSection />
      <BenefitsSection />
      <CtaSection />
    </main>
  );
}

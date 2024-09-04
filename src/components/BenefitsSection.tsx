import styles from './BenefitsSection.module.scss';
import Image from 'next/image';
import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  return (
    <section className={styles.benefits}>
      <Image
        src='/home/benefits-bg.png'
        alt='Star Vision benefiti i zanimljivosti'
        className={styles.benefits__bg}
        fill
      />

      <BenefitCard />
    </section>
  );
};

export default BenefitsSection;

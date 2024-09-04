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

      {/* <div className={styles.benefits__card}>
        <Logo color='#F7F7F7' size={370} />

        <h2 className={styles.benefits__card__subtitle}>
          Benefiti i zanimljivosti
        </h2>
        <h3 className={styles.benefits__card__title}>Zona Eksperta</h3>
        <p className={styles.benefits__card__text}>
          Kako da privučem klijente u svoj optičarski salon? Kako da napravim
          marketinšku kampanju za optičarsku radnju? U{' '}
          <strong>Zoni eksperta</strong> ćemo sa vama podeliti praktična znanja
          i savete uz poslednje vesti i zanimljivosti iz sveta optike.
        </p>
      </div> */}
      <BenefitCard />
    </section>
  );
};

export default BenefitsSection;

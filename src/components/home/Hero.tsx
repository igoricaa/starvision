import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero__container}>
      <div className={styles.hero__bg}>
        <Image src='/home/hero-bg.png' alt='Star Optics' fill />
      </div>

      <a href='#newsletter' className={styles.newsletterButton}>
        Prati Naš Newsletter
      </a>

      <h1>Star Vision Preporučuje</h1>
      <p>
        Our wellbeing is a journey, we believe in small, sustainable steps which
        form life-long habits.
      </p>
      <div className={styles.buttonsWrapper}>
        <a
          href='#saznajViše'
          className={[styles.button, styles.buttonTransparent].join(' ')}
        >
          Saznaj Više
        </a>
        <a href='#kontakt' className={styles.button}>
          Kontaktirajte Nas
        </a>
      </div>
    </section>
  );
};

export default Hero;

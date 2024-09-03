import Image from 'next/image';
import styles from './Hero.module.scss';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className={[styles.hero, 'side__padding'].join(' ')}>
      <Image
        src='/home/hero-bg.png'
        alt='Star Optics'
        className={styles.hero__bg}
        fill
        priority
      />

      <a href='#newsletter' className={styles.hero__newsletterButton}>
        Prati Naš Newsletter
      </a>

      <h1>
        Star Vision
        <br />
        Preporučuje
      </h1>
      <p>
        Our wellbeing is a journey, we believe in small, sustainable steps which
        form life-long habits.
      </p>
      <div className={styles.hero__buttonsWrapper}>
        <Button link='#saznajViše'>Saznaj Više</Button>
        <Button link='#kontakt' variant='transparent'>
          Kontaktirajte Nas
        </Button>
      </div>
    </section>
  );
};

export default Hero;

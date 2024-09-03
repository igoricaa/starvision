import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__contactInfo}>
        <h3>Star Vision</h3>
        <p>Pon - Pet, 09.00 - 17.00</p>
        <p>Sub, 10.00 - 15.00</p>
        <a
          href='tel:0038111123456789'
          className={styles.footer__contactInfo__phone}
        >
          +381 11 1234 567 89
        </a>
        <a
          href='mailto:office@starvision.rs'
          className={styles.footer__contactInfo__email}
        >
          office@starvision.rs
        </a>
        <a
          href='https://instagram.com'
          className={styles.footer__contactInfo__instagram}
          target='_blank'
          rel='noreferrer'
          aria-label='Instagram'
        >
          @starvision
        </a>
      </div>
      <div className={styles.footer__menu}>
        <div className={styles.footer__menu__column__one}>
          <a href='#partners'>Lista partnera</a>
          <a href='#contact'>Kontakt</a>
        </div>
        <div className={styles.footer__menu__column__two}>
          <a href='#brands'>Brendovi</a>
          <a href='#about'>O nama</a>
          <a href='#testimonials'>Utisci</a>
          <a href='#suggestions'>Preporuka</a>
        </div>
        <div className={styles.footer__colaboration}>
          <p>U saradnji sa:</p>
          <Image
            src='/footer/grossoptics.svg'
            alt='Grossoptics'
            width={163}
            height={71}
          />
          <Image
            src='/footer/diopta.svg'
            alt='Diopta'
            width={172}
            height={30}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from 'next/image';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__contactInfo}>
        <h3 className={styles.footer__contactInfo__title}>Star Vision</h3>
        <div>
          <p>Pon - Pet, 09.00 - 17.00</p>
          <p>Sub, 10.00 - 15.00</p>
        </div>
        <div>
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
      </div>
      <div className={styles.footer__menu}>
        <div className={[styles.footer__menu__column, styles.first].join(' ')}>
          <ul>
            <li className={styles.footer__menu__column__item}>
              <Link href='#partners'>Lista partnera</Link>
            </li>
            <li className={styles.footer__menu__column__item}>
              <Link href='#contact'>Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className={[styles.footer__menu__column, styles.second].join(' ')}>
          <ul>
            <li className={styles.footer__menu__column__item}>
              <Link href='#brands'>Brendovi</Link>
            </li>
            <li className={styles.footer__menu__column__item}>
              <Link href='#about'>O nama</Link>
            </li>
            <li className={styles.footer__menu__column__item}>
              <Link href='#testimonials'>Utisci</Link>
            </li>
            <li className={styles.footer__menu__column__item}>
              <Link href='#suggestions'>Preporuka</Link>
            </li>
          </ul>
        </div>
        <div
          className={[styles.colaboration, styles.footer__menu__column].join(
            ' '
          )}
        >
          <p>U saradnji sa:</p>
          <Image
            src='/grossoptics.svg'
            alt='Grossoptics'
            width={163}
            height={71}
          />
        </div>
      </div>
      <div className={styles.footer__bottom__logo}>
        <Image src='/logo/logo-full.svg' alt='Star Vision' sizes='100vw' fill />
      </div>
    </footer>
  );
};

export default Footer;

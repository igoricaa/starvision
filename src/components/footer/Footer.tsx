import Image from 'next/image';
import styles from './Footer.module.scss';
import Logo from '../ui/Logo';
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
          <Link href='#partners'>Lista partnera</Link>
          <Link href='#contact'>Kontakt</Link>
        </div>
        <div className={[styles.footer__menu__column, styles.second].join(' ')}>
          <Link href='#brands'>Brendovi</Link>
          <Link href='#about'>O nama</Link>
          <Link href='#testimonials'>Utisci</Link>
          <Link href='#suggestions'>Preporuka</Link>
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
          <Image src='/diopta.svg' alt='Diopta' width={172} height={30} />
        </div>
      </div>
      {/* <div className={styles.footer__bottom}> */}
      <div className={styles.footer__bottom__logoIconWrapper}>
        <Image
          src='/logo/logo-footer.svg'
          alt='Star Vision'
          fill
          sizes='15vw'
          className={styles.footer__bottom__logoIcon}
        />
      </div>
      <div className={styles.footer__bottom__logoTextWrapper}>
        <Image
          src='/logo/logo-text.svg'
          alt='Star Vision'
          fill
          sizes='85vw'
          className={styles.footer__bottom__logoText}
        />
      </div>
      {/* // </div> */}
    </footer>
  );
};

export default Footer;

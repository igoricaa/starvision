import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';
import {
  footerFirstColumnItems,
  footerSecondColumnItems,
  MenuItem,
} from '@/data';

type ContactItem = {
  href: string;
  text: string;
  className: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

const ContactInfo = () => (
  <div className={styles.footer__contactInfo}>
    <h3 className={styles.footer__contactInfo__title}>Star Vision</h3>
    <div>
      <p>Pon - Pet, 09.00 - 17.00</p>
      <p>Sub, 10.00 - 15.00</p>
    </div>
    <div>
      {[
        {
          href: 'tel:0038111123456789',
          text: '+381 11 1234 567 89',
          className: 'phone',
        },
        {
          href: 'mailto:office@starvision.rs',
          text: 'office@starvision.rs',
          className: 'email',
        },
        {
          href: 'https://instagram.com',
          text: '@starvision',
          className: 'instagram',
          target: '_blank',
          rel: 'noreferrer',
        },
      ].map(({ href, text, className, ...props }: ContactItem) => (
        <a
          key={href}
          href={href}
          className={styles[`footer__contactInfo__${className}`]}
          {...props}
        >
          {text}
        </a>
      ))}
    </div>
  </div>
);

type MenuColumnProps = {
  items: MenuItem[];
  className: string;
};

const MenuColumn = ({ items, className }: MenuColumnProps) => (
  <div className={`${styles.footer__menu__column} ${styles[className]}`}>
    <ul>
      {items.map(({ href, text }: MenuItem) => (
        <li key={href} className={styles.footer__menu__column__item}>
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContactInfo />
      <div className={styles.footer__menu}>
        <MenuColumn items={footerFirstColumnItems} className='first' />
        <MenuColumn items={footerSecondColumnItems} className='second' />
        <div
          className={`${styles.colaboration} ${styles.footer__menu__column}`}
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

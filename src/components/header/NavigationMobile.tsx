'use client';

import { useEffect, useRef, useState } from 'react';
import LogoFull from '../ui/LogoFull';
import styles from './NavigationMobile.module.scss';
import Logo from '../ui/Logo';

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleMenu = () => setIsOpen(!isOpen);
    const burger = burgerRef.current;
    if (burger) {
      burger.addEventListener('click', toggleMenu);
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={[
          styles.navigation__mobile__burger,
          isOpen ? styles.open : '',
        ].join(' ')}
        ref={burgerRef}
      >
        <div className={styles.navigation__mobile__burger__bar}></div>
        <div className={styles.navigation__mobile__burger__bar}></div>
        <div className={styles.navigation__mobile__burger__bar}></div>
      </div>
      <div
        className={[styles.navigation__mobile, isOpen ? styles.open : ''].join(
          ' '
        )}
      >
        <LogoFull color='#000' />
        <div className={styles.navigation__mobile__menu}>
          <ul>
            <li>
              <a href='#brendovi'>Brendovi</a>
            </li>
            <li>
              <a href='#modeli'>O nama</a>
            </li>
            <li>
              <a href='#testimonials'>Utisci</a>
            </li>
            <li>
              <a href='#models'>Modeli</a>
            </li>
            <li>
              <a href='#partners'>Lista partnera</a>
            </li>
            <li>
              <a href='#contact'>Kontakt</a>
            </li>
          </ul>
        </div>
        <div className={styles.navigation__mobile__footer}>
          <div className={styles.navigation__mobile__footer__helperWrapper}>
            <a
              href='tel:+38111123456789'
              className={styles.navigation__mobile__footer__phone}
            >
              +381 11 1234 567 89
            </a>
            <a
              href='mailto:info@starvision.rs'
              className={styles.navigation__mobile__footer__mail}
            >
              info@starvision.rs
            </a>
          </div>
          <a
            href='https://instagram.com/'
            className={styles.navigation__mobile__footer__instagram}
          >
            @starvision
          </a>
        </div>
        <Logo color='#D7D7D7' size={460} />
      </div>
    </>
  );
};

export default NavigationMobile;

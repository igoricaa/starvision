'use client';

import Link from 'next/link';
import styles from './Navigation.module.scss';
import BurgerIcon from '../ui/BurgerIcon';
import { useEffect, useRef, useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleBurgerClick = (e: MouseEvent) => {
      setIsOpen(!isOpen);
    };

    const handleScroll = () => {
      if (window.scrollY > 100 && isOpen) {
        setIsOpen(false);
      }
    };

    const burger = burgerRef.current;
    if (burger) {
      burger.addEventListener('click', handleBurgerClick);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (burger) burger.removeEventListener('click', handleBurgerClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className={[styles.navigation, isOpen ? styles.open : ''].join(' ')}>
      <ul className={styles.navigation__menu}>
        <li
          className={[
            styles.navigation__menu__item,
            styles.navigation__menu__item__first,
          ].join(' ')}
        >
          <Link href='#brands'>Brendovi</Link>
        </li>
        <li
          className={[
            styles.navigation__menu__item,
            styles.navigation__menu__item__second,
          ].join(' ')}
        >
          <Link href='#about'>O nama</Link>
        </li>
        <li
          className={[
            styles.navigation__menu__item,
            styles.navigation__menu__item__third,
          ].join(' ')}
        >
          <Link href='#testimonials'>Utisci</Link>
        </li>
        <li
          className={[
            styles.navigation__menu__item,
            styles.navigation__menu__item__fourth,
          ].join(' ')}
        >
          <Link href='#models'>Modeli</Link>
        </li>
      </ul>
      <div className={styles.navigation__helperWrapper}>
        <ul className={styles.navigation__menu}>
          <li
            className={[
              styles.navigation__menu__item,
              styles.navigation__menu__item__fifth,
            ].join(' ')}
          >
            <Link href='#partners'>Lista partnera</Link>
          </li>
          <li
            className={[
              styles.navigation__menu__item,
              styles.navigation__menu__item__sixth,
            ].join(' ')}
          >
            <Link href='#contact'>Kontakt</Link>
          </li>
        </ul>
        <div ref={burgerRef} className={styles.navigation__burger}>
          <BurgerIcon color='#000' />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

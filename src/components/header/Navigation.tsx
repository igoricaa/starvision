'use client';

import Link from 'next/link';
import styles from './Navigation.module.scss';
import BurgerIcon from '../ui/BurgerIcon';
import { useCallback, useEffect, useRef, useState } from 'react';

const menuItems = [
  { href: '#brands', text: 'Brendovi', className: 'first' },
  { href: '#about', text: 'O nama', className: 'second' },
  { href: '#testimonials', text: 'Utisci', className: 'third' },
  { href: '#models', text: 'Modeli', className: 'fourth' },
  { href: '#partners', text: 'Lista partnera', className: 'fifth' },
  { href: '#contact', text: 'Kontakt', className: 'sixth' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100 && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const burger = burgerRef.current;
    if (burger) {
      burger.addEventListener('click', toggleMenu);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (burger) burger.removeEventListener('click', toggleMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleMenu, handleScroll]);

  return (
    <nav className={`${styles.navigation} ${isOpen ? styles.open : ''} darkLogo`}>
      <ul className={styles.navigation__menu}>
        {menuItems.slice(0, 4).map((item, index) => (
          <li
            key={item.href}
            className={`${styles.navigation__menu__item} ${
              styles[`navigation__menu__item__${item.className}`]
            }`}
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.navigation__helperWrapper}>
        <ul className={styles.navigation__menu}>
          {menuItems.slice(4).map((item, index) => (
            <li
              key={item.href}
              className={`${styles.navigation__menu__item} ${
                styles[`navigation__menu__item__${item.className}`]
              }`}
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div ref={burgerRef} className={styles.navigation__burger}>
          <BurgerIcon color='#000' />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

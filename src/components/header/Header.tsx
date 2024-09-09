import styles from './Header.module.scss';
import Burger from './Navigation';
import Link from 'next/link';
import LogoFull from '../ui/LogoFull';
import BurgerIcon from '../ui/BurgerIcon';
import Navigation from './Navigation';
import Logo from '../ui/Logo';
import NavigationMobile from './NavigationMobile';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <LogoFull color='#000' />
        <Navigation />
      </div>
      <div className={styles.header__mobile__container}>
        <Logo />
        <NavigationMobile />
      </div>
    </header>
  );
};

export default Header;

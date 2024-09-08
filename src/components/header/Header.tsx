import styles from './Header.module.scss';
import Burger from './Navigation';
import Link from 'next/link';
import LogoFull from '../ui/LogoFull';
import BurgerIcon from '../ui/BurgerIcon';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <LogoFull color='#000' />
        {/* <div className={styles.header__desktopMenuWrapper}>
        <div>
          <ul>
            <li>
              <Link href='#brands'>Brendovi</Link>
            </li>
            <li>
              <Link href='#about'>O nama</Link>
            </li>
            <li>
              <Link href='#testimonials'>Utisci</Link>
            </li>
            <li>
              <Link href='#models'>Modeli</Link>
            </li>
          </ul>
        </div>
        <div> */}
        {/* <ul>
            <li>
              <Link href='#partners'>Lista partnera</Link>
            </li>
            <li>
              <Link href='#contact'>Kontakt</Link>
            </li>
          </ul> */}
        <Navigation />
        {/* </div> */}
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;

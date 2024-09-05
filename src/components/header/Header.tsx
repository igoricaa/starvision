import styles from './Header.module.scss';
import Burger from './Burger';
import Logo from '../ui/Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__desktopMenuWrapper}>
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
        <div>
          <ul>
            <li>
              <Link href='#partners'>Lista partnera</Link>
            </li>
            <li>
              <Link href='#contact'>Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>

      <Burger />
    </header>
  );
};

export default Header;

import styles from './Header.module.scss';
import Burger from './Burger';
import Logo from '../ui/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__desktopMenuWrapper}>
        <div>
          <ul>
            <li>
              <a href='#brands'>Brendovi</a>
            </li>
            <li>
              <a href='#about'>O nama</a>
            </li>
            <li>
              <a href='#testimonials'>Utisci</a>
            </li>
            <li>
              <a href='#models'>Modeli</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href='#partners'>Lista partnera</a>
            </li>
            <li>
              <a href='#contact'>Kontakt</a>
            </li>
          </ul>
        </div>
      </div>

      <Burger />
    </header>
  );
};

export default Header;

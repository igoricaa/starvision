import styles from './Header.module.scss';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';
import { HeaderLogo } from './HeaderLogo';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <HeaderLogo />
        <Navigation />
      </div>
      <div className={styles.header__mobile__container}>
        <HeaderLogo />
        <NavigationMobile />
      </div>
    </header>
  );
};

export default Header;

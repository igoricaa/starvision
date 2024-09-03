import Image from 'next/image';
import styles from './Header.module.scss';
import Burger from './Burger';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoWrapper}>
        <Image
          src='/logo/logo.svg'
          alt='Star Vision'
          width={36}
          height={36}
          priority
        />
      </div>
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

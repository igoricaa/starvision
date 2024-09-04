import Image from 'next/image';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <Image
        src='/home/about-bg.png'
        alt='Star Vision o nama'
        className={styles.about__bg}
        fill
      />

      <div className={styles.about__card}>
        <div className={styles.about__card__logoWrapper}>
          <Image
            src='/logo/logo.svg'
            alt='Star Vision logo'
            fill
            sizes='(max-width: 480px) 210px, (max-width: 1024px) 300px, 370px'
            className={styles.about__card__logo}
          />
        </div>

        <h2 className={styles.about__card__subtitle}>O nama</h2>
        <h3 className={styles.about__card__title}>
          Star Vision; Vas stabilan partner za kontinuirani uspeh.
        </h3>
        <p className={styles.about__card__text}>
          Kao vodeći distributer naočara i optičkih rešenja, Star Optic nudi
          partnerima jedinstvene prednosti koje unapređuju vaše poslovanje.
          Saradnja sa nama donosi pristup širokom asortimanu renomiranih
          brendova, fleksibilne uslove nabavke i konkurentne cene. Naša stručna
          podrška je tu da vam pomogne u svakom koraku – od odabira proizvoda do
          marketinške podrške i edukacije zaposlenih. Sa Star Optic-om, možete
          očekivati brzu isporuku, kvalitetne proizvode i pouzdanu saradnju koja
          će doprineti rastu vašeg biznisa.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

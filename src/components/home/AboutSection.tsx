import Image from 'next/image';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <Image src='/home/about-bg.png' alt='About us' fill />

      <div className={styles.aboutCard}>
        <h3>O nama</h3>
        <h4>Star Vision; Vas stabilan partner za kontinuirani uspeh.</h4>
        <p>
          Kao vodeći distributer naočara i optičkih rešenja, Star Optic nudi
          partnerima jedinstvene prednosti koje unapređuju vaše poslovanje.
          Saradnja sa nama donosi pristup širokom asortimanu renomiranih
          brendova, fleksibilne uslove nabavke i konkurentne cene. Naša stručna
          podrška je tu da vam pomogne u svakom koraku - od odabira proizvoda do
          marketinške podrške i edukacije zaposlenih. Sa Star Optic-om, možete
          očekivati brzu isporuku, kvalitetne proizvode i pouzdanu saradnju koja
          će doprineti rastu vašeg biznisa.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

'use client';

import Image from 'next/image';
import styles from './AboutSection.module.scss';
import Logo from './ui/Logo';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    initialInView: true,
    triggerOnce: true,
  });

  return (
    <section
      id='about'
      className={[styles.about, 'darkLogo'].join(' ')}
      ref={ref}
    >
      <Image
        src='/home/about-bg.png'
        alt='Star Vision o nama'
        className={styles.about__bg}
        fill
      />

      <div
        className={[
          styles.about__card,
          inView ? styles.visible : '',
          'darkLogo',
        ].join(' ')}
      >
        <Logo size={370} />

        <h2 className={styles.about__card__subtitle}>O nama</h2>
        <h3 className={styles.about__card__title}>
          Star Vision; Vas stabilan partner za kontinuirani uspeh.
        </h3>
        <p className={styles.about__card__text}>
          Mi smo Star Vision, lideri u distribuciji sunčanih i dioptrijskih
          naočara, sa preko 20 godina iskustva na tržištu jugoistočne Evrope.
          Kao deo kompanije Grossoptic, fokusirani smo na tržišta Srbije, Crne
          Gore i Makedonije. Zastupamo globalne brendove poput Safilo, Menrad,
          Etnia Barcelona i For Art&apos;s Sake, pružamo širok asortiman naočara
          i diktiramo modne trendove. Naša misija? Posvećenost našim klijentima
          i snažno prisustvo kroz vrhunske proizvode koje obožavaju milioni
          ljudi širom sveta.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;

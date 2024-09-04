'use client';

import { useState } from 'react';
import styles from './BenefitCard.module.scss';
import Logo from './ui/Logo';

const BenefitCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.benefits__card}>
      <Logo color='#F7F7F7' size={370} />

      <h2 className={styles.benefits__card__subtitle}>
        Benefiti i zanimljivosti
      </h2>
      <h3 className={styles.benefits__card__title}>Zona Eksperta</h3>
      <p className={[styles.benefits__card__text, styles.short].join(' ')}>
        Kako da privučem klijente u svoj optičarski salon? Kako da napravim
        marketinšku kampanju za optičarsku radnju? U{' '}
        <strong>Zoni eksperta</strong> ćemo sa vama podeliti praktična znanja i
        savete uz poslednje vesti i zanimljivosti iz sveta optike.
      </p>

      <p
        className={[
          styles.benefits__card__text,
          styles.long,
          isExpanded ? styles.visible : '',
        ].join(' ')}
      >
        Kako da privučem klijente u svoj optičarski salon? Kako da napravim
        marketinšku kampanju za optičarsku radnju? U{' '}
        <strong>Zoni eksperta</strong> ćemo sa vama podeliti praktična znanja i
        savete uz poslednje vesti i zanimljivosti iz sveta optike. Kako da
        privučem klijente u svoj optičarski salon? Kako da napravim marketinšku
        kampanju za optičarsku radnju? U <strong>Zoni eksperta</strong> ćemo sa
        vama podeliti praktična znanja i savete uz poslednje vesti i
        zanimljivosti iz sveta optike. Kako da privučem klijente u svoj
        optičarski salon? Kako da napravim marketinšku kampanju za optičarsku
        radnju? U <strong>Zoni eksperta</strong> ćemo sa vama podeliti praktična
        znanja i savete uz poslednje vesti i zanimljivosti iz sveta optike.
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={styles.benefits__card__expandButton}
      >
        {isExpanded ? 'Sakrij' : 'Pročitaj više'}
      </button>
    </div>
  );
};

export default BenefitCard;

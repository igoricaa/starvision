'use client';

import { useState } from 'react';
import styles from './BenefitCard.module.scss';
import Logo from './ui/Logo';
import ArrowRight from './icons/ArrowRight';
import Button from './ui/Button';

const BenefitCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.benefits__card}>
      <Logo color='#F7F7F7' size={370} />

      <h2 className={styles.benefits__card__subtitle}>
        Benefiti i zanimljivosti
        <i>
          <ArrowRight color='#000' />
        </i>
      </h2>
      <h3 className={styles.benefits__card__title}>Zona Eksperta</h3>
      <p className={[styles.benefits__card__text, styles.short].join(' ')}>
        Za privlačenje mladih kupaca u optičke salone, važno je uskladiti
        marketinške strategije s modernim trendovima. Prisutnost na društvenim
        mrežama poput Instagrama i TikToka može povećati vidljivost brenda, dok
        moderna web stranica i mobilne aplikacije nude dodatne pogodnosti kao
        što su zakazivanje termina i praćenje promocija. Atraktivan enterijer i
        široka ponuda modernih okvira takođe privlače mlade klijente. Promocije,
        programi lojalnosti i edukacija o zdravlju očiju doprinose privlačenju i
        zadržavanju kupaca.
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

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={styles.benefits__card__expandButton}
      >
        {isExpanded ? 'Sakrij' : 'Pročitaj više'}
      </Button>
    </div>
  );
};

export default BenefitCard;

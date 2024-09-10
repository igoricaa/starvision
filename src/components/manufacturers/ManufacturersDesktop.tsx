'use client';

import styles from './ManufacturersDesktop.module.scss';
import Image from 'next/image';
import Button from '../ui/Button';
import { useState } from 'react';
import { ManufacturerProps, manufacturers } from '@/data';
import SectionTitle from '../SectionTitle';

const ManufacturersDesktop = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={[
        styles.manufacturers,
        activeIndex === 2 || activeIndex === 3 ? styles.shifted : '',
      ].join(' ')}
    >
      <SectionTitle>Naši proizvođači</SectionTitle>
      {manufacturers.map((manufacturer: ManufacturerProps, index: number) => (
        <article
          className={[
            styles.manufacturer,
            styles[manufacturer.name],
            activeIndex === index ? styles.active : '',
          ].join(' ')}
          key={`${manufacturer.name}-${index}`}
        >
          <div className={styles.manufacturer__image}>
            <Image
              src={manufacturer.image}
              alt={manufacturer.name}
              fill
              sizes='30vw'
              onClick={() => handleItemClick(index)}
            />
            <div
              className={[
                styles.manufacturer__image__logo,
                styles[manufacturer.name],
                activeIndex === index ? styles.active : '',
              ].join(' ')}
            >
              <Image
                src={manufacturer.logoWhite}
                alt={manufacturer.name}
                fill
              />
            </div>
          </div>

          <div className={[styles.manufacturer__content].join(' ')}>
            <div
              className={[
                styles.manufacturer__content__logo,
                styles[manufacturer.name],
              ].join(' ')}
            >
              <Image src={manufacturer.logo} alt={manufacturer.name} fill />
            </div>
            {manufacturer.title && (
              <h3 className={styles.manufacturer__content__title}>
                {manufacturer.title}
              </h3>
            )}
            <p className={styles.manufacturer__content__description}>
              {manufacturer.description}
            </p>
            <Button link={manufacturer.link} external={true}>
              Poseti sajt
            </Button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ManufacturersDesktop;

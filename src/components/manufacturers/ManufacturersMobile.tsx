'use client';

import Image from 'next/image';
import styles from './ManufacturersMobile.module.scss';
import { ManufacturerProps, manufacturers } from '@/data';
import Button from '../ui/Button';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import SectionTitle from '../SectionTitle';

const ManufacturersMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className={styles.manufacturers}>
      <SectionTitle>Naši proizvođači</SectionTitle>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
      <div className={'keen-slider'} ref={sliderRef}>
        {manufacturers.map((manufacturer: ManufacturerProps, index: number) => (
          <article
            key={`${manufacturer.name}-${index}`}
            className={[styles.manufacturer, 'keen-slider__slide'].join(' ')}
          >
            <div className={styles.manufacturer__image}>
              <Image
                src={manufacturer.imageMobile}
                alt={manufacturer.name}
                fill
                sizes='100vw - 2rem'
              />
            </div>
            <Image
              src={manufacturer.logo}
              alt={manufacturer.name}
              width={277}
              height={50}
              className={styles.manufacturer__logo}
            />
            <h3 className={styles.manufacturer__title}>{manufacturer.title}</h3>
            <p className={styles.manufacturer__description}>
              {manufacturer.description}
            </p>
            <Button
              link={manufacturer.link}
              external={true}
              className={styles.manufacturer__button}
            >
              Poseti sajt
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ManufacturersMobile;

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? 'disabled' : '';

  return (
    <div
      onClick={props.onClick}
      className={`${styles.arrow} ${
        props.left ? `${styles.arrow__left}` : `${styles.arrow__right}`
      } ${styles[disabled]}`}
    >
      <i></i>
    </div>
  );
}

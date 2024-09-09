'use client';

import styles from './Manufacturers.module.scss';
import Image from 'next/image';
import Button from '../ui/Button';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';
import { ManufacturerProps, manufacturers } from '@/data';

const Manufacturers = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: 'free',
    drag: true,
    slides: {
      perView: 3,
      spacing: 32,
    },
    defaultAnimation: {
      duration: 300,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      setActiveIndex(null);
    },
    created(slider) {
      setLoaded(true);
    },
  });

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    const slider = instanceRef.current;

    if (slider) {
      slider.slides[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'center',
      });
    }
  };

  return (
    <section className={styles.manufacturersSection}>
      {loaded && instanceRef.current && (
        <div className={styles.manufacturers__navigation__arrows}>
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
            disabled={currentSlide === 1}
          />
        </div>
      )}
      <div
        ref={ref}
        className={['keen-slider', styles.manufacturers].join(' ')}
      >
        {manufacturers.map((manufacturer: ManufacturerProps, index: number) => (
          <article
            className={[
              'keen-slider__slide',
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
      </div>
    </section>
  );
};

export default Manufacturers;

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

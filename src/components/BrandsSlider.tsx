'use client';

import { useRef } from 'react';
import Image from 'next/image';
import styles from './BrandsSlider.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { brands } from '@/data';

const animation = { duration: 10000, easing: (t: number) => t };

const BrandsSlider = () => {
  const timer = useRef<number>();

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: 'performance',
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: { perView: 5, spacing: 124 },
    breakpoints: {
      '(max-width: 1024px)': { slides: { perView: 4, spacing: 80 } },
      '(max-width: 480px)': { slides: { perView: 3, spacing: 32 } },
    },
  });

  const handleMouseEnter = () => {
    clearTimeout(timer.current);
    instanceRef.current?.animator.stop();
  };

  const handleMouseLeave = () => {
    timer.current = window.setTimeout(() => {
      instanceRef.current?.moveToIdx(
        instanceRef.current.track.details.abs + 5,
        true,
        animation
      );
    }, 100);
  };

  return (
    <section
      className={[styles.brands, styles.slider, 'keen-slider'].join(' ')}
      ref={sliderRef}
    >
      {brands.map((brand, index) => (
        <div
          key={`slide${index}`}
          className={[styles.slider__slide, 'keen-slider__slide'].join(' ')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={brand.logo} alt={brand.name} fill />
        </div>
      ))}
    </section>
  );
};

export default BrandsSlider;

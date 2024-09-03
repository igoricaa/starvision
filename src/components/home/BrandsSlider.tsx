'use client';

import Image from 'next/image';
import styles from './BrandsSlider.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { brands } from '@/data';

const animation = { duration: 10000, easing: (t: number) => t };

const BrandsSlider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
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
  });
  return (
    <section
      className={[styles.brands, styles.slider, 'keen-slider'].join(' ')}
      ref={sliderRef}
    >
      {brands.map((brand, index) => (
        <div
          key={`slide${index}`}
          className={[styles.slider__slide, 'keen-slider__slide'].join(' ')}
        >
          <Image src={brand.logo} alt={brand.name} fill />
        </div>
      ))}

      {/* <div className='keen-slider__slide number-slide1'>
        <Image
          src='/home/brands/fosil.png'
          alt='Fosil'
          width={252}
          height={73}
        />
      </div>
      <div className='keen-slider__slide number-slide2'>2</div>
      <div className='keen-slider__slide number-slide3'>3</div>
      <div className='keen-slider__slide number-slide4'>4</div>
      <div className='keen-slider__slide number-slide5'>5</div>
      <div className='keen-slider__slide number-slide6'>6</div> */}
    </section>
  );
};

export default BrandsSlider;

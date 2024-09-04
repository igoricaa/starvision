'use client';

import { useState } from 'react';
import styles from './TestimonialsSection.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { testimonials } from '@/data';
import Logo from './ui/Logo';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created(slider) {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <section className={styles.testimonials}>
      <Logo size={494} />
      <div ref={sliderRef} className='keen-slider'>
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialItem key={`testimonial-${index}`} {...testimonial} />
          );
        })}
      </div>
      {loaded && instanceRef.current && (
        <div className={styles.testimonials__bars}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={[
                  styles.testimonials__bars_bar,
                  currentSlide === idx ? styles.active : '',
                ].join(' ')}
              >
                {/* <div className={styles.testimonials__bars_bar__line} /> */}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;

type TestimonialItemProps = {
  author: string;
  text: string;
};

const TestimonialItem = ({ author, text }: TestimonialItemProps) => {
  return (
    <article
      className={[styles.testimonials__item, 'keen-slider__slide'].join(' ')}
    >
      <p className={styles.testimonials__item__text}>{text}</p>
      <p className={styles.testimonials__item__author}>{author}</p>
    </article>
  );
};

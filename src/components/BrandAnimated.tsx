'use client';

import Image from 'next/image';
import styles from './BrandAnimated.module.scss';
import { useEffect, useRef, useState } from 'react';

type BrandProps = {
  brand: {
    name: string;
    image1: string;
    image2: string;
  };
};

const BrandAnimated = ({ brand }: BrandProps) => {
  const brandRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  //   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    brandRef.current?.addEventListener('mouseover', (e) => {
      setIsHovered(true);
      //   setCursorPosition({
      //     x: e.clientX,
      //     y: e.clientY,
      //   });
    });

    brandRef.current?.addEventListener('mouseout', (e) => {
      setIsHovered(false);
      //   setCursorPosition({
      //     x: e.clientX,
      //     y: e.clientY,
      //   });
    });
  }, []);

  return (
    <div ref={brandRef} className={styles.brandsAnimated__item}>
      <p
        className={[
          styles.brandsAnimated__item__name,
          isHovered ? styles.hovered : '',
        ].join(' ')}
      >
        {brand.name},&nbsp;
      </p>
      {isHovered && (
        <>
          <div className={styles.brandsAnimated__item__imageWrapper}>
            <Image
              src={brand.image1}
              alt={brand.name}
              className={styles.brandsAnimated__item__image}
              fill
              sizes='(max-width: 480px) 131px, (max-width: 1024px) 180px, 292px'
            />
          </div>
          <div className={styles.brandsAnimated__item__imageWrapper}>
            <Image
              src={brand.image2}
              alt={brand.name}
              className={styles.brandsAnimated__item__image}
              fill
              sizes='(max-width: 480px) 131px, (max-width: 1024px) 180px, 292px'
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BrandAnimated;

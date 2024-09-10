'use client';

import React, { useState, useEffect, useRef } from 'react';
import LogoFull from '../ui/LogoFull';
import Logo from '../ui/Logo';

export const HeaderLogo: React.FC = () => {
  const [color, setColor] = useState<'#000' | '#fff'>('#fff');
  const logoRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 1024px)').matches);

    const checkIntersection = () => {
      if (!logoRef.current) return;
      const logoRect = logoRef.current.getBoundingClientRect();
      const darkBgElements = document.querySelectorAll('.darkLogo');

      const doesOverlap = Array.from(darkBgElements).some((el) => {
        const rect = el.getBoundingClientRect();
        return !(
          rect.right < logoRect.left ||
          rect.left > logoRect.right ||
          rect.bottom < logoRect.top ||
          rect.top > logoRect.bottom
        );
      });

      setColor(doesOverlap ? '#fff' : '#000');
    };

    window.addEventListener('scroll', checkIntersection);
    checkIntersection();

    return () => window.removeEventListener('scroll', checkIntersection);
  }, []);

  return (
    <div ref={logoRef}>
      {isMobile ? <Logo color={color} /> : <LogoFull color={color} />}
    </div>
  );
};

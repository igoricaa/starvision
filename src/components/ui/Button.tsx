'use client';

import { useCallback, useEffect, useRef } from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import ArrowRight from '../icons/ArrowRight';

type ButtonProps = {
  link: string;
  variant?: 'transparent' | 'primary';
  children: React.ReactNode;
};

export const calculateOverlayPosition = (
  event: MouseEvent,
  element: HTMLAnchorElement,
  overlay: HTMLDivElement
) => {
  if (!event) return;
  const x = event.pageX - element.getBoundingClientRect().left;
  const y = event.pageY - element.getBoundingClientRect().top - window.scrollY;

  overlay.style.top = `${y}px`;
  overlay.style.left = `${x}px`;
};

const Button = ({ link, variant = 'primary', children }: ButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseEvent = useCallback((e: MouseEvent) => {
    if (buttonRef.current && overlayRef.current) {
      calculateOverlayPosition(e, buttonRef.current, overlayRef.current);
    }
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('mouseenter', handleMouseEvent);
      button.addEventListener('mouseout', handleMouseEvent);
    }

    return () => {
      if (button) {
        button.removeEventListener('mouseenter', handleMouseEvent);
        button.removeEventListener('mouseout', handleMouseEvent);
      }
    };
  }, [handleMouseEvent]);

  return (
    <Link
      ref={buttonRef}
      href={link}
      className={[styles.button, styles[variant]].join(' ')}
    >
      <span ref={overlayRef} className={styles.overlay} />
      <p>{children}</p>
      <i>
        <ArrowRight color={variant === 'transparent' ? '#fff' : '#000'} />
      </i>
    </Link>
  );
};

export default Button;

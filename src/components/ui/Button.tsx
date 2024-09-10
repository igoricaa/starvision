'use client';

import { useCallback, useEffect, useRef } from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';
import ArrowRight from '../icons/ArrowRight';

type ButtonProps = {
  link?: string;
  variant?: 'transparent' | 'primary';
  external?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export const calculateOverlayPosition = (
  event: MouseEvent,
  element: HTMLAnchorElement | HTMLButtonElement,
  overlay: HTMLDivElement
) => {
  if (!event) return;
  const x = event.pageX - element.getBoundingClientRect().left;
  const y = event.pageY - element.getBoundingClientRect().top - window.scrollY;

  overlay.style.top = `${y}px`;
  overlay.style.left = `${x}px`;
};

const Button = ({
  link,
  variant = 'primary',
  external = false,
  children,
  className,
  onClick,
}: ButtonProps) => {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseEvent = useCallback((e: MouseEvent) => {
    if (buttonRef.current && overlayRef.current) {
      calculateOverlayPosition(e, buttonRef.current, overlayRef.current);
    }
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('mouseenter', handleMouseEvent as EventListener);
      button.addEventListener('mouseout', handleMouseEvent as EventListener);
    }

    return () => {
      if (button) {
        button.removeEventListener(
          'mouseenter',
          handleMouseEvent as EventListener
        );
        button.removeEventListener(
          'mouseout',
          handleMouseEvent as EventListener
        );
      }
    };
  }, [handleMouseEvent]);

  return (
    <>
      {link ? (
        <Link
          ref={buttonRef as React.RefObject<HTMLAnchorElement>}
          href={link}
          target={external ? '_blank' : '_self'}
          className={[styles.button, styles[variant], className].join(' ')}
          onClick={onClick}
        >
          <span ref={overlayRef} className={styles.overlay} />
          <p>{children}</p>
          <i>
            <ArrowRight color={variant === 'transparent' ? '#fff' : '#000'} />
          </i>
        </Link>
      ) : (
        <button
          ref={buttonRef as React.RefObject<HTMLButtonElement>}
          className={[styles.button, styles[variant], className].join(' ')}
          onClick={onClick}
        >
          <span ref={overlayRef} className={styles.overlay} />
          <p>{children}</p>
          <i>
            <ArrowRight color={variant === 'transparent' ? '#fff' : '#000'} />
          </i>
        </button>
      )}
    </>
  );
};

export default Button;

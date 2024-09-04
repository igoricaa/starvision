import styles from './CtaSection.module.scss';
import Image from 'next/image';
import Button from './ui/Button';
import { CtaItemProps, ctaItems } from '@/data';

const CtaItem = ({ imageSrc, imageAlt, title, buttonText }: CtaItemProps) => (
  <div
    className={`${styles.ctaSection__item} ${
      styles[`ctaSection__${imageAlt.toLowerCase()}`]
    }`}
  >
    <Image
      src={imageSrc}
      alt={imageAlt}
      fill
      sizes='50vw'
      className={styles.ctaSection__item__bg}
    />
    <h2 className={styles.ctaSection__item__title}>{title}</h2>
    <Button link='/contact'>{buttonText}</Button>
  </div>
);

const CtaSection = () => {
  return (
    <div className={styles.ctaSection}>
      {ctaItems.map((item, index) => (
        <CtaItem key={index} {...item} />
      ))}
    </div>
  );
};

export default CtaSection;

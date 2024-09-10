import styles from './CtaSection.module.scss';
import Image from 'next/image';
import Button from './ui/Button';
import { CtaItemProps, ctaItems } from '@/data';
import SectionTitle from './SectionTitle';

const CtaItem = ({
  imageSrc,
  imageAlt,
  title,
  buttonText,
  isContactButton,
}: CtaItemProps) => (
  <div className={`${styles.ctaSection__item} darkLogo`}>
    <Image
      src={imageSrc}
      alt={imageAlt}
      fill
      sizes='50vw'
      className={styles.ctaSection__item__bg}
    />
    <h2 className={styles.ctaSection__item__title}>{title}</h2>
    {isContactButton ? (
      <Button isContactButton>{buttonText}</Button>
    ) : (
      <Button link='/lokacije'>{buttonText}</Button>
    )}
  </div>
);

const CtaSection = () => {
  return (
    <div className={styles.ctaSection}>
      <SectionTitle>Dodatne informacije</SectionTitle>
      {ctaItems.map((item, index) => (
        <CtaItem key={index} {...item} isContactButton={index === 0} />
      ))}
    </div>
  );
};

export default CtaSection;

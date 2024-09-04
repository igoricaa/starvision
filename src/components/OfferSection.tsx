import Image from 'next/image';
import styles from './OfferSection.module.scss';
import ponudaImg1 from '@/../public/home/starvision-dioptrijske-1.png';
import ponudaImg2 from '@/../public/home/starvision-dioptrijske-2.png';

const OfferSection = () => {
  return (
    <section className={styles.offer}>
      <OfferItem title='Dioptrijske' image='/home/dioptrijske.png' />
      <OfferItem
        title='Sunčane'
        description='Our wellbeing is a journey, we believe in small, sustainable steps which form life-long habits. Our wellbeing is a journey, we believe in small.'
        image='/home/suncane.png'
      />
      <OfferItem
        title='Budite korak ispred trendova, pronađite savršene naočare od naših novih partnera'
        description={`Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways...`}
        image='/home/suncane.png'
      />
    </section>
  );
};

export default OfferSection;

type OfferItemProps = {
  title: string;
  description?: string;
  image: string;
};

const OfferItem = ({ title, description, image }: OfferItemProps) => {
  return (
    <article className={styles.offer__item}>
      <Image
        src={image}
        alt={`Star Optics ${title.toLowerCase()} naočare`}
        className={styles.offer__item__bg}
        fill
        sizes='(max-width: 1024px) 100vw, 33vw'
      />
      <h4 className={styles.offer__item__title}>{title}</h4>

      {/* TODO: drugi način? */}
      {description && (
        <p className={styles.offer__item__description}>{description}</p>
      )}

      <a
        href={`./ponude/${title.toLowerCase()}.pdf`}
        download='ponuda'
        className={styles.offer__item__link}
      >
        Pogledaj celu ponudu
      </a>
    </article>
  );
};

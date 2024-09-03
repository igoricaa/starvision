import Image from 'next/image';
import styles from './OfferSection.module.scss';
import ponudaImg1 from '@/../public/home/starvision-dioptrijske-1.png';
import ponudaImg2 from '@/../public/home/starvision-dioptrijske-2.png';

const OfferSection = () => {
  return (
    <section className={styles.offerSection}>
      <OfferItem
        title='Dioptrijske'
        description='Najbolji dioptrijski način'
        image='/home/starvision-dioptrijske-1.png'
      />
      <OfferItem
        title='Sunčane'
        description='Najbolji dioptrijski način'
        image='/home/starvision-dioptrijske-2.png'
      />
      <OfferItem
        title='Budite korak ispred trendova, pronađite savršene naočare od naših novih partnera'
        description={`Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways...`}
        image='/home/starvision-dioptrijske-2.png'
      />
    </section>
  );
};

export default OfferSection;

type OfferItemProps = {
  title: string;
  description: string;
  image: string;
};

const OfferItem = ({ title, description, image }: OfferItemProps) => {
  return (
    <article className={styles.offerItem}>
      <Image
        src={image}
        alt={`Star Optics ${title.toLowerCase()} naočare`}
        fill
      />
      <h2>{title}</h2>
      {/* TODO: drugi način? */}
      <p>{description}</p>
      <a
        href={`./ponude/${title.toLowerCase()}.pdf`}
        download='ponuda'
        className={styles.offerItemLink}
      >
        Pogledaj celu ponudu
      </a>
    </article>
  );
};

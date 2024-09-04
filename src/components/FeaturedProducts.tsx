import Image from 'next/image';
import styles from './FeaturedProducts.module.scss';
import { featuredProducts } from '@/data';
import Button from './ui/Button';

const FeaturedProducts = () => {
  return (
    <section className={styles.featuredProducts}>
      <article
        className={[
          styles.featuredProducts__item,
          styles.featuredProducts__item__main,
        ].join(' ')}
      >
        <Image
          src='/home/aktuelna-ponuda.png'
          alt='Star Vision aktuelna ponuda'
          className={styles.featuredProducts__item__bg}
          fill
          sizes='(max-width: 1024px) 100vw, 66vw'
        />
        <h2 className={styles.featuredProducts__item__main__title}>Aktuelni modeli</h2>
        <Button link='#kompletnaPonuda'>Kompletna ponuda</Button>
      </article>
      {featuredProducts.map((featuredProduct, index) => {
        return (
          <FeaturedProduct
            key={`featuredProduct-${index}`}
            {...featuredProduct}
          />
        );
      })}
    </section>
  );
};

export default FeaturedProducts;

type FeaturedProductProps = {
  title: string;
  category: string;
  image: string;
};

const FeaturedProduct = ({ title, category, image }: FeaturedProductProps) => {
  return (
    <article className={styles.featuredProducts__item}>
      <Image
        src={image}
        alt={`${title} naočare`}
        className={styles.featuredProducts__item__bg}
        fill
        sizes='(max-width: 1024px) 50vw, 33vw'
      />
      <h4 className={styles.featuredProducts__item__title}>{title}</h4>
      <h6 className={styles.featuredProducts__item__category}>{category}</h6>
    </article>
  );
};

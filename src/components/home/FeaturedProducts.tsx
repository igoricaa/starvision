import Image from 'next/image';
import styles from './FeaturedProducts.module.scss';
import { featuredProducts } from '@/data';

const FeaturedProducts = () => {
  return (
    <section className={styles.featuredProducts}>
      <div className={styles.mainFeaturedProducts}>
        <h3>Aktuelni Modeli</h3>
        <a href='#kompletnaPonuda' className={styles.button}>
          Kompletna ponuda
        </a>
      </div>
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
    <article className={styles.featuredProduct}>
      <h4>{title}</h4>
      <Image src={image} alt={title} fill />
      <h6>{category}</h6>
    </article>
  );
};

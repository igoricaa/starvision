import Image from 'next/image';
import styles from './FeaturedProducts.module.scss';
import { FeaturedProductProps, featuredProducts } from '@/data';
import Button from './ui/Button';
import { memo } from 'react';

const FeaturedProducts = () => (
  <section className={styles.featuredProducts}>
    <MainFeaturedProduct />
    {featuredProducts.map((featuredProduct, index) => (
      <FeaturedProduct key={`featuredProduct-${index}`} {...featuredProduct} />
    ))}
  </section>
);

export default memo(FeaturedProducts);

const MainFeaturedProduct = memo(() => (
  <article
    className={`${styles.featuredProducts__item} ${styles.featuredProducts__item__main}`}
  >
    <Image
      src='/home/aktuelna-ponuda.png'
      alt='Star Vision aktuelna ponuda'
      className={styles.featuredProducts__item__bg}
      fill
      sizes='(max-width: 1024px) 100vw, 66vw'
    />
    <Image
      src='/products/david_beckham_naocare.png'
      alt='Star Vision aktuelna ponuda'
      className={`${styles.featuredProducts__item__bg} ${styles.featuredProducts__item__bg__hover}`}
      fill
      sizes='(max-width: 1024px) 100vw, 66vw'
    />
    <h2 className={styles.featuredProducts__item__main__title}>
      Aktuelni modeli
    </h2>
    <Button link='#kompletnaPonuda'>Kompletna ponuda</Button>
  </article>
));

MainFeaturedProduct.displayName = 'MainFeaturedProduct';

const FeaturedProduct = memo(
  ({ title, category, image, hoverImage }: FeaturedProductProps) => (
    <article className={styles.featuredProducts__item}>
      <Image
        src={image}
        alt={`${title} naočare`}
        className={styles.featuredProducts__item__bg}
        fill
        sizes='(max-width: 1024px) 50vw, 33vw'
      />
      <Image
        src={hoverImage}
        alt={`${title} naočare`}
        className={`${styles.featuredProducts__item__bg} ${styles.featuredProducts__item__bg__hover}`}
        fill
        sizes='(max-width: 1024px) 50vw, 33vw'
      />
      <h4 className={styles.featuredProducts__item__title}>{title}</h4>
      <h6 className={styles.featuredProducts__item__category}>{category}</h6>
    </article>
  )
);

FeaturedProduct.displayName = 'FeaturedProduct';

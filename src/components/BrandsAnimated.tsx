import { brandsAnimated } from '@/data';
import styles from './BrandsAnimated.module.scss';
import BrandAnimated from './BrandAnimated';
import Logo from './ui/Logo';

const BrandsAnimated = () => {
  return (
    <section className={styles.brandsAnimated}>
      <div className={styles.brandsAnimated__header}>
        <Logo color='#000' />
        <p className={styles.brandsAnimated__header__title}>
          Kompletan spisak brendova
        </p>
      </div>
      {[
        ...brandsAnimated,
        ...brandsAnimated,
        ...brandsAnimated,
        ...brandsAnimated,
        ...brandsAnimated,
        ...brandsAnimated,
      ].map((brand, index) => (
        <BrandAnimated brand={brand} key={`brand-${index}`} />
      ))}
    </section>
  );
};

export default BrandsAnimated;

import styles from './Burger.module.scss';

const Burger = () => {
  return (
    <div className={styles.burger}>
      <div className={styles.burger__line} />
      <div className={styles.burger__line} />
      <span className={styles.burger__line} />
    </div>
  );
};

export default Burger;

import Brand from '../Brand';
import styles from './_brands.module.scss';

const Brands = () => {
  return (
    <section className={styles.brands}>
      <h2>Navegue por marcas</h2>
      <div className={styles.brandsContainer}>
        <Brand />
        <Brand />
        <Brand />
        <Brand />
        <Brand />
      </div>
    </section>
  );
};

export default Brands;

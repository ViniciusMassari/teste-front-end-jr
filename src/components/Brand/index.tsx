import styles from './_brand.module.scss';
import brand from '../../assets/brand.png';

const Brand = () => {
  return (
    <div className={styles.brandContainer}>
      <img src={brand} alt='' />
    </div>
  );
};

export default Brand;

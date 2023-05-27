import styles from './_productIcon.module.scss';

interface IProductIcon {
  svg: string;
  label: string;
  isSelected?: boolean;
}

const ProductIcon = ({ svg, label, isSelected }: IProductIcon) => {
  return (
    <button className={styles.productIconContainer}>
      <div
        className={isSelected ? styles.selectedProduct : styles.imageContainer}
      >
        {' '}
        <img src={svg} alt='' />
      </div>
      <p className={styles.labelText}>{label}</p>
    </button>
  );
};

export default ProductIcon;

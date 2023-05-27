import styles from './_productPicker.module.scss';

const ProductPicker = () => {
  return (
    <section className={styles.relatedProducts}>
      <ul className={styles.products}>
        <li>
          <button>celular</button>{' '}
        </li>
        <li>
          <button> acessórios</button>
        </li>
        <li>
          <button> tablets</button>
        </li>
        <li>
          <button> notebooks</button>
        </li>
        <li>
          <button>TVs</button>
        </li>
        <li>
          <button> Ver todos</button>
        </li>
      </ul>
    </section>
  );
};

export default ProductPicker;

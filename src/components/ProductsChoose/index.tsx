import ProductIcon from '../ProductIcon';
import styles from './_ProductsChoose.module.scss';

import monitor from '../../assets/monitor.svg';
import market from '../../assets/market.svg';
import drinks from '../../assets/drinks.svg';
import tools from '../../assets/tools.svg';
import health from '../../assets/health.svg';
import fitness from '../../assets/fitness.svg';
import fashion from '../../assets/fashion.svg';

const ProductsChoose = () => {
  return (
    <section className={styles.productsIcons}>
      <ProductIcon svg={monitor} label='Tecnologia' isSelected={true} />
      <ProductIcon svg={market} label='Supermercado' />
      <ProductIcon svg={drinks} label='Bebidas' />
      <ProductIcon svg={tools} label='Ferramentas' />
      <ProductIcon svg={health} label='Saúde' />
      <ProductIcon svg={fitness} label='Esportes e Fitness' />
      <ProductIcon svg={fashion} label='Moda' />
    </section>
  );
};

export default ProductsChoose;

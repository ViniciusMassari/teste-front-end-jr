import Arrow from '../../assets/Arrow';
import Card from '../Card';
import styles from './_showcase.module.scss';
import { useEffect, useState } from 'react';

const Showcase = () => {
  const [data, setData] = useState<ProductsData | null>(null);

  async function fetchData() {
    const resp = await fetch(
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
    );
    const respJson = await resp.json();
    setData(respJson);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className={styles.showcaseContainer}>
      {data &&
        data.products.map((product) => {
          return <Card info={product} key={product.productName} />;
        })}
    </section>
  );
};

export default Showcase;

import styles from './_copyright.module.scss';
import logos from '../../assets/logos.png';

const Copyright = () => {
  return (
    <div className={styles.copyContainer}>
      <p className={styles.copyText}>
        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
        imagens são de propriedade de seus respectivos donos. É vedada a
        reprodução, total ou parcial, de qualquer conteúdo sem expressa
        autorização.
      </p>
      <div className={styles.logos}>
        <img src={logos} alt='' />
      </div>
    </div>
  );
};

export default Copyright;

import styles from './_partnersContainer.module.scss';
import Partners from '../Partners';

const PartnersContainer = () => {
  return (
    <section className={styles.partners}>
      <Partners />
      <Partners />
    </section>
  );
};

export default PartnersContainer;

import Facebook from '../../assets/Facebook';
import Instagram from '../../assets/Instagram';
import Youtube from '../../assets/Youtube';
import Cards from '../Cards/';
import Copyright from '../Copyright';
import styles from './_footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.container}>
        <section className={styles.info}>
          <section className={styles.infoContainer}>
            <p>sobre nós</p>
            <div className={styles.links}>
              <p>conheça</p>
              <p>como comprar</p>
              <p>indicação e desconto</p>
            </div>
            <div className={styles.socialMedia}>
              <Facebook />
              <Instagram />
              <Youtube />
            </div>
          </section>
          <section className={styles.infoContainer}>
            <p>Informações úteis</p>
            <div className={styles.links}>
              <p>fale conosco</p>
              <p>dúvidas</p>
              <p>Prazos de Entrega</p>
              <p>Formas de Pagamento</p>
              <p>Política de privacidade</p>
              <p>Trocas e Devoluções</p>
            </div>
          </section>
          <section className={styles.infoContainer}>
            <p>Formas de pagamento</p>
            <div className={styles.cards}>
              <Cards />
            </div>
          </section>
        </section>
        <section className={styles.emailFormContainer}>
          <p className={styles.registerText}>
            Cadastre-se e receba nossas {''}
            <span>novidades e promoções</span>
          </p>
          <p>
            Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
            lorem ipsum
          </p>
          <form className={styles.emailForm}>
            <input placeholder='Seu email' type='email' />
            <button>Ok</button>
          </form>
        </section>
      </div>
      <hr />
      <Copyright />
    </footer>
  );
};

export default Footer;

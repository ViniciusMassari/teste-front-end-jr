import styles from './_header.module.scss';
import Shield from '../../assets/Shield.tsx';
import Truck from '../../assets/Truck.tsx';
import CreditCard from '../../assets/CreditCard.tsx';
import Logo from '../../assets/Logo.tsx';
import Search from '../Search/index.tsx';
import IconsArea from '../IconsArea/index.tsx';
import Crown from '../../assets/Crown.tsx';

const Header = () => {
  return (
    <header>
      <div className={styles.tools}>
        <ul>
          <li>
            <Shield />
            Compra <span>100% segura</span>
          </li>
          <li>
            <Truck />
            <span>Frete grátis </span> acima de R$ 200
          </li>
          <li>
            <CreditCard />
            <span>Parcele </span>suas compras
          </li>
        </ul>
      </div>
      <hr />
      <section className={styles.searchAndInfo}>
        <h1>
          <Logo />
        </h1>
        <Search />
        <IconsArea />
      </section>
      <hr />
      <section className={styles.categories}>
        <ul>
          <li>Todas Categorias</li>
          <li>Supermercado</li>
          <li>Livros</li>
          <li>Moda</li>
          <li>Lançamentos</li>
          <li>
            <span> Ofertas do dia</span>
          </li>
          <li>
            <Crown /> Assinatura
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;

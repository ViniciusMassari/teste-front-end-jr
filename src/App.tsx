import Brands from './components/Brands';
import Footer from './components/Footer';
import Header from './components/Header';
import Partners from './components/Partners';
import ProductPicker from './components/ProductPicker';
import ProductsChoose from './components/ProductsChoose';
import Showcase from './components/Showcase';

import './styles/styles.css';

function App() {
  return (
    <>
      <Header />
      <div className='promotion'>
        <h2>Venha conhecer nossas promoções</h2>
        <p>50% Off nos produtos</p>
        <button>Ver produto</button>
      </div>
      <main>
        <ProductsChoose />
        <div className='bars'>
          <div className='bar'></div>
          <p className='related-products'>Produtos relacionados</p>
          <div className='bar'></div>
        </div>
        <ProductPicker />
        <Showcase />
        <section id='partners'>
          <Partners />
          <Partners />
        </section>
        <div className='bars'>
          <div className='bar'></div>
          <div className='related-products-container'>
            <p className='related-products'>Produtos relacionados</p>
            <p className='seeAll'>ver todos</p>
          </div>
          <div className='bar'></div>
        </div>
        <ProductPicker />
        <Showcase />
        <section id='partners'>
          <Partners />
          <Partners />
        </section>
        <Brands />
        <div className='bars'>
          <div className='bar'></div>
          <div className='related-products-container'>
            <p className='related-products'>Produtos relacionados</p>
            <p className='seeAll'>ver todos</p>
          </div>
          <div className='bar'></div>
        </div>
        <ProductPicker />
        <Showcase />
      </main>

      <Footer />
    </>
  );
}

export default App;

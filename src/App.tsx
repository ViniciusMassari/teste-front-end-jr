import Brands from './components/Brands';
import Footer from './components/Footer';
import Header from './components/Header';
import Partners from './components/Partners';
import PartnersContainer from './components/PartnersContainers';
import ProductPicker from './components/ProductPicker';
import ProductsChoose from './components/ProductsChoose';
import Showcase from './components/Showcase';
import ShowCaseContainer from './components/ShowcaseContainer';

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
        <ShowCaseContainer productType={true} />
        <PartnersContainer />
        <ShowCaseContainer productType={false} label={'Ver todos'} />
        <PartnersContainer />
        <Brands />
        <ShowCaseContainer productType={false} label={'Ver todos'} />
      </main>

      <Footer />
    </>
  );
}

export default App;

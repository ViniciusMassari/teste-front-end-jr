import React from 'react';
import ProductPicker from '../ProductPicker';
import Partners from '../Partners';
import Showcase from '../Showcase';

interface ShowCaseContainerProps {
  productType: boolean;
  label?: string;
}

const ShowCaseContainer = ({ productType, label }: ShowCaseContainerProps) => {
  return (
    <>
      <div className='bars'>
        <div className='bar'></div>
        <p className='related-products'>Produtos relacionados</p>
        <div className='bar'></div>
      </div>
      {label && <p className='label'>{label}</p>}
      {productType && <ProductPicker />}

      <Showcase />
    </>
  );
};

export default ShowCaseContainer;

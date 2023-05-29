import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './_search.module.scss';
import MagnifyingGlass from '../../assets/MagnifyingGlass';

const Search = () => {
  const [product, setProduct] = useState<string>('');
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //lógica de pesquisa
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        placeholder='O que você está buscando?'
        type='text'
        name='product'
        value={product}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setProduct(e.target.value);
        }}
      />
      <button type='submit'>
        <MagnifyingGlass />
      </button>
    </form>
  );
};

export default Search;

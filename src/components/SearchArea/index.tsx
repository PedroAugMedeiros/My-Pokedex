import { useContext } from 'react';
import { PokedexContext } from '../../context/PokedexContext';
import './index.css';

export const SearchArea = () => {

  const { searchInput, setSearchInput } = useContext(PokedexContext);



  const handleChange = (valueInput: string) => {
    setSearchInput(valueInput.toLowerCase())
  }

  return (
    <div data-testid='search-area' className='input-div fixed'>
      <input
        className='search-input p-1 rounded-md  border-none focus:outline-none'
        value={searchInput} data-testid="search-input" placeholder='Pesquise Aqui!' onChange={({ target }) => handleChange(target.value)}></input>
    </div>
  );
}

export default SearchArea;

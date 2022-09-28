import { useContext } from 'react';
import { PokedexContext } from '../../context/PokedexContext';

export const SearchArea = () => {

  const { searchInput, setSearchInput } = useContext(PokedexContext);



  const handleChange = (valueInput: string) => {
    setSearchInput(valueInput.toLowerCase())
  }

  return (
    <div className='fixed'>
      <label className=''>
        <input
          className='p-1 rounded-md  border-none focus:outline-none'
          value={searchInput} data-testid="input" placeholder='Pesquise Aqui!' onChange={({ target }) => handleChange(target.value)}></input>
      </label>
    </div>
  );
}

export default SearchArea;

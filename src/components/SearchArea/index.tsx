import { useContext } from 'react';
import { PokedexContext } from '../../context/PokedexContext';

export const SearchArea = () => {

  const { searchInput, setSearchInput } = useContext(PokedexContext);



  const handleChange = (valueInput: string) => {
    setSearchInput(valueInput)
  }

  return (
    <label>
      <input
        value={searchInput} data-testid="input" placeholder='Pesquise Aqui!' onChange={({ target }) => handleChange(target.value)}></input>
    </label>
  );
}

export default SearchArea;

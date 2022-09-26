import React, { useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useApi } from "../../hooks/useApi";
import PokeCard from '../PokeCard/PokeCard'
import './index.css';
import { PokedexContext } from '../../context/PokedexContext';
import Pagination from '../../components/Pagination/index';

function Home() {
  const [startPokemon, setStartPokemon] = useState(0)
  const [limit, setLimit] = useState(20)

  const { pokemons } = useContext(PokedexContext);

  useEffect(() => {
    getPokemons()
    RenderPokeCards()
  }, [startPokemon, limit])

  console.log(pokemons)

  const RenderPokeCards = () => {
    return pokemons.map(pokemon => <PokeCard pokemon={pokemon} />)
  }


  const { isLoading, getPokemons } = useApi(api(startPokemon, limit))

  return (
    <div>
      <div>
        {isLoading ? <h1>Loading</h1> :
          RenderPokeCards()
        }
      </div>
      <div>
        <Pagination
          className='pagination'
          total={pokemons.length}
          startPokemon={startPokemon}
          limit={limit}
          setStartPokemon={setStartPokemon}
          setLimit={setLimit} /></div>
    </div>
  )
}

export default Home;

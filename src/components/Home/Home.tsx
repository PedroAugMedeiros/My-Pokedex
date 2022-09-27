import React, { useContext, useEffect, useState } from 'react';
import { pokeApi } from '../../services/api';
import { useApi } from "../../hooks/useApi";
import PokeCard from '../PokeCard/PokeCard'
import './index.css';
import { PokedexContext } from '../../context/PokedexContext';
import Pagination from '../../components/Pagination/index';
import { Navigate } from 'react-router-dom';

function Home() {
  const [startPokemon, setStartPokemon] = useState(0)
  const [limit, setLimit] = useState(20)

  const { pokemons, showDetails } = useContext(PokedexContext);

  useEffect(() => {
    getPokemons()
    RenderPokeCards()
  }, [startPokemon, limit])

  console.log(pokemons)

  const RenderPokeCards = () => {
    return pokemons.map(pokemon => <PokeCard pokemon={pokemon} />)
  }


  const { isLoading, getPokemons } = useApi(pokeApi(startPokemon, limit))

  if (showDetails) {
    return (
      <Navigate to="/Details"></Navigate>
    )
  }
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

import React from 'react';
import { api } from '../../services/api';
import { useApi } from "../../hooks/useApi";
import PokeCard from '../PokeCard/PokeCard'
import './index.css';

function Home() {

  const { pokemons, isLoading } = useApi(api)

  return (

    <div className='pokedex'>
      {isLoading ? <h1>Loading</h1> : pokemons?.map(pokemon => <PokeCard key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}

export default Home;

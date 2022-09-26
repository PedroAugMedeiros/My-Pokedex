import React, { useContext, useEffect } from 'react';
import { api } from '../../services/api';
import { useApi } from "../../hooks/useApi";
import PokeCard from '../PokeCard/PokeCard'
import './index.css';
import { PokedexContext } from '../../context/PokedexContext';

function Home() {
  const { isLoading } = useApi(api)
  const { pokemons } = useContext(PokedexContext);



  return (

    <div className='pokedex'>
      {isLoading ? <h1>Loading</h1> : pokemons?.map(pokemon => <PokeCard pokemon={pokemon} />)}
    </div>
  )
}

export default Home;

import React, { useContext, useEffect, useState } from 'react';
import { pokeApi } from '../../services/api';
import { useApi } from "../../hooks/useApi";
import PokeCard from '../PokeCard/PokeCard'
import './index.css';
import { PokedexContext } from '../../context/PokedexContext';
import Pagination from '../Pagination/index';
import { Navigate } from 'react-router-dom';
import Header from '../Header';
import Transition from '../Transition';

function Home() {
  const [startPokemon, setStartPokemon] = useState(0)
  const [limit, setLimit] = useState(20)
  const [showHeader, setShowHeader] = useState(false)
  const [showSearchArea, setShowSearchArea] = useState(false)

  const { getPokemons, isLoading, setIsLoading } = useApi(pokeApi)

  const { pokemons, showDetails, searchInput, setSearchInput
  } = useContext(PokedexContext);



  function RenderPokeCards() {

    if (searchInput !== '') {
      return pokemons.filter((item) => item.name.includes(searchInput)).map((pokemon, index) => {
        if (index >= startPokemon && index < startPokemon + limit) {
          return (<PokeCard key={pokemon.id} pokemon={pokemon} />)
        }
      }
      )
    }

    return pokemons.map((pokemon, index) => {
      if (index >= startPokemon && index < startPokemon + limit) {
        return (<PokeCard key={pokemon.id} data-testid='pokeCard' pokemon={pokemon} />)
      }
    }
    )
  }

  useEffect(() => {
    getPokemons()
    RenderPokeCards()
  }, [startPokemon, limit])


  if (showDetails) {
    return (
      <Navigate to="/Details"></Navigate>
    )
  }

  return (
    <div>
      <Header
        data-testid='header'
        setShowHeader={setShowHeader} showHeader={showHeader} setSearchInput={setSearchInput} setShowSearchArea={setShowSearchArea} showSearchArea={showSearchArea} />
      <div
        data-TestId='pokeCards' className="pokedex w-full flex flex-wrap justify-center pb-60">
        {isLoading ? <Transition setIsLoading={setIsLoading} /> :
          RenderPokeCards()
        }

      </div>
      <div>
        <Pagination
          className='pagination'
          startPokemon={startPokemon}
          setStartPokemon={setStartPokemon}
          setLimit={setLimit}
          limit={limit}
          setIsLoading={setIsLoading}
          data-testid='pagination'
        /></div>
    </div>
  )
}

export default Home;

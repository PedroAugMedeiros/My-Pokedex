import React, { useContext, useEffect, useState } from 'react';
import { pokeApi } from '../../services/api';
import { useApi } from "../../hooks/useApi";
import PokeCard from '../PokeCard/PokeCard'
import './index.css';
import { PokedexContext } from '../../context/PokedexContext';
import Pagination from '../../components/Pagination/index';
import { Navigate } from 'react-router-dom';
import SearchArea from '../SearchArea';
import SearchIcon from '../../icons/searchIcon.png';
import CloseMenuIcon from '../../icons/CloseMenuIcon.png';
import PokeTitle from '../../Images/Title.png'

function Home() {
  const [startPokemon, setStartPokemon] = useState(0)
  const [limit, setLimit] = useState(20)
  const [showSearchArea, setShowSearchArea] = useState(false)
  const { isLoading, getPokemons } = useApi(pokeApi)

  const { pokemons, showDetails, searchInput, setSearchInput
  } = useContext(PokedexContext);




  useEffect(() => {
    getPokemons()
    RenderPokeCards()
  }, [startPokemon, limit])

  const handleClick = (show: boolean) => {
    if (show === false) {
      setSearchInput('')
    }
    setShowSearchArea(show)
  }

  const RenderPokeCards = () => {

    if (searchInput !== '') {
      return pokemons.filter((item) => item.name.includes(searchInput)).map((pokemon, index) => {
        if (index >= startPokemon && index < startPokemon + limit) {
          return (<PokeCard pokemon={pokemon} />)
        }
      }
      )
    }

    return pokemons.map((pokemon, index) => {
      if (index >= startPokemon && index < startPokemon + limit) {
        return (<PokeCard pokemon={pokemon} />)
      }

      return null
    }
    )
  }

  const filtredPokemons = RenderPokeCards();

  if (showDetails) {
    return (
      <Navigate to="/Details"></Navigate>
    )
  }

  return (
    <div>
      <header className='flex justify-center items-center m-0'>
        <img className='w-2/3 m-3' src={PokeTitle}></img>
        {showSearchArea ?
          <><SearchArea /><button onClick={() => handleClick(false)}><img className='w-4/4 m-3' src={CloseMenuIcon}></img></button></> : <button onClick={() => handleClick(true)}><img className='w-1/3 ml-8' src={SearchIcon}></img></button>}
      </header>

      {filtredPokemons.length < 1 ? <h1>Não há Pokemons com esse nome</h1> : null}
      <div className="pokedex w-full flex flex-wrap justify-center mb-full">
        {isLoading ? <h1>Loading</h1> :
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
        /></div>
    </div>
  )
}

export default Home;

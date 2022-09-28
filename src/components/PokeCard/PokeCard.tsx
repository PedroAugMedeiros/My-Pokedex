import React, { useContext, useEffect, useState } from 'react';
import { useApi } from "../../hooks/useApi";
import { PokedexContext } from '../../context/PokedexContext';
import './index.css'

function PokeCard(props: any) {

  const { setShowDetails, setPokemonSelected } = useContext(PokedexContext);
  const { pokemon, getPokemons, mainType } = useApi(props.pokemon.url)

  const pokeStyles = `pokecard m-2 flex  flex-col w-40 text-2xl rounded-lg justify-start items-center h-25 ${mainType} rounded-`


  useEffect(() => {
    getPokemons()
  }, [props.pokemon.url, pokeStyles])


  console.log(mainType)

  const handleClick = () => {
    setShowDetails(true)
    setPokemonSelected({
      url: props.pokemon.url,
      id: props.pokemon.id
    })
  }


  return (
    <div id='pokeCard' className={pokeStyles} onClick={handleClick} >
      <img
        className='img flex justify-center items-start'
        src={pokemon?.sprites.other.home.front_default || pokemon?.sprites.front_default}
        alt={props.pokemon.name}
      />
      <h1 className='m-3'>{pokemon?.name}</h1>
    </div>
  )
}

export default PokeCard;

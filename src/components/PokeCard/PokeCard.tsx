import React, { useContext, useEffect } from 'react';
import { useApi } from "../../hooks/useApi";
import { PokedexContext } from '../../context/PokedexContext';
import './index.css'

interface PokeCardProps {
  pokemon: {
    url: string;
    id: string;
    name: string;
  }
}

function PokeCard(props: PokeCardProps) {

  const { setShowDetails, setPokemonSelected } = useContext(PokedexContext);
  const { pokemon, getPokemons, mainType } = useApi(props.pokemon.url)

  const pokeStyles = `pokecard w-40 m-2 flex  flex-col text-2xl rounded-lg justify-center items-center max-w-4xl ${mainType || 'white'} text-center`


  useEffect(() => {
    getPokemons()
  }, [props.pokemon.url, pokeStyles])

  const handleClick = () => {
    setShowDetails(true)
    setPokemonSelected({
      url: props.pokemon.url,
      id: props.pokemon.id
    })
  }

  return (
    <div data-testId='pokeCards' className={pokeStyles} onClick={handleClick} >
      <img
        className='img flex justify-center items-start'
        src={pokemon?.sprites.other.home.front_default || pokemon?.sprites.front_default}
        alt={props.pokemon.name}
      />
      <h1 className='h1 m-3'>{pokemon?.name}</h1>
    </div>
  )
}

export default PokeCard;

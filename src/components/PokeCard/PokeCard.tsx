import React, { useContext, useEffect } from 'react';
import { useApi } from "../../hooks/useApi";
import './index.css';
import { PokedexContext } from '../../context/PokedexContext';

function PokeCard(props: any) {

  const { setShowDetails, setPokemonSelected } = useContext(PokedexContext);
  const { pokemon, getPokemons } = useApi(props.pokemon.url)

  useEffect(() => {
    getPokemons()
  }, [props.pokemon.url])

  const handleClick = () => {
    setShowDetails(true)
    setPokemonSelected({
      url: props.pokemon.url,
      id: props.pokemon.id
    })
  }

  console.log(pokemon)
  return (
    <div className='pokecard' onClick={handleClick} >
      <div><img
        src={pokemon?.sprites.front_default}
        alt={props.pokemon.name}
      />
        <h1>{pokemon?.name}</h1> </div>
    </div>
  )
}

export default PokeCard;

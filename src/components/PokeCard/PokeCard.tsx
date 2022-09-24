import React from 'react';
import { useApi } from "../../hooks/useApi";
import './index.css';

function PokeCard(props: any) {


  console.log(props.pokemon.url)
  const { pokemon } = useApi(props.pokemon.url)

  return (
    <div className='pokecard' >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h1>{pokemon.name}</h1>
    </div>
  )
}

export default PokeCard;

import React, { useContext } from 'react';
import { useApi } from "../../hooks/useApi";
import './index.css';
import { PokedexContext } from '../../context/PokedexContext';

function PokeCard(props: any) {

  const { pokemon } = useApi(props.pokemon.url)


  return (
    <div className='pokecard' >
      <div><img
        src={pokemon.sprites.front_default}
        alt={props.pokemon.name}
      />
        <h1>{props.pokemon.name}</h1> </div>
    </div>
  )
}

export default PokeCard;

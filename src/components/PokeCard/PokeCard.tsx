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


  return (
    <div className='pokecard m-2 bg-red-600 w-1/3' onClick={handleClick} >
      <div><img
        className='img'
        src={pokemon?.sprites.other.home.front_default || pokemon?.sprites.front_default}
        alt={props.pokemon.name}
      />
        <h1>{pokemon?.name}</h1> </div>
    </div>
  )
}

export default PokeCard;

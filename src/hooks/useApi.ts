import Axios from 'axios';
import { useState, useEffect } from "react";
import { Pokemons } from '../interfaces/index';

export function useApi(url: string) {
  const [pokemons, setPokemons] = useState<Pokemons[]>([])
  const [pokemon, setPokemon] = useState({
    name: '',
    sprites: {
      front_default: '',
    }
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setIsLoading(true)
    Axios.get(url)
      .then(response => {
        setPokemons(response.data.results)
        console.log(url)
        setPokemon(response.data)
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return { pokemon, pokemons, error, isLoading, setIsLoading }
}

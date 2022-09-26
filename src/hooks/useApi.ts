import Axios from 'axios';
import { useState, useContext, useEffect } from "react";
import { PokedexContext } from '../context/PokedexContext';

export function useApi(url: string) {

  const { setPokemons } = useContext(PokedexContext)
  const [pokemon, setPokemon] = useState({
    name: '',
    sprites: {
      front_default: '',
    }
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {

    Axios.get(url)
      .then(response => {
        if (response.data.results !== undefined) {
          setPokemons(response.data.results)
        }
        setPokemon(response.data)
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return { pokemon, error, isLoading, setIsLoading }
}

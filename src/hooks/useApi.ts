import Axios from 'axios';
import { useState, useContext, useEffect } from "react";
import { PokedexContext } from '../context/PokedexContext';
import { Pokemon } from '../interfaces/index'

export function useApi(url: string) {

  const { setPokemons } = useContext(PokedexContext)
  const [pokemon, setPokemon] = useState<Pokemon>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [image, setImage] = useState()

  const getPokemons = () => {

    Axios.get(url)
      .then(response => {
        if (response.data.results !== undefined) {
          setPokemons(response.data.results)
          console.log(url)
        }
        setPokemon(response.data)
        setImage(response.data)
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getPokemons();
  }, [])

  return { image, pokemon, error, isLoading, setIsLoading, getPokemons }
}

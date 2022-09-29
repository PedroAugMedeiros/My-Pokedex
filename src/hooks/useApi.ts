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
  const [type, setType] = useState([''])

  const getPokemons = () => {
    Axios.get(url)
      .then(response => {
        if (response.data.results !== undefined) {
          setPokemons(response.data.results)

        }
        setPokemon(response.data)
        setImage(response.data)
        setType(response.data.types.map((el: any) => el.type.name))
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setInterval(() => {
          setIsLoading(false)
        }, 2000)
      })
  }

  const mainType = type.shift()

  useEffect(() => {
    getPokemons();
  }, [])

  console.log(isLoading)

  return { image, mainType, pokemon, error, isLoading, setIsLoading, getPokemons }
}

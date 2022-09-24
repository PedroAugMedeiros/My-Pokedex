import Axios from 'axios';
import { useState, useEffect } from "react";

export function useApi<T = unknown>(url: string) {
  const [pokemons, setPokemons] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    Axios.get(url)
      .then(response => {
        setPokemons(response.data.results)
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return { pokemons, error, isLoading }
}

import React from 'react'
import { useApi } from "../hooks/useApi"
import { api } from '../services/api'

function Testexd() {

  const { pokemons } = useApi(api)

  console.log(pokemons)
  return (
    <div>
      {pokemons?.map((pokemon) => <h1>{pokemon.name}</h1>)}
      <h1>Hi i am the test</h1>
    </div>
  )
}

export default Testexd

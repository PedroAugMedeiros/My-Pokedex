import React, { createContext, useState } from 'react';
import { PokedexContextType, PokedexContextProps } from '../types';
import { Pokemons, PokemonSelected } from '../interfaces/index';

const initialValue = {
  pokemons: [],
  showDetails: false,
  pokemonSelected: {
    id: '0',
    url: ''
  },
  searchInput: '',
  typeFilter: '',
  setPokemons: () => [],
  setShowDetails: (newState: boolean) => newState,
  setPokemonSelected: (newState: PokemonSelected) => newState,
  setSearchInput: (newState: string) => newState,
  setTypeFilter: (newState: string) => newState,
};

export const PokedexContext = createContext<PokedexContextType>(initialValue);

export const PokedexContextProvider = ({ children }: PokedexContextProps) => {
  const [pokemons, setPokemons] = useState<Pokemons[]>(initialValue.pokemons)
  const [showDetails, setShowDetails] = useState(initialValue.showDetails)
  const [pokemonSelected, setPokemonSelected] = useState<PokemonSelected>(initialValue.pokemonSelected)
  const [searchInput, setSearchInput] = useState(initialValue.searchInput)
  const [typeFilter, setTypeFilter] = useState(initialValue.typeFilter)

  const contextValue = {
    pokemons, setPokemons, typeFilter, setTypeFilter,
    searchInput, setSearchInput, pokemonSelected, showDetails, setShowDetails, setPokemonSelected
  }

  return (
    <PokedexContext.Provider value={contextValue}> {children}</PokedexContext.Provider>
  )
};

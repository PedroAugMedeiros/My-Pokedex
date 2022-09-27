import { ReactNode } from 'react';
import { Pokemons, PokemonSelected } from '../interfaces/index';

export type PokedexContextProps = {
  children: ReactNode;
}

export type PokedexContextType = {
  pokemons: Pokemons[],
  showDetails: boolean;
  pokemonSelected: PokemonSelected;
  searchInput: string;
  typeFilter: string;
  setPokemons: (newState: Pokemons[]) => void;
  setShowDetails: (newState: boolean) => void;
  setPokemonSelected: (newState: PokemonSelected) => void;
  setSearchInput: (newState: string) => void;
  setTypeFilter: (newState: string) => void;
}

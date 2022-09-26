import { ReactNode } from 'react';
import { Pokemons, Pokemon } from '../interfaces/index';

export type PokedexContextProps = {
  children: ReactNode;
}

export type PokedexContextType = {
  pokemons: Pokemons[],
  showDetails: boolean;
  pokemonSelected: number;
  searchInput: string;
  setPokemons: (newState: Pokemons[]) => void;
  setShowDetails: (newState: boolean) => void;
  setPokemonSelected: (newState: number) => void;
  setSearchInput: (newState: string) => void;
}

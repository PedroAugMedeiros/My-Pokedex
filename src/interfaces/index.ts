export interface Pokemons {
  name: string;
  url: string;
  id: string;
};

export interface Pokemon {
  name: string;
  sprites: {
    front_default: string
  };
  id: string;
};

export interface Pokemons {
  name: string;
  url: string;
  id: string;
};

export interface Pokemon {
  name: string;
  sprites: {
    front_default: string,
    other: {
      home: {
        front_default: string
      }
    }
  };
  id: number;
  height: number;
  weight: number;
  stats: [
    {
      base_stat: number,
    }
  ];
  types: [
    {
      type: {
        name: string;
      }
    }
  ];
};

export interface PokemonSelected {
  id: number;
  url: string;
};

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: {
    other?: {
      dream_world?: {
        front_default?: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}

export interface IPokemonDetailProps {
  pokemonId: string;
}

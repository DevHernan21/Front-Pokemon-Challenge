export interface IPokemonsInterface {
  id: number;
  name: string;
  imageUrl: string;
  types: Array<string>;
  abilities: Array<string>;
  weight: number;
}

export interface IPokemonIdInterface {
  pokeId: number;
  name: string;
  imageUrl: string;
  description: string;
  abilitiesRaw: Array<string>;
  statsRaw: {
    name: string;
    baseStat: number;
  };
  movesRaw: Array<string>;
}

export interface Precentage {
  percentage?: number;
}

export interface Props {
  data: IPokemonIdInterface;
}

export interface RouteParam {
  pokemonName: string;
}
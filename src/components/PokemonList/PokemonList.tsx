import React from "react";
import { PokemonListItem } from "./PokemonListItem";
import { LoadingState } from "../common/LoadingState/LoadingState";
import { ErrorState } from "../common/ErrorState/ErrorState";
import "./PokemonList.css";
import { useGetPokemonListQuery } from "../../services/pokemonApi";

interface PokemonListProps {
  selectPokemon: (id: string) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ selectPokemon }) => {
  const { data, error, isLoading } = useGetPokemonListQuery("");

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message="Error loading Pokémon list" />;

  return (
    <main className="pokemon-list" role="main">
      <h2>PokeReact</h2>
      <ul>
        {data?.results.map((pokemon: any) => (
          <PokemonListItem
            key={pokemon.name}
            pokemon={pokemon}
            onSelect={selectPokemon}
          />
        ))}
      </ul>
    </main>
  );
};

export default PokemonList;

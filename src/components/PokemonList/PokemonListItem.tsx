import React from "react";
import { POKEMON_SPRITE_URL } from "../../constants/pokemon.constants";
import { FUNCTION } from "../../utils";
import "./PokemonList.css";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListItemProps {
  pokemon: Pokemon;
  onSelect: (id: string) => void;
}

export const PokemonListItem: React.FC<PokemonListItemProps> = ({
  pokemon,
  onSelect,
}) => {
  const id = pokemon.url.split("/")[6];

  return (
    <li onClick={() => onSelect(id)}>
      <img
        className="pokemon-icon"
        src={`${POKEMON_SPRITE_URL}/${id}.gif`}
        alt={pokemon.name}
      />
      <p className="text-lg font-medium text-gray-600 truncate">
        {FUNCTION.capitalizeFirstLetter(pokemon.name)}
      </p>
    </li>
  );
};

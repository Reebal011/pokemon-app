import React from "react";
import { useGetPokemonByIdQuery } from "../../services/pokemonApi";
import "./PokemonDetail.css";
import Heading from "../common/Heading/Heading";
import { FUNCTION } from "../../utils";
import { LoadingState } from "../common/LoadingState/LoadingState";
import { ErrorState } from "../common/ErrorState/ErrorState";
import { IPokemonDetailProps, Pokemon } from "./PokemonDetailTypes";

const PokemonImage: React.FC<{ src?: string; alt: string }> = ({
  src,
  alt,
}) => (
  <div className="pokemon-image-wrapper">
    <img className="pokemon-image" src={src} alt={alt} />
  </div>
);

const DetailRow: React.FC<{ label: string; value: React.ReactNode }> = ({
  label,
  value,
}) => (
  <p>
    <strong>{label}</strong> {value}
  </p>
);

const PokemonDetail: React.FC<IPokemonDetailProps> = ({ pokemonId }) => {
  const { data, error, isLoading } = useGetPokemonByIdQuery(pokemonId);

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message="Error loading Pokémon details" />;

  const { name, height, weight, sprites, types } = (data as Pokemon) || {};

  const renderTypes = () => (
    <div>
      {types?.map(({ type }, index) => (
        <div key={`type-${type.name}-${index}`}>{type.name}</div>
      ))}
    </div>
  );

  return (
    <div className="pokemon-details">
      {name ? (
        <>
          <Heading heading={FUNCTION.capitalizeFirstLetter(name)} />
          <PokemonImage
            src={sprites?.other?.dream_world?.front_default}
            alt={name}
          />
          <div className="details">
            <DetailRow label="Name" value={name} />
            <DetailRow label="Height" value={`${height} cm`} />
            <DetailRow label="Weight" value={`${weight} kg`} />
            <DetailRow label="Types" value={renderTypes()} />
          </div>
        </>
      ) : (
        <Heading heading="Select a Pokémon" />
      )}
    </div>
  );
};

export default PokemonDetail;

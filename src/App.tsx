import React, { useState } from "react";
import "./App.css";
import { PokemonDetail, PokemonList } from "./components";

function App() {
  const [selectedPokemonId, setSelectedPokemonId] = useState<string>("");

  return (
    <div id="app" className="pokedex">
      <PokemonList selectPokemon={(id: string) => setSelectedPokemonId(id)} />
      <PokemonDetail pokemonId={selectedPokemonId} />
    </div>
  );
}

export default App;

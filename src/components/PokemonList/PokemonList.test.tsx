import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PokemonList from "./PokemonList";
import { useGetPokemonListQuery } from "../../services/pokemonApi";
import { LoadingState } from "../common/LoadingState/LoadingState";
import { ErrorState } from "../common/ErrorState/ErrorState";

// Mock the useGetPokemonListQuery hook
jest.mock("../../services/pokemonApi", () => ({
  useGetPokemonListQuery: jest.fn(),
}));

jest.mock("../common/LoadingState/LoadingState", () => ({
  LoadingState: () => <div>Loading...</div>,
}));

jest.mock("../common/ErrorState/ErrorState", () => ({
  ErrorState: ({ message }: { message: string }) => <div>{message}</div>,
}));

const mockSelectPokemon = jest.fn();

describe("PokemonList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state", () => {
    (useGetPokemonListQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });

    render(<PokemonList selectPokemon={mockSelectPokemon} />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("renders error state", () => {
    (useGetPokemonListQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: true,
      data: null,
    });

    render(<PokemonList selectPokemon={mockSelectPokemon} />);

    expect(screen.getByText(/Error loading Pokémon list/i)).toBeInTheDocument();
  });

  it("renders Pokémon list", async () => {
    const mockData = {
      results: [
        { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      ],
    };

    (useGetPokemonListQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockData,
    });

    render(<PokemonList selectPokemon={mockSelectPokemon} />);

    // Wait for the header to appear
    expect(await screen.findByText(/PokeReact/i)).toBeInTheDocument();

    // Wait for the Pokémon names to appear
    expect(await screen.findByText(/Pikachu/i)).toBeInTheDocument();
    expect(await screen.findByText(/Bulbasaur/i)).toBeInTheDocument();

    // Click on a Pokémon to select it
    const pikachuItem = screen.getByText(/Pikachu/i).closest("li");
    if (pikachuItem) {
      pikachuItem.click();
    }

    expect(mockSelectPokemon).toHaveBeenCalledWith("25");
  });
});

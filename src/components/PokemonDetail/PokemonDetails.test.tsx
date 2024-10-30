import React from "react";
import { render, screen } from "@testing-library/react";
import { useGetPokemonByIdQuery } from "../../services/pokemonApi";
import PokemonDetail from "./PokemonDetail";

// Mock the useGetPokemonByIdQuery hook
jest.mock("../../services/pokemonApi", () => ({
  useGetPokemonByIdQuery: jest.fn(),
}));

describe("PokemonDetail Component", () => {
  const mockPokemonData = {
    name: "pikachu",
    height: 4,
    weight: 60,
    sprites: {
      other: {
        dream_world: {
          front_default: "https://example.com/pikachu.png",
        },
      },
    },
    types: [{ type: { name: "electric" } }],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state", () => {
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    render(<PokemonDetail pokemonId="1" />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("renders error state", () => {
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      data: null,
      error: true,
      isLoading: false,
    });

    render(<PokemonDetail pokemonId="1" />);
    expect(
      screen.getByText(/error loading pokémon details/i)
    ).toBeInTheDocument();
  });

  test("renders pokemon details", () => {
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      data: mockPokemonData,
      error: null,
      isLoading: false,
    });

    render(<PokemonDetail pokemonId="1" />);
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    expect(screen.getByText(/height/i)).toHaveTextContent("Height 4");
    expect(screen.getByText(/weight/i)).toHaveTextContent("Weight 60");
    expect(screen.getByText(/types/i)).toHaveTextContent("Types electric");
    expect(screen.getByRole("img", { name: /pikachu/i })).toHaveAttribute(
      "src",
      "https://example.com/pikachu.png"
    );
  });

  test("renders no pokemon selected message", () => {
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: false,
    });

    render(<PokemonDetail pokemonId="1" />);
    expect(screen.getByText(/select a pokemon/i)).toBeInTheDocument();
  });
});

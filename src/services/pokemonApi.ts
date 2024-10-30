import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_API_URL }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: () => "pokemon",
    }),
    getPokemonById: builder.query({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonByIdQuery, useGetPokemonListQuery } = pokemonApi;

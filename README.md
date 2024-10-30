# Pokémon Explorer

A React application that allows users to explore and view detailed information about different Pokémon.

## Features

- View detailed information about individual Pokémon
- Display Pokémon images from the Dream World artwork collection
- Show Pokémon statistics including:
  - Name
  - Height
  - Weight
  - Types
- Loading and error state handling
- Responsive design

## Technologies Used

- React
- TypeScript
- RTK Query (for API calls)
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   git clone [your-repository-url]

2. Install dependencies
   npm install
   or
   yarn install

3. Start the development server
   npm start
   or
   yarn start

## Project Structure

├── components/
│ ├── PokemonDetail/
│ │ ├── PokemonDetail.tsx
│ │ ├── PokemonDetail.css
│ │ └── PokemonDetailTypes.ts
│ └── common/
│ ├── Heading/
│ ├── LoadingState/
│ └── ErrorState/
├── services/
│ └── pokemonApi.ts
└── utils/
└── index.ts

## API

This project uses the [PokéAPI](https://pokeapi.co/) to fetch Pokémon data.

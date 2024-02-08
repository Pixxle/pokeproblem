export const pokemons_types = [
  "normal",
  "fire",
  "water",
  "grass",
  "flying",
  "fighting",
  "poison",
  "electric",
  "ground",
  "rock",
  "psychic",
  "ice",
  "bug",
  "ghost",
  "steel",
  "dark",
  "dragon",
  "fairy",
] as const;

export type PokemonType = (typeof pokemons_types)[number];

export interface IPokemon {
  id: number;
  name: string;
  type: PokemonType[];
  sprite: string;
}

const pokemons: IPokemon[] = [
  {
    id: 1,
    name: "bulbasaur",
    sprite: "https://pokemon.com/pictures/bulbasaur.png",
    type: ["grass", "poison"],
  },
  {
    id: 2,
    name: "ivysaur",
    sprite: "https://pokemon.com/pictures/ivysaur.png",
    type: ["grass", "poison"],
  },
  {
    id: 3,
    name: "venusaur",
    sprite: "https://pokemon.com/pictures/venusaur.png",
    type: ["grass", "poison"],
  },
  {
    id: 4,
    name: "charmander",
    sprite: "https://pokemon.com/pictures/charmander.png",
    type: ["fire"],
  },
  {
    id: 5,
    name: "charmeleon",
    sprite: "https://pokemon.com/pictures/charmeleon.png",
    type: ["fire"],
  },
  {
    id: 6,
    name: "charizard",
    sprite: "https://pokemon.com/pictures/charizard.png",
    type: ["fire", "flying"],
  },
  {
    id: 7,
    name: "squirtle",
    sprite: "https://pokemon.com/pictures/squirtle.png",
    type: ["water"],
  },
  {
    id: 8,
    name: "wartortle",
    sprite: "https://pokemon.com/pictures/wartortle.png",
    type: ["water"],
  },
  {
    id: 9,
    name: "blastoise",
    sprite: "https://pokemon.com/pictures/blastoise.png",
    type: ["water"],
  },
  {
    id: 10,
    name: "caterpie",
    sprite: "https://pokemon.com/pictures/caterpie.png",
    type: ["bug"],
  },
  {
    id: 11,
    name: "metapod",
    sprite: "https://pokemon.com/pictures/metapod.png",
    type: ["bug"],
  },
  {
    id: 12,
    name: "butterfree",
    sprite: "https://pokemon.com/pictures/butterfree.png",
    type: ["bug", "flying"],
  },
  {
    id: 13,
    name: "weedle",
    sprite: "https://pokemon.com/pictures/weedle.png",
    type: ["bug", "poison"],
  },
  {
    id: 14,
    name: "kakuna",
    sprite: "https://pokemon.com/pictures/kakuna.png",
    type: ["bug", "poison"],
  },
  {
    id: 15,
    name: "beedrill",
    sprite: "https://pokemon.com/pictures/beedrill.png",
    type: ["bug", "poison"],
  },
  {
    id: 16,
    name: "pidgey",
    sprite: "https://pokemon.com/pictures/pidgey.png",
    type: ["normal", "flying"],
  },
  {
    id: 17,
    name: "pidgeotto",
    sprite: "https://pokemon.com/pictures/pidgeotto.png",
    type: ["normal", "flying"],
  },
  {
    id: 18,
    name: "pidgeot",
    sprite: "https://pokemon.com/pictures/pidgeot.png",
    type: ["normal", "flying"],
  },
  {
    id: 19,
    name: "rattata",
    sprite: "https://pokemon.com/pictures/rattata.png",
    type: ["normal"],
  },
  {
    id: 20,
    name: "raticate",
    sprite: "https://pokemon.com/pictures/raticate.png",
    type: ["normal"],
  },
];

export const list_pokemons = () => {
  return pokemons;
};

export const get_pokemon = (id: number) => {
  const pokemon = pokemons.find((pokemon) => pokemon.id == id);
  return pokemon;
};

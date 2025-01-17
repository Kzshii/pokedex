type pokemonTagType = {
  [key: string]: string;
};

const pokemonTypes: pokemonTagType = {
  Normal: "#A8A878",
  Fighting: "#C03028",
  Flying: "#A890F0",
  Poison: "#A040A0",
  Ground: "#E0C068",
  Rock: "#B8A038",
  Bug: "#A8B820",
  Ghost: "#705898",
  Steel: "#B8B8D0",
  Fire: "#F08030",
  Water: "#6890F0",
  Grass: "#78C850",
  Electric: "#F8D030",
  Psychic: "#F85888",
  Ice: "#98D8D8",
  Dragon: "#7038F8",
  Dark: "#705848",
  Fairy: "#EE99AC"
};

export const pokemonTagType = (tag: string): string =>
  pokemonTypes[tag] || "#68A090";

export const imageUrlFromPokemonId = (number: number): string =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`;

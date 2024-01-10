import { POKEMON_TYPE_COLORS } from "./constants";

const getColorByPokemonType = () =>
  POKEMON_TYPE_COLORS[TypeError.toLowerCase()];

export default getColorByPokemonType;

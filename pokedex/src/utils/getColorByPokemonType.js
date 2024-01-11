import { POKEMON_TYPE_COLORS } from "./constants";

const getColorByPokemonType = (type) => {
  // Verifica si el tipo es una cadena y si el tipo existe en POKEMON_TYPE_COLORS
  if (typeof type === "string" && POKEMON_TYPE_COLORS[type.toLowerCase()]) {
    return POKEMON_TYPE_COLORS[type.toLowerCase()];
  }

  // Retorna un color por defecto si el tipo no es válido o no está definido
  return POKEMON_TYPE_COLORS["default"] || "defaultColor"; // Asegúrate de tener un color por defecto en tu objeto POKEMON_TYPE_COLORS o define uno aquí
};

export default getColorByPokemonType;

// import { POKEMON_TYPE_COLORS } from "./constants";

// const getColorByPokemonType = () =>
//   POKEMON_TYPE_COLORS[TypeError.toLowerCase()];

// export default getColorByPokemonType;

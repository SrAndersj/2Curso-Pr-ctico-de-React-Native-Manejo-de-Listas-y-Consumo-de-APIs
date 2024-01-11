import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});

// limitar pokemons cargados
// import React, { useState } from "react";
// import { StyleSheet, FlatList } from "react-native";
// import PokemonCard from "./PokemonCard";

// export default function PokemonList(props) {
//   const { pokemons } = props;
//   const maxToShow = 20; // Define el número máximo de Pokémon a mostrar

//   // Limita los Pokémon a mostrar
//   const limitedPokemons = pokemons.slice(0, maxToShow);

//   return (
//     <FlatList
//       data={limitedPokemons}
//       numColumns={2}
//       showsVerticalScrollIndicator={false}
//       keyExtractor={(pokemon) => String(pokemon.id)}
//       renderItem={({ item }) => <PokemonCard pokemon={item} />}
//       contentContainerStyle={styles.flatListContentContainer}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   flatListContentContainer: {
//     paddingHorizontal: 5,
//   },
// });

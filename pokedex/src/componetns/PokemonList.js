import React from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
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

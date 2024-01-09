import React, { useState, useEffect } from "react";
import { Text, SafeAreaView } from "react-native";
import { getPokemonsApi } from "../api/pokemon";

export default function Account() {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
      console.log("HOla esto nos devuelve los pokemon ");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text> Pokedex9 </Text>
    </SafeAreaView>
  );
}

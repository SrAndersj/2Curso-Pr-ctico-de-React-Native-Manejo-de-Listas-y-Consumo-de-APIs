import Icon from "react-native-vector-icons/FontAwesome5";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon";

import Header from "../componetns/Pokemon/Header";
import Type from "../componetns/Pokemon/Type";
import Stats from "../componetns/Pokemon/Stats";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,

      headerLeft: () => (
        <Icon
          name={"arrow-left"}
          color={"#fff"}
          size={20}
          style={{ marginLeft: 20 }}
          // onPress={() => console.log("Ir atras ")}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]); // cada vez que cambie de navigations o params se vuelve a ejecutar

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        type={pokemon.types}
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
      />

      <Type types={pokemon.types} />

      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}

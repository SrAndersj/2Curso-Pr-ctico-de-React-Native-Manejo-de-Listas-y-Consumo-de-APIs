import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";

export default function Pokemon(props) {
  const { navitagion, route } = props;

  console.log(route);
  return (
    <SafeAreaView>
      <Text> estamos en un pokemon </Text>
    </SafeAreaView>
  );
}

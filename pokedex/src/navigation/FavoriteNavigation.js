import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FavoriteScreen from "../screens/Favorite";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteList"
        component={FavoriteScreen}
        options={{ title: " " }}
      />
    </Stack.Navigator>
  );
}

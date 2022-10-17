import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsPokemon from "../screens/DetailsPokemon";
import SearchPokemon from "../screens/SearchPokemon";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTransparent: true, headerTitle: "" }}
      initialRouteName="SearchPokemon"
    >
      <Stack.Screen name="SearchPokemon" component={SearchPokemon} />
      <Stack.Screen name="DetailsPokemon" component={DetailsPokemon} />
    </Stack.Navigator>
  );
}

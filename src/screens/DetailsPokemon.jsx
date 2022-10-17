import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import usePokemon from "../hooks/usePokemon";

export default function DetailsPokemon({ route }) {
  const { pokemon: pokemonDetails } = route.params;
  const { id, name, picture } = pokemonDetails;

  const { pokemon } = usePokemon(id);

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.namePokemon} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.namePokemon}>#{id}</Text>
      </View>
      <Image
        source={{ uri: picture }}
        style={[StyleSheet.absoluteFillObject, { resizeMode: "contain" }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.65,
    backgroundColor: "#1B2430",
  },
  containerText: {
    alignItems: "flex-end",
    paddingHorizontal: 30,
    zIndex: 1,
  },
  namePokemon: {
    fontSize: 26,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#EDE4E0",
    left: 16,
    letterSpacing: 0.8,
    lineHeight: 26,
    marginBottom: 5,
  },
});

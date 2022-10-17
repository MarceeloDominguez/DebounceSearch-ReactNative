import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function PokemonCard({ pokemon, navigation }) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={() => navigation.navigate("DetailsPokemon", { pokemon })}
    >
      <View style={styles.cardPokemon}>
        <Text style={styles.namePokemon} numberOfLines={1}>
          {pokemon.name}
        </Text>
        <Text style={styles.namePokemon}>#{pokemon.id}</Text>
        <Image source={{ uri: pokemon.picture }} style={styles.imagePokemon} />
        <Image
          source={require("../assets/pokebola-blanca.png")}
          style={styles.pokebola}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  cardPokemon: {
    backgroundColor: "#251B37",
    height: 150,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    width: windowWidth * 0.4,
  },
  namePokemon: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#EDE4E0",
    textTransform: "capitalize",
  },
  imagePokemon: {
    width: 90,
    height: 90,
    resizeMode: "cover",
    zIndex: 1,
  },
  pokebola: {
    position: "absolute",
    width: 90,
    height: 90,
    opacity: 0.1,
    bottom: -15,
    right: -15,
  },
});

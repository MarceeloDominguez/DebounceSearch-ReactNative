import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import usePokemon from "../hooks/usePokemon";
import Ionicons from "@expo/vector-icons/Ionicons";

const SIZE_CIRCLE = 75;
const DURATION = 400;

export default function DetailsPokemon({ route, navigation }) {
  const { pokemon: pokemonDetails } = route.params;
  const { id, name, picture } = pokemonDetails;

  const { pokemon } = usePokemon(id);

  const sprites = [
    { sprite: pokemon.sprites?.back_default },
    { sprite: pokemon.sprites?.front_shiny },
    { sprite: pokemon.sprites?.back_shiny },
    { sprite: pokemon.sprites?.front_default },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.arrowBack}
        activeOpacity={0.4}
      >
        <Ionicons name="arrow-back" size={32} color="#EDE4E0" />
      </TouchableOpacity>

      <Image
        source={require("../assets/pokebola-blanca.png")}
        style={styles.pokebola}
      />
      <View style={styles.containerText}>
        <Text style={styles.namePokemon} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.namePokemon}>#{id}</Text>
      </View>
      <View style={styles.containerImage}>
        <Image source={{ uri: picture }} style={styles.imagePokemon} />
        <Text style={styles.weight}>{pokemon.weight} Kg</Text>
      </View>
      <View style={styles.spritesPokemon}>
        {sprites.map((item, index) => {
          return (
            <Animatable.View
              key={index}
              animation="bounceIn"
              delay={DURATION + index * 100}
            >
              <Image
                source={{ uri: item.sprite }}
                style={styles.spritesPokemonImage}
              />
            </Animatable.View>
          );
        })}
      </View>
      <View style={styles.containerAbility}>
        <Text style={styles.titleAbility}>Ability</Text>
        {pokemon.abilities?.map(({ ability, index }) => {
          return (
            <Animatable.View
              style={{ marginVertical: 6 }}
              animation="fadeInUp"
              delay={DURATION * 2 + index * 200}
              key={ability.name}
            >
              <Text style={styles.ability}>{ability.name}</Text>
            </Animatable.View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  arrowBack: {
    position: "absolute",
    left: 20,
    top: 20,
    zIndex: 2,
  },
  pokebola: {
    width: 400,
    height: 400,
    position: "absolute",
    opacity: 0.2,
    right: -140,
    top: -70,
    transform: [{ rotate: "100 deg" }],
  },
  containerText: {
    alignItems: "flex-end",
    paddingRight: 42,
    zIndex: 1,
    top: 20,
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
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  imagePokemon: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
  weight: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#EDE4E0",
    textAlign: "right",
    paddingRight: 30,
    position: "absolute",
    bottom: -20,
    right: 0,
  },
  spritesPokemon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    marginTop: 14,
  },
  spritesPokemonImage: {
    width: SIZE_CIRCLE,
    height: SIZE_CIRCLE,
    resizeMode: "contain",
    backgroundColor: "#151515",
    borderRadius: SIZE_CIRCLE / 2,
  },
  titleAbility: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#EDE4E0",
    letterSpacing: 0.6,
    marginBottom: 10,
  },
  ability: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "capitalize",
    color: "#EDE4E0",
    opacity: 0.5,
  },
  containerAbility: {
    paddingHorizontal: 22,
    marginBottom: 30,
  },
});

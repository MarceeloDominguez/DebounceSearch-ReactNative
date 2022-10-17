import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";
import PokemonCard from "../components/PokemonCard";
import { useDebounceValue } from "../hooks/useDebounceValue";
import usePokemonSearch from "../hooks/usePokemonSearch";

export default function SearchPokemon({ navigation }) {
  const [valueInput, setValueInput] = useState("");
  const [pokemonFiltered, setpokemonFiltered] = useState([]);

  const { simpleListPokemons } = usePokemonSearch();
  const debouncedValue = useDebounceValue(valueInput, 500);

  useEffect(() => {
    if (debouncedValue.length === 0) return setpokemonFiltered([]);

    //buscar por name. si no es un numero
    if (isNaN(Number(debouncedValue))) {
      setpokemonFiltered(
        simpleListPokemons.filter((poke) =>
          poke.name
            .toLocaleLowerCase()
            .includes(debouncedValue.toLocaleLowerCase())
        )
      );
    } else {
      //buscar por id
      const pokemonId = simpleListPokemons.find(
        (poke) => poke.id === debouncedValue
      );
      setpokemonFiltered(pokemonId ? [pokemonId] : []);
    }
  }, [debouncedValue]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1B2430" barStyle="light-content" />
      <Text style={styles.title}>Search Pokemon</Text>
      <TextInput
        placeholder="Search pokemon..."
        placeholderTextColor="#cccccc"
        style={styles.textInput}
        value={valueInput}
        onChangeText={setValueInput}
      />
      <FlatList
        data={pokemonFiltered}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PokemonCard pokemon={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#1B2430",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1,
    color: "#EDE4E0",
    marginTop: 30,
  },
  textInput: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#51557E",
    marginTop: 12,
    padding: 10,
    color: "#EDE4E0",
    marginBottom: 20,
  },
});

import { useEffect, useState } from "react";

export default function usePokemonSearch() {
  const [simpleListPokemons, setSimpleListPokemons] = useState([]);

  const loadPokemons = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1200"
      );
      const data = await response.json();

      mapPokemonsList(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const mapPokemonsList = (pokemonList) => {
    const newPokemonList = pokemonList.map(({ name, url }) => {
      //divido la url
      const urlParts = url.split("/");
      //obtengo el id
      const id = urlParts[urlParts.length - 2];
      //obtengo la imagen
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return { id, picture, name };
    });

    setSimpleListPokemons(newPokemonList);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return { simpleListPokemons };
}

import { useEffect, useState } from "react";

export default function (id) {
  const [pokemon, setPokemon] = useState({});

  const loadPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return { pokemon };
}

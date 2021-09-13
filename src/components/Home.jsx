import React from "react";
import { useState, useEffect } from "react";

export default function Home(props) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  //   pokemon && console.log("pokemon", pokemon.types[0]);

  return (
    <>
      <h1>Poke-Context</h1>
      {pokemon && (
        <div>
          <p>Name : {pokemon.name}</p>
          <p>height : {pokemon.height}</p>
          <p>weight : {pokemon.weight}</p>
          <p>types : {pokemon.types.map((elem) => `${elem.type.name} `)}</p>
        </div>
      )}
    </>
  );
}

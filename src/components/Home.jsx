import React from "react";
import { useState, useEffect } from "react";

export default function Home(props) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  const handleRandomClick = () => {
    const id = Math.floor(Math.random() * 151 + 1);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  };

  return (
    <>
      <h1 className="text-center mt-2">Home</h1>
      {pokemon && (
        <div className="m-4">
          <h2 className="mb-3">Pokemon-Info</h2>
          <p>Name : {pokemon.name}</p>
          <p>height : {pokemon.height}</p>
          <p>weight : {pokemon.weight}</p>
          <p>types : {pokemon.types.map((elem) => `${elem.type.name} `)}</p>
          <button className="btn btn-primary" onClick={handleRandomClick}>
            Get random Pokemon info
          </button>
        </div>
      )}
    </>
  );
}

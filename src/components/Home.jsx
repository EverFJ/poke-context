import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

export default function Home(props) {
  const [pokemon, setPokemon] = useState(null);

  const { isLogged, setAuth } = useContext(UserContext);

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
      {pokemon && isLogged && (
        <div className="container">
          <div className="row justify-content-center mt-4">
            <div className="border col-md-6">
              <h2 className="mb-3">Pokemon-Info</h2>
              <p>Name : {pokemon.name}</p>
              <p>height : {pokemon.height}</p>
              <p>weight : {pokemon.weight}</p>
              <p>types : {pokemon.types.map((elem) => `${elem.type.name} `)}</p>
              <button className="btn btn-primary" onClick={handleRandomClick}>
                Get random Pokemon info
              </button>
            </div>
          </div>
        </div>
      )}
      {!isLogged && (
        <div className="container">
          <div className="row justify-content-center mt-4">
            <div className="border col-md-6">
              <p>Please Login first to use the App</p>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

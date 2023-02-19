import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getPokemonById } from "../data/pokeAPI/index.mjs";
import Card from "./Card";

const DisplaySearch = ({ commonIds }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newPokemon = await Promise.all(
        commonIds.map(async (id) => {
          const pokemon = await getPokemonById(id);
          return pokemon;
        })
      );
      setPokemon(newPokemon);
      console.log("setPokemon", newPokemon);
    };
    console.log("commonIds", commonIds);
    commonIds.length > 0 && fetchData().catch(console.error);
  }, [commonIds]);


  return (
    <div>
      <h2>Search Results</h2>
      <Grid container spacing={2}>
        {/* limiting search to 20 for now, will add pagination or infinite scroll to display all search result */}
        {pokemon.slice(0, 20).map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
            <Card pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DisplaySearch;

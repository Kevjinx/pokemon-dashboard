import { Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Grid } from "@mui/material";
import { getPokemonById, parsePokeData } from "../../data/pokeAPI";
import StatsBarChart from "../../components/StatsBarChart";
import StatsRadarChart from "../../components/StatsRadarChart";
import Types from "../../components/Types";
import Weaknesses from "../../components/Weaknesses";

const Dashboard = () => {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonId } = useParams();
  const [pokemonLoaded, setPokemonLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemonById(pokemonId);
        const parsedData = await parsePokeData(response);
        setPokemon(parsedData);
        setPokemonLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData().then(() => console.log("pokemonLoaded: ", pokemon));
  }, []);

  return (
    <Box m={4}>
      {pokemonLoaded ? (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              src={pokemon.sprites}
              alt={pokemon.name}
              style={{ maxWidth: "100%" }}
            />
          </Grid>


          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <h1>{pokemon.name}</h1>
              <p>Height: {pokemon.height / 10} m</p>
              <p>Weight: {pokemon.weight / 10} kg</p>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <Box>
              <h2>Abilities</h2>
              <ul>
                {pokemon.abilities.map((ability) => (
                  <li key={ability}>{ability}</li>
                ))}
              </ul>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <StatsBarChart data={pokemon.stats} />
          </Grid>

          <Grid item xs={12} md={6}>
            <StatsRadarChart data={pokemon.stats} />
          </Grid>

          <Grid>
            <Types types={pokemon.types} />
            <Weaknesses weaknesses={pokemon.weaknesses} />
          </Grid>
        </Grid>
      ) : (
        <div>Loading...</div>
      )}
    </Box>
  );
};

export default Dashboard;

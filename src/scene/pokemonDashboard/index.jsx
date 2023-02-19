import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getPokemonById, parsePokeData } from "../../data/pokeAPI";

const Dashboard = () => {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemonById(pokemonId);
        const parsedData = await parsePokeData(response);
        setPokemon(parsedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box m="20px">
      <Box height="75vh">
				<h1>{pokemon?.name}</h1>
      </Box>
    </Box>
  );
};

export default Dashboard;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { parsePokeData } from "../data/pokeAPI";

const Card = (prop) => {
  const { pokemon } = prop;
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const parsedData = await parsePokeData(pokemon);
      console.log(parsedData)
      setPokemonData(parsedData);
    };
    fetchData();
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 300,
        backgroundColor: "primary.white",
      }}
    >
      <div>
        <Link to={`/pokemon/${pokemonData.nationalId}`}>
          <img src={pokemonData.sprites} alt={pokemonData.name} width={"70%"} />
        </Link>
      </div>
      <div className="poke-info">
        <h2>{pokemonData.name}</h2>
        <div>
          <strong>Type:</strong>{" "}
          {pokemonData.types.map((type, index) => (
            <span key={index}>{type.name} </span>
          ))}
        </div>
        <div>
          <strong>Weaknesses:</strong>{" "}
          {pokemonData.weaknesses.map((weakness, index) => (
            <span key={index}>{weakness} </span>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Card;

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import {parsePokeData} from '../data/pokeAPI';

const Card = (prop) => {
  const { pokemon } = prop;
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const parsedData = await parsePokeData(pokemon);
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 300,
        height: 300,
        backgroundColor: 'primary.white',
      }}
    >
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <div>
        <strong>Type:</strong>{' '}
        {pokemonData.types.map((type) => (
          <span key={type.type.name}>{type.type.name} </span>
        ))}
      </div>
      <div>
        <strong>Weaknesses:</strong>{' '}
        {pokemonData.weaknesses.map((weakness) => (
          <span key={weakness}>{weakness} </span>
        ))}
      </div>
    </Box>
  );
}

export default Card;

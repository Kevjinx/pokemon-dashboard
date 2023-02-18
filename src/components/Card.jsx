import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import pikachuData from '../data/pokeAPI/pikachuPokeAPI.json';

const parsePokeData = async (data) => {
  const name = data.name;
  const sprites = data.sprites;
  const stats = data.stats;
  const types = data.types;
  const weight = data.weight;
  const height = data.height;
  const baseStats = data.stats.map((stat) => {
    return {
      name: stat.stat.name,
      value: stat.base_stat,
    };
  });

  // Make another request to get the Pokemon's species data
  const speciesResponse = await fetch(data.species.url);
  const speciesData = await speciesResponse.json();
  // Extract the relevant information from the species data object
  const nationalId = speciesData.id;
  const evolutionUrl = speciesData.evolution_chain.url;

	const getWeaknesses = async () => {
		const weaknessResponse = await fetch(data.types[0].type.url);
		const weaknessData = await weaknessResponse.json();
		const weaknesses = weaknessData.damage_relations.double_damage_from.map((type) => {
			return type.name;
		})
		return weaknesses
	}

	const getEvolutionChain = async () => {
		const evolutionResponse = await fetch(evolutionUrl);
		const evolutionData = await evolutionResponse.json();
		console.log(evolutionData)
		const evolutionChain = evolutionData.chain.evolves_to.map((evolution) => {
			return evolution.species.name
		})
		console.log(evolutionChain)
		return evolutionChain
	}



	const weaknesses = await getWeaknesses();
	// const evolutionChain = await getEvolutionChain(evolutionUrl);

  return {
    name,
    sprites,
    stats,
    types,
    weight,
    height,
    baseStats,
    weaknesses,
    nationalId,
    evolutionUrl,
  };
}

export default function BoxSx() {
  const [pokemonData, setPokemonData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const parsedData = await parsePokeData(pikachuData);
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

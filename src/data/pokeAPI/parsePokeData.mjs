export const parsePokeData = async (data) => {
  if (!data) return null;
  const name = data.name;
  const sprites = data.sprites.other['official-artwork'].front_default;
  const stats = data.stats;
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
  const abilities = data.abilities.map((ability) => ability.ability.name);
  const types = data.types.map((type) => type.type.name);

	const getWeaknesses = async () => {
		const weaknessResponse = await fetch(data.types[0].type.url);
		const weaknessData = await weaknessResponse.json();
		const weaknesses = weaknessData.damage_relations.double_damage_from.map((type) => {
			return type.name;
		})
		return weaknesses
	}
	const weaknesses = await getWeaknesses();



	const getEvolutionChain = async () => {
		const evolutionResponse = await fetch(evolutionUrl);
		const evolutionData = await evolutionResponse.json();
		const evolutionChain = evolutionData.chain.evolves_to.map((evolution) => {
			return evolution.species.name
		})
		return evolutionChain
	}


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
    abilities
  };
}

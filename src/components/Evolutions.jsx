import pokemonEvolution from '../data/pokemonEvolution.json';

//recursively get all evolutions

const parseEvolutionChain = (evolutionChainData) => {
	const evolutionChain = evolutionChainData.chain.evolves_to.map((evolution) => {
		return evolution.species.name
	})
	return evolutionChain
}

const getEvolutions = async (evolutionUrl, evolutions = []) => {
  const response = await fetch(evolutionUrl);
  const data = await response.json();

  evolutions.push(data.name);

  const evolvesTo = data.chain.evolves_to;
	console.log(evolvesTo)

  if (evolvesTo.length > 0) {
    for (let i = 0; i < evolvesTo.length; i++) {
      const evolutionUrl = evolvesTo[i].speciesUrl;

      await getEvolutions(evolutionUrl, evolutions);
    }
  }
  return evolutions;
}
getEvolutions('https://pokeapi.co/api/v2/evolution-chain/10')



const Evolutions = () => {
	return (
		<div>
			<h1>Evolutions</h1>
		</div>
	);
}

export default Evolutions;
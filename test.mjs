import fs from 'fs';
import fetch from 'node-fetch';


(async function() {
  // Make a request to the PokeAPI to get the Pokemon's data
  const response = await fetch('https://pokeapi.co/api/v2/evolution-chain/10/');
  const data = await response.json();
	fs.writeFile('pokemonEvolution.json', JSON.stringify(data), (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	})
})();

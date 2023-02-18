import fs from "fs";
import fetch from "node-fetch";
// (async function() {
//   // Make a request to the PokeAPI to get the Pokemon's data
//   const response = await fetch('https://pokeapi.co/api/v2/evolution-chain/10/');
//   const data = await response.json();
// 	fs.writeFile('pokemonEvolution.json', JSON.stringify(data), (err) => {
// 		if (err) throw err;
// 		console.log('The file has been saved!');
// 	})
// })();

const getIdsByGeneration = async (generation) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/generation/${generation}`
  );
  const data = await response.json();

  const ids = data.pokemon_species.map((pokemon) => {
    const getPokemonSpeciesIdFromUrl = (url) => {
      const urlParts = url.split("/");
      return urlParts[urlParts.length - 2];
    };
    return getPokemonSpeciesIdFromUrl(pokemon.url);
  });
  return ids;
};

const test = async () => {
  const a = await getAllAbilities();
  console.log(a);
};

const getAllAbilities = async () => {
  let abilities = [];
  let url = "https://pokeapi.co/api/v2/ability";

  //for pagination
  while (url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.results.map((data) => {
      abilities.push(data.name);
    });
    url = data.next;
  }
  fs.writeFile("abilitiesList.json", JSON.stringify(abilities), (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  return abilities;
};

const getAllTypes = async () => {
  let types = [];
  let url = "https://pokeapi.co/api/v2/type";

  //for pagination
  while (url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.results.map((data) => {
      console.log(data)
      types.push(data.name);
    });
    url = data.next;
  }
  return types;
};

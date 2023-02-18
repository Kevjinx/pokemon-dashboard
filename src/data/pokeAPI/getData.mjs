const parsePokemonIdFromUrl = (url) => {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 2];
}

export const getIdsByType = async (type) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();
  const ids = data.pokemon.map((pokemon) => parsePokemonIdFromUrl(pokemon.pokemon.url));
  return ids;
}

export const getIdsByAbility = async (ability) => {
  const response = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`);
  const data = await response.json();
  const ids = data.pokemon.map((pokemon) => parsePokemonIdFromUrl(pokemon.pokemon.url));
  return ids;
}

export const getIdsByWeakness = async (weakness) => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${weakness}`);
  const data = await response.json();
  const ids = data.pokemon.map((pokemon) => parsePokemonIdFromUrl(pokemon.pokemon.url));
  return ids;
}

export const getIdsByGeneration = async (generation) => {
  const response = await fetch(`https://pokeapi.co/api/v2/generation/${generation}`);
  const data = await response.json();
  const ids = data.pokemon_species.map((pokemon) => parsePokemonIdFromUrl(pokemon.url));
  return ids
}

export const getPokemonById = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
}

export const getAllAbilities = async () => {
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
  // fs.writeFile("abilitiesList.json", JSON.stringify(abilities), (err) => {
  //   if (err) throw err;
  //   console.log("The file has been saved!");
  // });
  return abilities;
};


export const getCommonIds = (...arraysOfPokemonIds) => {
  // Return the intersection of all the arrays of Pokemon ids
  return arraysOfPokemonIds.reduce((accumulator, currentArray) => {
    if (accumulator.length === 0) { //ignore empty arrays
      return currentArray;
    } else {
      return accumulator.filter((element) => currentArray.includes(element));
    }
  });
};

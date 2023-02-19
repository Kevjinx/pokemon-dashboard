const parsePokemonIdFromUrl = (url) => {
  const urlParts = url.split('/');
  return Number(urlParts[urlParts.length - 2]);
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
  console.log('ability: ', ids)
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
    data.results.foreach((data) => {
      abilities.push(data.name);
    });
    url = data.next;
  }
  return abilities;
};

export const getAllTypes = async () => {
  let types = [];
  let url = "https://pokeapi.co/api/v2/type";

  //for pagination
  while (url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.results.foreach((data) => {
      types.push(data.name); //avoid nested arrays
    });
    url = data.next;
  }
  return types;
};



export const getCommonIds = (arraysObj) => {
  const arrays = Object.values(arraysObj).filter((arr) => arr.length > 0); //remove empty arrays
  return arrays.reduce((x, y) => x.filter((z) => y.includes(z)))
}

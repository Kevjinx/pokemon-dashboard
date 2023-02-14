import pokemon from "pokemontcgsdk";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

//https://pokemontcg.io/
pokemon.configure({ apiKey: process.env.TCG_API_KEY });


const getPokemonDataByName = async (name) => {
	const result = await pokemon.card.where({ q: `name:${name}` })
	const data = JSON.stringify(result)
	fs.writeFileSync("data.json", data);
	console.log(data); // "Blastoise"
	return data
}

getPokemonDataByName("pikachu")


export { getPokemonDataByName };
import axios from "axios";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const optionsRapidAPI = {
  method: "GET",
  url: "https://pokemon-tcg-card-prices.p.rapidapi.com/card",
  params: { name: "blastoise" },
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_POKEMON_TCG_API_KEY,
    "X-RapidAPI-Host": "pokemon-tcg-card-prices.p.rapidapi.com",
  },
};

const getRapidData = async () => {
  try {
    const results = await axios.request(optionsRapidAPI);
    const prices = results.data.results[0].prices.tcgPlayer[1];
    return results;
  } catch (error) {
    console.error(error);
  }
};

const getPricingData = async () => {
  try {
    const results = await axios.request(optionsRapidAPI);
    const prices = results.data.results[0].prices.tcgPlayer[1];
    return prices;
  } catch (error) {
    console.error(error);
  }
}



export { optionsRapidAPI, getRapidData, getPricingData };

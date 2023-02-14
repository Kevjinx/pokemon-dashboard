// import { getPokemonDataByName } from "./prices_api/tcgAPI.mjs";
import { getRapidData, getPricingData } from "./prices_api/rapidTCG.mjs";
import fs from "fs";

const prices = async () => {
	const pricingData = await getPricingData();
	return pricingData;
}

export { prices };
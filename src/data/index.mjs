// import { getPokemonDataByName } from "./prices_api/tcgAPI.mjs";
import { getRapidData, getPricingData } from "./prices_api/rapidTCG.mjs";

const prices = async () => {
	const pricingData = await getPricingData();
	return pricingData;
}

export { prices };
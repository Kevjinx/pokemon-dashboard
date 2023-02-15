import finnhub from "finnhub";
// import * as dotenv from 'dotenv'
import { tickers } from "./tickers.mjs";
import fs from "fs";
// dotenv.config();
import axios from "axios";


const getCandles = (id) => {
  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  api_key.apiKey = 'cflqnupr01qjfr8f3k50cflqnupr01qjfr8f3k5g';
  const finnhubClient = new finnhub.DefaultApi();
  const pokeIdToTicker = (id) => tickers[id].Symbol;

  return new Promise((resolve, reject) => {
    finnhubClient.stockCandles(pokeIdToTicker(id), 'D', 1500988249, 1591832249, (error, data, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const test = async () => {
	const data = await getCandles(5)
	fs.writeFile('test.json', JSON.stringify(data), (err) => {
		if (err) throw err;
		console.log('Data written to file');
	})
}
test()



export default getCandles

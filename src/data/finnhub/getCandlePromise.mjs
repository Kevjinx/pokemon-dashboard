import finnhub from "finnhub";
// import * as dotenv from 'dotenv'
import { tickers } from "./tickers.mjs";
// import fs from "fs";
// dotenv.config();



const getCandlePromise = (id) => {
  const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  api_key.apiKey = process.env.FINNHUB_API_KEY;
  const finnhubClient = new finnhub.DefaultApi();
  const pokeIdToTicker = (id) => tickers[id].Symbol;

  return new Promise((resolve, reject) => {
    finnhubClient.stockCandles(pokeIdToTicker(id), 'W', 1644952172, 1676488172, (error, data, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

export default getCandlePromise

import finnhub from "finnhub";
// import * as dotenv from 'dotenv'
import { tickers } from "./tickers.mjs";
// import fs from "fs";
// dotenv.config();
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = 'cflqnupr01qjfr8f3k50cflqnupr01qjfr8f3k5g';
const finnhubClient = new finnhub.DefaultApi();



finnhubClient.quote("AAPL", (error, data, response) => {
	console.log(data)
});

import getCandlePromise from "../data/finnhub/index.mjs";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";




const PricesCandleStick = () => {
  const [candleStickData, setCandleStickData] = useState([]);


  useEffect(() => {
    getCandlePromise(4).then((data) => {
      parseCandleData(data)
      setCandleStickData(parseCandleData(data)); // data is an array of objects
    });
  }, []);

  const parseCandleData = (candleData) => {
    console.log(candleData)
    console.log(typeof(candleData))
    let candleDataArray = []

    for (let i = 0; i < candleData.t.length; i++) {
      let candle = {
        x: new Date(candleData.t[i] * 1000),
        y: [
          candleData.o[i],
          candleData.h[i],
          candleData.l[i],
          candleData.c[i],
        ],
      };
      candleDataArray.push(candle);
    }

    return candleDataArray;
  }



  const options = {
    series: [
      {
        data: candleStickData
      },
    ],
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };


  return (
    <div>
      <h1>PricesCandleStick</h1>
      <Chart
        options={options}
        series={options.series}
        type="candlestick"
        width="400px"
      />
    </div>
  );
};

export default PricesCandleStick;

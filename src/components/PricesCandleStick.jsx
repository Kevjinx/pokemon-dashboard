import getCandles from '../data/finnhub/index.mjs';
import Chart from "react-apexcharts";

const dataToCandleStick = data => {
  const candleStick = data.map(candle => {
    return {
      x: new Date(candle.t * 1000),
      y: [candle.o, candle.h, candle.l, candle.c],
    };
  });
  return candleStick;
}

const options = {
  series: [
    {
      data: dataToCandleStick(getCandles(4)),
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




const PricesCandleStick = () => {

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
}


export default PricesCandleStick;
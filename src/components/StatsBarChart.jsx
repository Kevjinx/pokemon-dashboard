import Chart from "react-apexcharts";

const StatsBarChart = (props) => {

  const getStats = (statsObj) => {
    const stats = [];
    Object.keys(statsObj).forEach((key) => {
      stats.push({
        x: key, // key: hp, attack...
        y: statsObj[key], // value: stats
      });
    });
    return stats;
  };

  const options = {
    chart: {
      id: "basic-bar",
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    series: [
      {
        data: getStats(props.data)
      },
    ],
  };
  console.log(props);
  return (
    <div id="chart">
      <Chart
        options={options}
        series={options.series}
        type="bar"
        width="400px"
      />
    </div>
  );
};

export default StatsBarChart;

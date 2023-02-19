import Chart from "react-apexcharts";

const StatsBarChart = (props) => {
  const getStats = (statsObj) => {
    const stats = [];
    Object.keys(statsObj).forEach((key) => {
      stats.push({
        x: statsObj[key].stat.name, // key: hp, attack...
        y: statsObj[key].base_stat, // value: stats
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

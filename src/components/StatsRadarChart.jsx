import Chart from "react-apexcharts";

const StatsRadarChart = (props) => {

	//should create a util folders for these functions
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
			type: 'radar',
    },
		plotOptions: {
			fill: {
				opacity: 0.5,
				colors: []
			}
		},
    yaxis: {
      labels: {
        style: {
          fontSize: "0px", //'show: false' doesn't work. Workaround: set font size to 0
        }
      },
    },
		series: [
      {
        name: "Stats",
        data: getStats(props.data)
      },
    ],


  };
  return (
    <div id="chart">
      <Chart
        options={options}
        series={options.series}
        width="400px"
				type="radar"
      />
    </div>
  );
};

export default StatsRadarChart;

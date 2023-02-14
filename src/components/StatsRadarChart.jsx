import Chart from "react-apexcharts";

const StatsRadarChart = (props) => {

	//should create a util folders for these functions
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
			type: 'radar',
      id: "basic-bar",
    },
    grid: {
    },
		plotOptions: {
			fill: {
				opacity: 0.5,
				colors: []
			}
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
        width="400px"
				type="radar"
      />
    </div>
  );
};

export default StatsRadarChart;

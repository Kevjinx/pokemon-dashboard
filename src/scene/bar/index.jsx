import { Box } from "@mui/material";
import StatsBarChart from '../../components/StatsBarChart';
import StatsRadarChart from '../../components/StatsRadarChart';

const Bar = () => {
  const testStats = {
    hp: 20,
    attack: 90,
    defense: 70,
    spattack: 80,
    spdefense: 90,
    speed: 100
  };
  return (
    <Box m="20px">
      <Box height="30vh">
        {/* will update with provider */}
        <StatsBarChart data={testStats}/>
        <StatsRadarChart data={testStats}/>
      </Box>
    </Box>
  );
};

export default Bar;

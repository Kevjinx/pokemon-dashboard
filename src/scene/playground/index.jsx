import { Box } from "@mui/material";
import PricesCandleStick from "../../components/PricesCandleStick";
import Card from "../../components/Card";
import Evolutions from "../../components/Evolutions";
const Playground = () => {
  return (
    <Box m="20px">
      <Box>
        <Card />
      </Box>
      <Box>
        <Evolutions />
      </Box>
    </Box>
  );
};

export default Playground;

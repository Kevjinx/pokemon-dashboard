import { Box } from "@mui/material";
import PricesCandleStick from "../../components/PricesCandleStick";

const Playground = () => {
  return (
    <Box m="20px">
      <Box height="75vh">
        <PricesCandleStick />
      </Box>
    </Box>
  );
};

export default Playground;

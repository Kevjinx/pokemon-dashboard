import { Box } from "@mui/material";
import PricesCandleStick from "../../components/PricesCandleStick";
import Card from "../../components/Card";
import Evolutions from "../../components/Evolutions";
import FilterSelect from "../../components/FilterSelect";
const Playground = () => {
  return (
    <Box m="10px">
      <Card />
      <Evolutions />
      <FilterSelect />
    </Box>
  );
};

export default Playground;

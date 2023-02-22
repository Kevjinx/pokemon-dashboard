import { Box } from "@mui/material";
import Evolutions from "../../components/Evolutions";
import FilterSelect from "../../components/FilterSelect";

const Playground = () => {
  return (
    <Box m="10px">
      <Evolutions />
      <FilterSelect />
    </Box>
  );
};

export default Playground;

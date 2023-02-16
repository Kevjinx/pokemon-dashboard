import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";

const FilterSelect = () => {
  const [filters, setFilters] = useState({
    type: "",
    weakness: "",
    generation: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFilters({ ...filters, [name]: value });
  };

  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const gridItems = (filter, menuItems) => {
    return (
      <Grid item xs>
        <Box
          sx={{
            '& .MuiFormControl-root': {
              width: '100%'
            }
          }}
        >
          <FormControl>
            <InputLabel id={`${filter}-label`}>{capFirstLetter(filter)}</InputLabel>
            <Select
              name={filter}
              labelId={`${filter}-label`}
              id={`${filter}-select`}
              value={filters[filter]}
              onChange={handleFilterChange}
            >
              {menuItems.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      {gridItems("type", ["grass", "fire", "water"])}
      {gridItems("weakness", ["flying", "ground", "rock"])}
      {gridItems("generation", ["gen1", "gen2", "gen3"])}
    </Grid>
  );
};

export default FilterSelect;

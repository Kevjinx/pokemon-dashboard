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



  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item xs >
        <Box
          sx={{
            '& .MuiFormControl-root': {
              width: '100%'
            }
          }}
        >
          <FormControl>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              autoWidth={true}
              name="type"
              labelId="type-label"
              id="type-select"
              value={filters.type}
              onChange={handleFilterChange}
            >
              <MenuItem value="grass">Grass</MenuItem>
              <MenuItem value="fire">Fire</MenuItem>
              <MenuItem value="water">Water</MenuItem>
            </Select>
          </FormControl>

        </Box>
      </Grid>

      <Grid item xs>
        <FormControl>
          <InputLabel id="weakness-label">Weaknesses</InputLabel>
          <Select
            name="weakness"
            labelId="weakness-label"
            id="weakness-select"
            value={filters.weakness}
            onChange={handleFilterChange}
          >
            <MenuItem value="flying">Flying</MenuItem>
            <MenuItem value="ground">Ground</MenuItem>
            <MenuItem value="rock">Rock</MenuItem>
            {/* Add more weakness options as needed */}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs>
        <FormControl>
          <InputLabel id="generation-label">Generation</InputLabel>
          <Select
            name="generation"
            labelId="generation-label"
            id="generation-select"
            value={filters.generation}
            onChange={handleFilterChange}
          >
            <MenuItem value="gen1">Gen1</MenuItem>
            <MenuItem value="gen2">Gen2</MenuItem>
            <MenuItem value="gen3">Gen3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default FilterSelect;

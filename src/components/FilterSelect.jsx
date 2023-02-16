import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import Box from "@mui/material/Box";

const FilterSelect = () => {
  const [filters, setFilters] = useState({
    type: "",
    weakness: "",
    generation: "",
  });

  const handleFilterChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="type-label">Type</InputLabel>
        <Select
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

      <FormControl>
        <InputLabel id="weakness-label">Weaknesses</InputLabel>
        <Select
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

      <FormControl>
        <InputLabel id="generation-label">Generation</InputLabel>
        <Select
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
    </Box>
  );
}

export default FilterSelect;
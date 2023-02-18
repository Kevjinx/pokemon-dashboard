import {
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  getPokemonById,
  getIdsByType,
  getIdsByAbility,
  getIdsByGeneration,
  getAllAbilities,
  getCommonIds,
  getIdsByWeakness,
  abilityList
} from "../data/pokeAPI/index.mjs";

const FilterSelect = () => {
  const [filters, setFilters] = useState({
    type: "",
    weakness: "",
    generation: "",
  });
  const [ids, setIds] = useState({
    type: [],
    weakness: [],
    generation: [],
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFilters({ ...filters, [name]: value });
  };

  const handleSearchButton = () => {
    console.log('searching')
    const commonIds = getCommonIds(ids.type, ids.weakness, ids.generation);
    console.log('commonIds: ',commonIds)
  }

  useEffect(() => {
    const fetchData = async () => {
      let newIds = { ...ids };
      if (filters.type) {
        newIds.type = await getIdsByType(filters.type);
      }
      if (filters.weakness) {
        newIds.weakness = await getIdsByWeakness(filters.weakness);
      }
      if (filters.generation) {
        newIds.generation = await getIdsByGeneration(filters.generation);
      }
      console.log('newids: ',newIds)
      setIds(newIds);
    };
    fetchData().catch(console.error);
  }, [filters]);

  const capFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  //getFilterData, locally stored.

  const gridItems = (filter, menuItems) => {
    return (
      <Grid item xs>
        <Box
          sx={{
            "& .MuiFormControl-root": {
              width: "100%",
            },
          }}
        >
          <FormControl>
            <InputLabel id={`${filter}-label`}>
              {capFirstLetter(filter)}
            </InputLabel>
            <Select
              name={filter}
              labelId={`${filter}-label`}
              id={`${filter}-select`}
              value={filters[filter]}
              onChange={handleFilterChange}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Grid>
    );
  };

  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {gridItems("type", ["grass", "fire", "water"])}
        {gridItems("weakness", ["flying", "ground", "rock"])}
        {gridItems("abilities", abilityList)}
        {gridItems("generation", ["1", "2", "3"])}
        {gridItems("height", ["Short ", "Grande ", "Venti"])}
        {gridItems("weight", ["small", "medium", "large"])}
      </Grid>
      <button onClick={handleSearchButton}>Search</button>
    </div>
  );
};

export default FilterSelect;

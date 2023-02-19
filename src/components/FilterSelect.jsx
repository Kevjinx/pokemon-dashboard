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
  getIdsByType,
  getIdsByAbility,
  getIdsByGeneration,
  getCommonIds,
  getIdsByWeakness,
  abilityList,
  typeList,
} from "../data/pokeAPI/index.mjs";
import DisplaySearch from "./DisplaySearch";

const FilterSelect = () => {
  const [filters, setFilters] = useState({
    type: "",
    weakness: "",
    generation: "",
    ability: "",
  });
  const [ids, setIds] = useState({
    type: [],
    weakness: [],
    generation: [],
    ability: [],
  });
  const [commonIds, setCommonIds] = useState([]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFilters({ ...filters, [name]: value });
  };

  const handleSearchButton = () => {
    const idArrays = [ids.type, ids.weakness, ids.generation, ids.ability];
    setCommonIds(getCommonIds(idArrays));
  };

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
      if (filters.ability) {
        newIds.ability = await getIdsByAbility(filters.ability);
      }

      console.log("newids: ", newIds);
      setIds(newIds);
    };
    fetchData().catch(console.error);
  }, [filters]);

  const capFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

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
              <MenuItem value={`undefined`} />
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
        {gridItems("type", typeList)}
        {gridItems("weakness", typeList)}
        {gridItems("abilities", abilityList)}
        {gridItems("generation", ["1", "2", "3"])}
        {gridItems("height", ["Short ", "Grande ", "Venti"])}
        {gridItems("weight", ["small", "medium", "large"])}
      </Grid>
      <button onClick={handleSearchButton}>Search</button>
      <div>
        <DisplaySearch commonIds={commonIds} />
      </div>
    </div>
  );
};

export default FilterSelect;

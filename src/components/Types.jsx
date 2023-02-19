import { Typography, Box } from "@mui/material";
import TypePill from './TypePill';

const Types = ( {types} ) => {
  console.log(types)
  return (
    <Box>
      <Typography variant="h5">Type</Typography>
      <Box display="flex" alignItems="center">
        {types.map((type, index) => (
          <Box key={index} m={1}>
						<TypePill type={type} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Types;

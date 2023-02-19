import { Typography, Box } from "@mui/material";
import TypePill from './TypePill';


const Weaknesses = ({ weaknesses }) => {
	console.log(weaknesses)
  return (
    <Box>
      <Typography variant="h5">Weakness</Typography>
      <Box display="flex" alignItems="center">
        {weaknesses.map((weakness, index) => {

					console.log(weakness)
					return (
						<Box key={index} m={1}>
							<TypePill type={weakness} />
						</Box>
					)

				}
				)}
      </Box>
    </Box>
  );
};

export default Weaknesses;

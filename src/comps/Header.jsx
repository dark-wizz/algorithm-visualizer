import { Box, Button, MenuItem, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import { useApp } from "./contexts/AppProvider";

const Header = () => {
  const { selectedAlgo, setSelectedAlgo } = useApp();
  return (
    <Box className="header">
      <Typography className="left">
        Algorithm Visualizer
      </Typography>
      <Select

        sx={{
          '&:before': {
            borderBottom: 'none', // Remove the bottom line
          },
          '&:after': {
            borderBottom: 'none', // Remove the bottom line
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: 'none', // Remove the bottom line on hover
          },
        }}
        className="center"
        variant="standard"
        value={selectedAlgo}
        onChange={(e) => setSelectedAlgo(e.target.value)}
      >
        <MenuItem value="bubbleSort">Bubble Sort</MenuItem>
        <MenuItem value="selectionSort">Selection Sort</MenuItem>
      </Select>
      <Box>
        <Button>hai</Button>
        <Button>bye</Button>
      </Box>
    </Box>
  );
};

export default Header;

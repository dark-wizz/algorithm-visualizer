import { Box, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { useApp } from "./contexts/AppProvider";

const Header = () => {
  const { selectedAlgo, setSelectedAlgo } = useApp();
  return (
    <Box className="header">
      <Select
        value={selectedAlgo}
        onChange={(e) => setSelectedAlgo(e.target.value)}
      >
        <MenuItem value="bubbleSort">Bubble Sort</MenuItem>
        <MenuItem value="selectionSort">Selection Sort</MenuItem>
      </Select>
    </Box>
  );
};

export default Header;

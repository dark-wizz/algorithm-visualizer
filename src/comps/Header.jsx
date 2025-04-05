import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { useApp } from "./contexts/AppProvider";

const Header = () => {
  const { selectedAlgo, setSelectedAlgo } = useApp();
  return (
    <div className="header">
      <Select
        sx={{
          color: "#23EDED",
          textShadow: "0 0 5px #23EDED",
          fontWeight: "bold",
          ".MuiSvgIcon-root": {
            color: "#23EDED",
            filter: "drop-shadow(0 0 5px #23EDED)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#000912",
              color: "#23EDED",
              boxShadow: "0 0 5px #23EDED",
              border: "1px solid #23EDED",
            },
          },
        }}
        value={selectedAlgo}
        onChange={(e) => setSelectedAlgo(e.target.value)}
      >
        <MenuItem value="bubbleSort">Bubble Sort</MenuItem>
        <MenuItem value="selectionSort">Selection Sort</MenuItem>
      </Select>
    </div>
  );
};

export default Header;

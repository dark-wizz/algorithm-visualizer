import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import { useApp } from "./contexts/AppProvider";

const Header = () => {
  const { selectedAlgo, setSelectedAlgo } = useApp();
  return (
    <div className="header">
      <Select
        MenuProps={{
          PaperProps: {
            className: "custom-select-menu",
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

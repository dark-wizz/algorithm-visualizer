import { Box, Button, IconButton, MenuItem, Paper, Tooltip, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import { useApp } from "./contexts/AppProvider";
import { GitHub } from "@mui/icons-material";
import { AccessibilityNew } from "@mui/icons-material";
import { AccessibilityNewOutlined } from "@mui/icons-material";
import { NoEncryption } from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  const { selectedAlgo, setSelectedAlgo } = useApp();
  return (
    <Paper className="header"
      sx={{
        background: "transparent",
        border: "none",
      }}
      elevation={0}
    >
      <Box className="left">
        <Typewriter
          words={['Sorting Algorithm Visualizer']}
          cursor
          cursorStyle="_"
          cursorColor="#23eded"
        >
        </Typewriter>
        </Box>
      <Box
        className="center"
      >
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
          variant="standard"
          value={selectedAlgo}
          onChange={(e) => setSelectedAlgo(e.target.value)}
        >
          <MenuItem value="bubbleSort">Bubble Sort</MenuItem>
          <MenuItem value="selectionSort">Selection Sort</MenuItem>
        </Select>
      </Box>
      <Box className="right">
        <Tooltip title="Reduce Motion" placement="bottom" arrow>
          <IconButton>
            <AccessibilityNewOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="Source Code" placement="bottom" arrow>
          <IconButton>
            <GitHub />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
};

export default Header;

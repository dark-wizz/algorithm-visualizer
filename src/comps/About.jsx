import { Box, Card, Paper, Typography } from "@mui/material";
import { useApp } from "./contexts/AppProvider";

const About = () => {
  const { desc, selectedAlgo } = useApp();

  const algorithms = {
    bubbleSort: "Bubble Sort",
    selectionSort: "Selection Sort",
    insertionSort: "Insertion Sort",
  };
  return (
    <Paper className="about">
      <Box className="wrap">
        <Typography variant="h6" className="title" style={{ marginBottom: "0.7em" }}>
          {algorithms[selectedAlgo]}
        </Typography>
        <Typography sx={{
          color: "rgba(61, 243, 240)",
          backgroundColor: "rgba(61, 243, 240, 0.3)",
          padding: "1em",
          borderRadius: "5px",
        }} className="desc">{desc}</Typography>
      </Box>
    </Paper>
  );
};

export default About;

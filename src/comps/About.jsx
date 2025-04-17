import { Box, Card, Typography } from "@mui/material";
import { useApp } from "./contexts/AppProvider";

const About = () => {
  const { desc, selectedAlgo } = useApp();

  const algorithms = {
    bubbleSort: "Bubble Sort",
    selectionSort: "Selection Sort",
  };
  return (
    <Card className="about">
      <Box className="wrap">
        <Typography variant="h4" className="title" style={{ marginBottom: "0.7em" }}>
          {algorithms[selectedAlgo]}
        </Typography>
        <Typography className="desc">{desc}</Typography>
      </Box>
    </Card>
  );
};

export default About;

import Code from "./Code";
import About from "./About";
import Player from "./Player";
import { useState, useEffect } from "react";
import { genRandomArr } from "../utils/funcs";
import { useApp } from "./contexts/AppProvider";
import Display from "./Display"
import { Box } from "@mui/material";

const Body = () => {
  const [vals, setVals] = useState([]);
  const [size, setSize] = useState(10);
  const { selectedAlgo } = useApp();

  const genVal = () => {
    const v = genRandomArr(2, 99, size)
    setVals(v);
  }

  useEffect(genVal, [size, selectedAlgo]);

  return (
    <Box className="body" >
      <Display vals={vals} />
      <Code />
      <Player
        size={size}
        onGen={genVal}
        setSize={setSize}
        vals={vals}
        setVals={setVals}
      />
      <About />
    </Box>
  );
};

export default Body;


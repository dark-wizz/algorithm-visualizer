import Bar from "./Bar";
import Code from "./Code";
import About from "./About";
import Player from "./Player";
import { useState } from "react";
import { useEffect } from "react";
import { genRandomArr } from "../utils/funcs";
import { useApp } from "./contexts/AppProvider";

const Display = () => {
  const [vals, setVals] = useState([]);
  const [size, setSize] = useState(10);
  const [rkey, setRkey] = useState(0);
  const { selectedAlgo } = useApp();

  const genVal = () => {
    setVals(genRandomArr(2, 15, size));
  }

  useEffect(genVal, [size, selectedAlgo]);

  return (
    <div className="display" key={rkey}>
      <div
        className="bars"
        style={{
          display: "flex",
          gap: "1em",
          alignItems: "flex-end",
        }}
      >
        {vals.map((v, k) => (
          <Bar val={v.v} id={k} key={k} />
        ))}
      </div>

      <Code />
      <Player
        size={size}
        onGen={genVal}
        setSize={setSize}
        vals={vals}
        setVals={setVals}
        setRkey={setRkey}
      />
      <About />
    </div>
  );
};

export default Display;

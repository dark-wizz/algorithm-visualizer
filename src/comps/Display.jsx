import Bar from "./Bar"
import Code from "./Code";
import About from "./About";
import Player from "./Player";
import { useState } from "react";
import { useEffect } from "react";
import { genRandomArr } from "../utils/funcs";

const Display = () => {
  
  const [vals, setVals] = useState([]);
  const [size, setSize] = useState(10)

  useEffect(()=>{
    setVals(genRandomArr(2, 10, size))
  },[size])

  return <div className="display">
    <div className="bars"
      style={{
          display: "flex",
          gap: "1em",
          alignItems: "flex-end",
      }}
    >
    {vals.map(i => <Bar val={i}/>)}
    </div>
    
    <Code />
    <Player size={size} setSize={setSize} vals={vals} setVals={setVals} />
    <About />

  </div>
}

export default Display;

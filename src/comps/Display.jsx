import Bar from "./Bar"
import Code from "./Code";
import About from "./About";
import Player from "./Player";
import { useState } from "react";
import { useEffect } from "react";
import { genRandomArr } from "../utils/funcs";
import { useAnimate } from "motion/react";

const Display = () => {
  
  const [vals, setVals] = useState([]);
  const [size, setSize] = useState(4)
  const [scope, animate] = useAnimate()

  useEffect(()=>{
    // setVals(genRandomArr(2, 10, size))
    setVals([{i:0, v:6}, {i:1, v:8}, {i:2, v:4}, {i:3, v:10}])
  },[size])

  return <div className="display">
    <div className="bars" ref={scope}
      style={{
          display: "flex",
          gap: "1em",
          alignItems: "flex-end",
      }}
    >
    {vals.map((v, k) => <Bar val={v.v} id={k}/>)}
    </div>
    
    <Code />
    <Player animate={animate} size={size} setSize={setSize} vals={vals} setVals={setVals} />
    <About />

  </div>
}

export default Display;

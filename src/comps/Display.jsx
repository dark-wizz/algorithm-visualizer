import Bar from "./Bar"
import Code from "./Code";
import About from "./About";
import Player from "./Player";
import { useState } from "react";
import { useEffect } from "react";
import { genRandomArr } from "../utils/funcs";
import { useAnimate } from "motion/react";
import { useRef } from "react";
import DescProvider from "./contexts/DescProvider";

const Display = () => {
  
  const [vals, setVals] = useState([]);
  const [size, setSize] = useState(10)
  const [rkey, setRkey] = useState(0);
  const [scope, animate] = useAnimate()

  useEffect(()=>{
    setVals(genRandomArr(2, 20, size))
  },[size])

  useEffect(()=>{
    setRkey(p=>p+1)
  },[vals,size])

  return <div className="display" key={rkey} ref={scope}>
    <div className="bars"  
      style={{
          display: "flex",
          gap: "1em",
          alignItems: "flex-end",
      }}
    >
    {vals.map((v, k) => <Bar val={v.v} id={k} key={k}/>)}
    </div>
    
    <Code />
    <DescProvider>
      <Player
        animate={animate} size={size}
        setSize={setSize} vals={vals}
        setVals={setVals} setRkey={setRkey}
      />
      <About 
      />
    </DescProvider>

  </div>
}

export default Display;

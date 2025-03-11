import Bar from "./Bar"
import Code from "./Code";
import About from "./About";
import Player from "./Player";

const Display = () => {
  return <div className="display">
    <div className="bars"
      style={{
          display: "flex",
          gap: "1em",
          alignItems: "flex-end",
      }}
    >
    {Array.from({length: 12}, (_,i)=>i).map(i => <Bar val={i}/>)}
    </div>
    
    <Code />
    <Player />
    <About />

  </div>
}

export default Display;

import { bubbleCode, selectionCode } from "../utils/pseudocode.js";
import { useApp } from "./contexts/AppProvider.jsx";

const Code = () => {
  const {selectedAlgo} = useApp()

  let currCode;
  switch(selectedAlgo){
    case "bubbleSort":
      currCode = bubbleCode
      break
    case "selectionSort":
      currCode = selectionCode
      break
  }
  return <div className="code">
    <div className="wrap">
    {currCode.map((v,i)=>{
      return <pre id={`c${i}`} key={i}>{i+1} {v}</pre>
    })}
  </div>
    </div>
}

export default Code;

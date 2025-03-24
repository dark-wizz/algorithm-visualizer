import { bubbleCode } from "../utils/pseudocode.js";

const Code = () => {
  return <div className="code">
    <div className="wrap">

    {bubbleCode.map((v,i)=>{
      return <pre id={`c${i}`} key={i}>{i+1} {v}</pre>
    })}
  </div>
    </div>
}

export default Code;

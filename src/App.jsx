import "./App.scss"
import Header from "./comps/Header";
import Body from "./comps/Body";
import { useState } from "react";

const App = () => {
  const [selectedAlgo,setSelectedAlgo] = useState("bubbleSort")

  return <div className="app">
      <Header selectedAlgo={selectedAlgo} setSelectedAlgo={setSelectedAlgo}/>
      <Body />
    </div>
}

export default App;

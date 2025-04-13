import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export default function DescProvider({children}){
  const [speed, setSpeed] = useState(1)
  const [desc, setDesc] = useState("")
  const [selectedAlgo,setSelectedAlgo] = useState("bubbleSort")
  return <AppContext.Provider value={{speed, setSpeed, selectedAlgo, setSelectedAlgo, desc, setDesc}}>
    {children}
  </AppContext.Provider>
}

export function useApp(){
  return useContext(AppContext)
}

import { useContext, createContext, useState } from "react";

const DescContext = createContext();

export default function DescProvider({children}){
  const [desc, setDesc] = useState("")
  return <DescContext.Provider value={{desc, setDesc}}>
    {children}
  </DescContext.Provider>
}

export function useDesc(){
  return useContext(DescContext)
}

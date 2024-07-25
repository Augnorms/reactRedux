import { createContext, ReactNode, Dispatch, SetStateAction, useState } from "react";

interface ContextProps{
    count:number,
    setCount:Dispatch<SetStateAction<number>>
}

interface ReactChildren{
    children:ReactNode
}

export const Counter = createContext<ContextProps>({
   count:0,
   setCount: ()=>{}
})

export const CounterContextProvider = ({children}:ReactChildren)=>{
   const[count, setCount] = useState<number>(0)

   return(
      <Counter.Provider value={{count, setCount}}>
         {children}
      </Counter.Provider>
   )
}
import { useEffect, useState, useMemo, useCallback, useContext } from "react"
import { Counter } from "../assets/Context/contextStore"
 
export const Counters = () => {
const {count, setCount} = useContext(Counter);  
// const[count, setCount] = useState(0)

const increment = useCallback(()=>{
  setCount((prev)=>prev + 1)
},[])

const duplicate = useMemo(()=>{
  return count * 2
},[count])

  return (
    <div className="w-fill">
      <p className="mb-2">{count}</p>
      <p className="mb-2">{duplicate}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

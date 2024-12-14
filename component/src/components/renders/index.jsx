import { memo, useCallback, useMemo, useState } from "react"

export default function Parent(){
    const [state,setState] = useState(0);
   return (
    <div>
        <button onClick={()=>setState((prev)=>prev+1)}>+</button>
        <div>{state}</div>
         <Child num={20}/>
    </div>
   )
}

const Child = ({num})=>{
   const fun = useMemo(()=>{
    console.log("vca");
    return num;
   },[num])
  return <button>{fun}</button>
}
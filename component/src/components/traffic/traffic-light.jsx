import { useEffect, useState } from "react";
import './traffic.css'
import Light from "./light";
import { data } from "./data";

const TrafficLight = () => {
    const [currColor,setCurrColor] = useState('red');

    useEffect(()=>{
     const timer =  setTimeout(()=>{
         setCurrColor(data[currColor].nextColor)
       },[data[currColor].time]);

       return ()=>{
        clearTimeout(timer)
       }

    },[currColor])

    
    return ( 
        <div>
           {
            Object.keys(data).map((key)=>(
                <Light key={key} color={currColor === data[key].color ? data[key].color : "grey"}/>
            ))
           }
        </div>
     );
}
 
export default TrafficLight;
import { useState } from 'react';
import './star.css'
const Star = () => {
   const [startVal,setStarVal] = useState(0);
    return ( 
        <div>
           {
              [1,2,3,4,5].map((val)=>{
                  return (
                    <span onClick={()=>{
                        setStarVal(val);
                    }} className={startVal >= val ? "fill" : ""}>&#x2606;</span>
                  )
              })
           }
        </div>
     );
}
 
export default Star;
import { useEffect, useState } from "react"
import './grid.css'
const gridData = [[1,0,1],[0,1,1],[1,1,1]]
export default function Grid(){
    const [data,setData] = useState(gridData.flat(1))
    const [color,setColor] = useState([])
    const noOne = data.reduce((acc,curr)=>curr===1?acc+1:acc,0)
    const [isLast,setIsLast] = useState(false)

   
    const handleClick = (index)=>{
      setColor([...color,index])
      if(color.length === noOne-1){
        setIsLast(true)
      }
    }
    
    useEffect(()=>{
      let timerId;

      if(isLast){
       timerId = setInterval(()=>{
         const temp = [...color];
         temp.pop();
         setColor(temp)
        },300)
      }
      return ()=>{
        clearInterval(timerId)
      }

    },[color,isLast])



    return (
        <div className="grid-cont">
           {
             data?.map((d,index)=>{
                const isCheck = color.includes(index)
                return <div key={index} onClick={()=>handleClick(index)} className={`${d === 0 ? 'hide':""} ${isCheck && 'blue'} grid`}></div>
             })
           } 
        </div>
    )
}
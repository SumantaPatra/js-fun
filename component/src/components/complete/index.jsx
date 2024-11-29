import Main from "./Main";
import Footer from "./footer";
import NavBar from "./nav-bar";
import './index.css'
import { useEffect, useState } from "react";
import UseData from "./hooks/use-data";
export default function Home(){
    const [showOpen,setShowOpen] = useState(true);
    const [offset, setOffset] = useState(0);
    const { data, isLoading, pages,setData } = UseData(offset);
    // const {data} = UseData();
    const [filterData,setFiletrData] = useState(data);
    // console.log(filterData,data);
    const Humberger = ()=>{
        return (
            <button onClick={()=>setShowOpen(!showOpen)}>show</button>
        )
    }
    const changeHandler = (value)=>{
        // const prev = [...data];
      if(value !== ""){
         const temp = data?.filter((el)=> el.title.includes(value));
        //  console.log(temp);
        setFiletrData([...temp])
      }
    }
    useEffect(()=>{
       if(data.length > 0){
        setFiletrData(data)
       }
    },[data])
    return (
        <div>
            <div className="humberger">
                <Humberger/>
            </div>
           <NavBar onChange={changeHandler} showMenu={showOpen}/>
            <Main pages={pages} data={filterData} isLoading={isLoading} setOffset={setOffset}/>
            <Footer/>   
        </div>
    )
}
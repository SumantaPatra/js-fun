import useData from "./use-data";
import './product.css'
import { useCallback, useMemo, useRef, useState } from "react";

const ProductCard = ({product})=>{
  const {images,title,price} = product;

  return <div className="prod-card">
         <img className="prod-img" src={images[0]} alt={title} />
         <div className="prod-details">
            <div>{title}</div>
            <div>{price}</div>
         </div>
  </div>
}

const Home = () => {
    const [offset,setOffset] = useState(0);
    const {data,isLoading,hasMore} = useData(offset);
    const divRef = useRef(null);

    const scrollHandler = useCallback((element)=>{

        console.log("called");

        if(isLoading) return;

        if(divRef.current) {
            divRef.current.disconnect()
        }
       
        divRef.current = new IntersectionObserver((entries)=>{
            if(entries[0].isIntersecting && hasMore){
                setOffset((off)=>off+30)
            }
        })
        if(element){
            divRef.current.observe(element);
        }

    },[isLoading,hasMore])

    // console.log(data.length);
    
    return ( 
        <div className="prod-container">
             {
                 data?.map((prod,index)=> {
                   return <ProductCard ref={scrollHandler} key={prod.id} product={prod}/>
                 })
             }
             <div ref={scrollHandler}></div>
             {isLoading && <h1>loading</h1>}
        </div>
     );
}
 
export default Home;
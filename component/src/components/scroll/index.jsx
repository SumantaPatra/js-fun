import { useCallback, useEffect, useRef, useState } from "react";
import './index.css'
export default function ScrollHandler(){
    const [data,setData] = useState([
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple",
        "apple"
    ])
    const [isScrolling,setIsScrolling] = useState(true);
    const divRef = useRef();
    const scrollIntervalRef = useRef(null);
    const lastScrollTop = useRef(0); 
   
  useEffect(()=>{
    const handleScroll = ()=>{
      if(divRef.current.scrollTop < lastScrollTop.current){
        setIsScrolling(false);
      }
      lastScrollTop.current = divRef.current.scrollTop
    }

     divRef.current.addEventListener("scroll",handleScroll);

     return ()=>{
        divRef.current.removeEventListener("scroll",handleScroll)
     }
  },[])




    useEffect(() => {
        if (isScrolling) {
            scrollIntervalRef.current = setInterval(() => {
                if (divRef.current) {
                    divRef.current.scrollTop += 5; // Increment scroll
                }
            }, 16); // Smooth scrolling, approx 60fps
        } else {
            clearInterval(scrollIntervalRef.current);
        }

        return () => clearInterval(scrollIntervalRef.current);
    }, [isScrolling]);

    const handlePlay = () => {
        setIsScrolling(true);
        // scrollAnimationRef.current = requestAnimationFrame(scrollToBottom);
    };

    // Handle Pause button
    const handlePause = () => {
        setIsScrolling(false);
        // cancelAnimationFrame(scrollAnimationRef.current); // Stop the animation
    };
   
//    const handleData =  useCallback((element)=>{
        
        
//             divRef.current = new IntersectionObserver((entries)=>{
//                 if(entries[0].isIntersecting){
//                      console.log('intersecting');
//                 }
//             })
//         if(element){
//             divRef.current.observe(element);
//         }
//     },[])

// useEffect(() => {
//     if (isScrolling) {
//         scrollIntervalRef.current = setInterval(() => {
//             if (divRef.current) {
//                 divRef.current.scrollTop += 5; // Increment scroll
//             }
//         }, 16); // Smooth scrolling, approx 60fps
//     } else {
//         clearInterval(scrollIntervalRef.current);
//     }

//     return () => clearInterval(scrollIntervalRef.current);
// }, [isScrolling]);



   
    
    return (
      <>
         <ul ref={divRef} className="container">
        {
            data?.map((d,index)=>{
                if(index === data.length-1){
                    return <li>{d}</li>
                }
                return <li>{d}</li>
            })
        }
       </ul>
       <button onClick={handlePlay}>play</button>
       <button onClick={handlePause}>resume</button>
      </>
    )
}
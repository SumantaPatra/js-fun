import { useState, useMemo, useRef, useEffect } from "react";
import './index.css'
export default function Grid({ data }) {
  const [state, setState] = useState(data);
  const [color, setColor] = useState([]);
  const [isRemoving,setIsremoving] = useState(false)
//   const interval = useRef(null);

  const count = useMemo(() => {
    let c = 0;
    data.forEach((d) => {
      d.forEach((el) => {
        if (el === 1) c++;
      });
    });
    return c;
  }, [data]);

 

  useEffect(() => {
    let interval;
    if (isRemoving && color.length > 0) {
        interval = setInterval(() => {
          setColor((prevColor) => prevColor.slice(0, -1)); // Remove last element
        }, 500);
      }
  
      if (color.length === 0 && isRemoving) {
        clearInterval(interval);
        setIsremoving(false); // Stop interval once all elements are removed
      }
  
      return () => clearInterval(interval);
  }, [color,count,isRemoving]);

  const clickHandler = (row, col) => {
    const index = `${row}${col}`;
    setColor([...color, index]);
    if(color.length+1 === count){
        setIsremoving(true)
    }
  };

  return (
    <div className="grid">
      {state.map((arr, i) => {
        return arr.map((d, j) => {
          const targetIndex = `${i}${j}`;
          return (
            <button
              style={{
                backgroundColor: color.includes(targetIndex) ? "red" : "",
              }}
              onClick={() => clickHandler(i, j)}
              className={d === 1 ? "box" : "hide"}
            ></button>
          );
        });
      })}
    </div>
  );
}

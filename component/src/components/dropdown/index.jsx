import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./context";

const DropdownContext = createContext();

export default function Dropdown({
  data = [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" }
  ],
  multiSelect = true,
  children
}) {
  const [selectedValues, setSelectedValues] = useState(multiSelect ? [] : "");

  const {state,dispatch} = useContext(AuthContext)

 

  return (
    <DropdownContext.Provider value={data}>
    <div style={{width:"200px",backgroundColor:"grey"}}>
     {/* {children} */}
     <span>{state}</span>
     <button onClick={()=>dispatch({type:'add-cnt'})}>add</button>
    </div>
    </DropdownContext.Provider>
  );
}

Dropdown.multiSelect = function MultiSelct({children}){
  const data = useContext(DropdownContext)
  // console.log(data[0]);
  return (
    <select 
     multiple={true}
    >
      {
         data?.map((d)=>(
          <option value={d.value}>{d.name}</option>
         ))
      }
    </select>
  )
}

Dropdown.singleSelect = function({childern}){
  return (
    <select>
      {childern}
    </select>
  )
}

function DataDisplay({ data }) {
  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const DataDisplayWithLoading = withLoading(DataDisplay);

function withLoading(Component) {
  return function WrappedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

<DataDisplayWithLoading isLoading={true}/>


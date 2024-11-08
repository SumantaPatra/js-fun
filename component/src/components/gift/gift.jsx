import { useState } from "react";

const Gift = () => {
    const [person,setPerson] = useState([])
    const [value,setValue] = useState("");

    const shuffleHandler = ()=>{
       const newPerson = [...person];
       let index = newPerson.length;

       

       setPerson(newPerson);

    }
    const resetHandler = ()=>{
       const filterArr = person.map((p)=>(
        {
            ...p,
            giftName:""
        }
       ))

       setPerson(filterArr);
    }
    const assignHandler = ()=>{
      const gifts = ["abc","def","ghi","lkm"];
      const filterArr = person.map((p)=>{
        let randIndex = Math.floor(Math.random()*gifts.length);
       return ({
            ...p,
            giftName:`${gifts[randIndex]}`
        })
    })

       setPerson(filterArr);

    }
    const addHandler = ()=>{
       setPerson([...person,{id:new Date().getTime(),personName:value,giftName:""}])
    }
    return ( 
        <div>
            <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" />
            <button onClick={addHandler}>add</button>
            
                <ul>
                    {
                        person.map(({personName,id,giftName})=>(
                            <li key={id}>{personName}-{giftName}</li>
                        ))
                    }
               
                </ul>

            <button onClick={shuffleHandler}>shuffle</button>
            <button onClick={resetHandler}>reset</button>
            <button onClick={assignHandler}>assign</button>            
        </div>

     );
}
 
export default Gift;
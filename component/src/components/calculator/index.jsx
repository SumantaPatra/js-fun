import { useReducer } from 'react'
import './calc.css';

function evaluate(op1,operator,op2){
    if(isNaN(parseFloat(op1)) || isNaN(parseFloat(op2))) return;
    switch(operator){
        case "+":
          return (Number.parseFloat(op1) + Number.parseFloat(op2)).toString();
        case "-":
            return Number.parseFloat(op1) - Number.parseFloat(op2);
        case "*":
            return Number.parseFloat(op1) * Number.parseFloat(op2);
        case "/":
            return Number.parseFloat(op1) * Number.parseFloat(op2);
        default:  
    }

}



function reducer(state,{type,digit}){
    const {currOp,prevOp} = state;
    switch(type){
        case "add-digit":
        if(state.overWrite){
            return {
                ...state,
                overWrite:false,
                currOp:digit
            }
        }
        if(!currOp && !prevOp){
            return {
                ...state,
                currOp:digit,
                prevOp:""
            }
        }

        if(currOp.includes(".") && digit === ".") return {
            ...state
        }

        if(currOp == 0 && digit == 0){
            return {
                ...state
            }
        }


        return {
            ...state,
            currOp:currOp+digit,
        }
        case "add-operation":
          if(!currOp && !prevOp){
            return {
                ...state
            }
          }

          if(!prevOp){
            return {
                ...state,
                operation:digit,
                prevOp: currOp,
                currOp:""
            }
          }

          if(!currOp){
            return {
                ...state,
                operation:digit
            }
          }
          
          return {
            ...state,
            prevOp:evaluate(prevOp,state.operation,currOp),
            operation:digit,
            currOp:""
          }

        case "clear-digit":
            return {
                ...state,
                currOp:"",
                prevOp:"",
                operation:""
            }

        case "cut-digit":
            if(!currOp) return {
                ...state
            }
            return {
                ...state,
                currOp:currOp.slice(0,-1)
            }
        case "evaluate":
            if(!state.operation || !currOp || !prevOp) return {...state}
            return {
                ...state,
                operation:"",
                overWrite:true,
                currOp:evaluate(currOp,state.operation,prevOp),
                prevOp:""
            }
        default:

    }

}
export default function Calculator(){
    const [state,dispatch] = useReducer(reducer,{})




    return <div className="calculator">
       
       <div className='result'>
       <div>{state.prevOp || ""} {state.operation}</div>
       <div>{state.currOp || ""}</div>
       </div>

        <button onClick={()=>dispatch({type:"add-digit",digit:"9"})}>9</button>
        <button onClick={()=>dispatch({type:"add-digit",digit:"8"})}>8</button>
        <button onClick={()=>dispatch({type:"add-digit",digit:"7"})}>7</button>
        <button onClick={()=>dispatch({type:"add-operation",digit:"/"})}>/</button>
        <button onClick={()=>dispatch({type:"add-digit",digit:"6"})}>6</button>
        <button onClick={()=>dispatch({type:"add-digit",digit:"5"})}>5</button>
        <button onClick={()=>dispatch({type:"add-digit",digit:"4"})}>4</button>
        <button onClick={()=>dispatch({type:"add-digit",digit:"."})}>.</button>
        <button onClick={()=>dispatch({type:"add-digit",digit:"3"})}>3</button>
        <button onClick={()=>dispatch({type:"add-digit",digit:"2"})}>2</button>
        <button onClick={()=>dispatch({type:"add-digit",digit:"1"})}>1</button>
        <button onClick={()=>dispatch({type:"add-operation",digit:"+"})}>+</button>
        <button onClick={()=>dispatch({type:"add-operation",digit:"-"})}>-</button>
        <button onClick={()=>dispatch({type:"add-operation",digit:"*"})}>*</button>
        <button onClick={()=>dispatch({type:"add-digit",digit:"0"})}>0</button>
        <button onClick={()=>dispatch({type:"clear-digit",digit:""})}>AC</button>
        <button onClick={()=>dispatch({type:"cut-digit",digit:""})}>CE</button>
        <button onClick={()=>dispatch({type:"evaluate",digit:""})}>=</button>
    </div>
}
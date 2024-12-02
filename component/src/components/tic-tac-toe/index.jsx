import { useState } from "react"
import './index.css'
const arr = Array(9).fill("")
export default function TicTacToe(){
    const [board,setBoard] = useState(arr)
    const [turn,setTurn] = useState('x')
    const checkWinner = ()=>{
        const table = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]];
        for(let i=0; i<table.length; i++){
            const [p1,p2,p3] = table[i];
            if(board[p1] === board[p2] && board[p2] === board[p3] && board[p3] === board[p1]) return board[p1];
        }
        return ""
    }
    const addItem = (index)=>{
      const temp = [...board];
      const player = checkWinner()
      if(player) {
       return
      }

      if(!board.includes("")){
        return
      }
      temp[index] = turn;
      setTurn((prevTurn)=> prevTurn === 'x' ? 'o' : 'x')
      setBoard(temp)
     
    }

    const getMessage = ()=>{
        const p1 = checkWinner();
        if(p1) return `${p1} wins`
        else if(!board.includes("")) return "draw"
       else return `${turn}`
    }

    

    return (
        <div>
         <div className="chess-board">
            {
                board.map((b,index)=>(
                    <button disabled={b !== ""} onClick={()=>addItem(index)} className="chess-btn">{b}</button>
                ))
            }
            {
                getMessage()
            }
            </div>
        </div>
    )
}
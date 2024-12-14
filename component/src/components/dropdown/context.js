import { createContext, useReducer } from "react";

export const AuthContext = createContext();
const authReducer = (state,action)=>{
    const {type} = action;
    switch(type){
        case 'add-cnt':
        return state+1;
     default:
        return state;
    }
}
export default  function AuthProvider({children}){
  const[state,dispatch] = useReducer(authReducer,0);
   return (
    <AuthContext.Provider value={{state,dispatch}}>
        {children}
    </AuthContext.Provider>
   )
}
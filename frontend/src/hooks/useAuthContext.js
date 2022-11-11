import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


export const useAuthContext = () => {

  //this actually allows us to look at the context (state, dispatch) passed 
  //into the .provider component
  const context = useContext(AuthContext)

  if(!context){
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}
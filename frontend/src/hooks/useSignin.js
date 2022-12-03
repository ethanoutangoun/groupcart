import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignin = () => {
  //if in local development go to localhost
  console.log(process.env.NODE_ENV)
  if(process.env.NODE_ENV !== 'development'){
    var backendaddr = "https://groupcart.azurewebsites.net/";
  }else{
    backendaddr = "http://localhost:5001"
  }

  console.log(backendaddr)


  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signin = async (username, password) => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await axios.post(backendaddr + "/login", {username: username, password: password})
      localStorage.setItem("user", JSON.stringify(response))
      dispatch({type: "LOGIN", payload: response})
      return true

    }catch(error){
      alert(error.response.data.error)
      return false
    }

    // await axios
    //   .post("http://localhost:5001/login", {
    //     username: username,
    //     password: password,
    //   })
    //   .then((response) => {
    //     //save the user to local storage
    //     localStorage.setItem("user", JSON.stringify(response));
    //     //updating auth context
    //     dispatch({ type: "LOGIN", payload: response });
    //     setIsLoading(false);
    //     return true;
    //   })
    //   .catch((error) => {
    //     alert(error.response.data.error)
    //     setIsLoading(false);
    //     setError(error);
    //     return false
    //   });
  };

  return { signin, isLoading, error };
};

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useSignup = () => {
    //if in local development go to localhost
    if(process.env.PORT){
      var backendaddr = "https://groupcart.azurewebsites.net/";
    }else{
      backendaddr = "http://localhost:5001"
    }

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (first, last, username, password) => {
    setIsLoading(true);
    setError(null);
    try{
      const response = await axios.post(backendaddr + "/signup", {first: first, last: last, username: username, password: password})
      localStorage.setItem("user", JSON.stringify(response))
      dispatch({type: "LOGIN", payload: response})
      return true

    }catch(error){
      alert(error.response.data.error)
      return false
    }

    // await axios
    //   .post("http://localhost:5001/signup", {
    //     first: first,
    //     last: last,
    //     username: username,
    //     password: password,
    //   })
    //   .then((response) => {
    //     //save the user to local storage
    //     localStorage.setItem("user", JSON.stringify(response));
    //     //updating auth context
    //     dispatch({ type: "LOGIN", payload: response });
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     setIsLoading(false);
    //     setError(error);
    //   });

  };

  return { signup, isLoading, error };
};

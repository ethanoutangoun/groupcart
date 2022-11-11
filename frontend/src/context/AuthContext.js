import { createContext, useReducer, useEffect } from 'react'
import React from 'react'
//this is a way to keep global data, important for when we want to login
//this is an example of global state

export const AuthContext = createContext()


//this is actually what deals with changes to new dispatches
export const authReducer = (state, action) => {
  // three cases, user login and user logout
  switch(action.type) {
    case 'LOGIN':
      return {user: action.payload}
    case 'LOGOUT':
      return {user: null}
    default: 
      return state

  }
}

//children represents the <App /> component that AuthContext provider wraps
export const AuthContextProvider = ({ children }) => {
  //dispatch has arguments action.type (defines what type)
  //  and actions.payload(the data that we pass to payload)
  const [state, dispatch] =  useReducer(authReducer, {
    user:null
  })


  console.log('AuthContext state: ', state)

  //if the user has logged in before log them back in automatically
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      dispatch({type: 'LOGIN', payload: user})
    }
  }, [])
  
  return (
    // adding {state, dispatch} allows all of our children pages to see
    // state and dispatch
    <AuthContext.Provider value = {{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
} 

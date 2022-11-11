import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from 'axios'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const {dispatch} = useAuthContext()

  const signup = async(username, password) => {
    setIsLoading(true)
    setError(null)

    await axios
    .post('http://localhost:5001/signup', {username: username, password: password})
    .then(response => {
      //save the user to local storage
      localStorage.setItem('user', JSON.stringify(response))
      //updating auth context
      dispatch({type: 'LOGIN', payload: response})
      setIsLoading(false)
    })
    .catch(error => {
      setIsLoading(false)
      setError(error)
    })
  }

  return { signup, isLoading, error}
}
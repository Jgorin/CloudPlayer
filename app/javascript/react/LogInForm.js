import React, { useState } from "react"
import { Redirect } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setStatus, setIsLoggedIn } from "./reducers/TopBarSlice"
import { login } from "./fetches/SessionFetches"

const defaultState = {
  email: "",
  password: ""
}

const LogInForm = props => {
  const [formState, setFormState] = useState(defaultState)
  const [user, setUser] = useState(null)
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const dispatch = useDispatch();

  const setState = () => {
    dispatch(setStatus("signUp"))
  }

  const handleStateChange = (event) => {
    setFormState({
      ...formState,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleFormSubmit = async(event) => {
    event.preventDefault()
    const response = await login(formState)
    debugger
    setUser(response.user)
    setShouldRedirect(true)
    dispatch(setIsLoggedIn(true))
  }

  if(shouldRedirect){
    dispatch(setStatus("none"))
    return <Redirect to={`/users/${user.id}`}/>
  }

  return(
    <div className="LoginForm">
      <h2 className="centered">Log In:</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" onChange={handleStateChange} value={formState.email}/>
        </div>
        
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={handleStateChange} value={formState.password}/>
        </div>

        <input type="submit" className="button"/>
      </form>
      <p><a onClick={setState}>Sign Up</a></p>
    </div>
  )
}

export default LogInForm
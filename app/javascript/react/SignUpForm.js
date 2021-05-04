import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setStatus } from "./reducers/TopBarSlice"
import { postUser } from "./fetches/UserFetches"

const defaultState = {
  email: "",
  password: "",
  password_confirmation: ""
}

const SignUpForm = props => {
  const [formState, setFormState] = useState(defaultState)
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const dispatch = useDispatch()

  const setState = () => {
    dispatch(setStatus("login"))
  }

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    const response = await postUser(formState)
    debugger
    // setShouldRedirect(true)
  }

  return(
    <div className="SignUpForm">
      <h2 className="centered">Sign Up:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" onChange={handleChange} value={formState.email}/>
        </div>
        
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={handleChange} value={formState.password}/>
        </div>

        <div>
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input type="password" id="password_confirmation" name="password_confirmation" onChange={handleChange} value={formState.password_confirmation}/>
        </div>

        <input type="submit" className="button"/>
      </form>
      <p><a onClick={setState}>Log In</a></p>
    </div>
  )
}

export default SignUpForm
import React from "react"
import { useDispatch } from "react-redux"
import { setStatus } from "./reducers/TopBarSlice"

const SignUpForm = props => {
  const dispatch = useDispatch()

  const setState = () => {
    dispatch(setStatus("login"))
  }

  return(
    <div className="SignUpForm">
      <h2 className="centered">Sign Up:</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email"/>
        </div>
        
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"/>
        </div>

        <div>
          <label htmlFor="password_check">Confirm Password</label>
          <input type="password" id="password_check" name="password_check"/>
        </div>

        <input type="submit" className="button"/>
      </form>
      <p><a onClick={setState}>Log In</a></p>
    </div>
  )
}

export default SignUpForm
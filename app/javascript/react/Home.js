import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { currentUser } from "./fetches/SessionFetches"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUserState, selectCurrentUser } from "./reducers/CurrentUserInfoSlice"

const Home = (props) => {

  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)

  const fetchCurrentUser = async() => {
    const response = await currentUser()
    if(response != null){
      dispatch(setCurrentUserState(response.user))
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  let greeting = null
  if(user.id != null){
    greeting = <Link to={`/users/${user.id}`} className="white large">{`Welcome back ${user.email}`}</Link>
  }
  
  return(
    <div className="background fullscreen">
      <div className="indexScreen">
        {greeting}
      </div>
    </div>
  )
}

export default Home
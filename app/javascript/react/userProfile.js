import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setUser, setCurrentUser, selectUser, selectCurrentUser } from "./reducers/ProfileSlice"
import { fetchUser } from "./fetches/UserFetches"

const userProfile = props => {
  const user = useSelector(selectUser)
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  const fetchUserWrapper = async() => {
    const parsedResponse = await fetchUser(props.match.params.id)
    dispatch(setUser(parsedResponse.users[0]))
    dispatch(setCurrentUser(parsedResponse.users[1]))
  }

  useEffect(() => {
    fetchUserWrapper()
  }, [])

  return(
    <div>
      <h2>{user.email}</h2>
      {/* friendButton here */}
      <h4>friends:</h4>
      {/* friendList here */}
      <h4>friend requests:</h4>
      {/* friendList here */}
    </div>
  )
}

export default userProfile
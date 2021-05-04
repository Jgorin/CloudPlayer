import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setState, selectUser } from "./reducers/UserInfoSlice"
import { setCurrentUserState, selectCurrentUser } from "./reducers/CurrentUserInfoSlice"
import { fetchUser } from "./fetches/UserFetches"
import FriendsList from "./FriendsList"

const userProfile = props => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const currentUser = useSelector(selectCurrentUser)

  const fetchUserWrapper = async() => {
    const parsedResponse = await fetchUser(props.match.params.id)
    const user1 = parsedResponse.users[0]
    const currentUser1 = parsedResponse.users[1]
    const user1info = {id: user1.id, email: user1.email}
    const currentUser1Info = {id: currentUser1.id, email: currentUser1.email}
    dispatch(setState(user1info))
    dispatch(setCurrentUserState(currentUser1Info))
  }

  useEffect(() => {
    fetchUserWrapper()
  }, [])

  return(
    <div>
      <h2>{user.email}</h2>
      {/* friendButton here */}
      <h4>friends:</h4>
      <FriendsList/>
      <h4>friend requests:</h4>
      {/* friendList here */}
    </div>
  )
}

export default userProfile
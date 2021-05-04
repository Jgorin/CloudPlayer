import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setState, selectUser } from "./reducers/UserInfoSlice"
import { setCurrentUserState, selectCurrentUser } from "./reducers/CurrentUserInfoSlice"
import { setCurrentUserFriendships } from "./reducers/CurrentUserFriendSlice"
import { setCurrentUserFriendRequests } from "./reducers/CurrentUserFriendRequestSlice"
import { setFriendships } from "./reducers/UserFriendSlice"
import { setFriendRequests } from "./reducers/UserFriendRequestSlice"
import { fetchUser } from "./fetches/UserFetches"
import FriendsList from "./FriendsList"
import FriendRequestsList from "./FriendRequestsList"
import RootFetch from "./fetches/RootFetch"

const userProfile = props => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    RootFetch(props.match.params.id, dispatch)
  }, [])

  return(
    <div>
      <h2>{user.email}</h2>
      {/* friendButton here */}
      <h4>friends:</h4>
      <FriendsList/>
      <h4>friend requests:</h4>
      <FriendRequestsList/>
      {/* friendList here */}
    </div>
  )
}

export default userProfile
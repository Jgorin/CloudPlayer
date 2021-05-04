import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "./reducers/UserInfoSlice"
import FriendsList from "./FriendsList"
import FriendRequestsList from "./FriendRequestsList"
import RootFetch from "./fetches/RootFetch"
import ProfileBar from "./ProfileBar"

const userProfile = props => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    RootFetch(props.match.params.id, dispatch)
  }, [])

  return(
    <div className="grid-y">
      <ProfileBar name={user.email}/>
      <h4>friends:</h4>
      <FriendsList/>
      <h4>friend requests:</h4>
      <FriendRequestsList/>
    </div>
  )
}

export default userProfile
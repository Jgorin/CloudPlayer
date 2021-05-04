import React from "react"
import { useSelector } from "react-redux"
import { selectFriendRequests } from "./reducers/UserFriendRequestSlice"
import { selectUser } from "./reducers/UserInfoSlice"
import UserProfileLink from "./UserProfileLink"

const FriendRequestsList = (props) => {
  const friendRequests = useSelector(selectFriendRequests)
  const user = useSelector(selectUser)

  const requestList = friendRequests.map((request) => {
    if(request.sender.id != user.id){
      return(
        <UserProfileLink key={user.id} user={request.sender}/>
      )
    }
  })

  return(
    <ul>
      {requestList}
    </ul>
  )
}

export default FriendRequestsList
import React from "react"
import { useSelector } from "react-redux"
import { selectFriendRequests } from "./reducers/UserFriendRequestSlice"
import { selectUser } from "./reducers/UserInfoSlice"
import { selectCurrentUser } from "./reducers/CurrentUserInfoSlice"
import UserProfileLink from "./UserProfileLink"

const FriendRequestsList = (props) => {
  const friendRequests = useSelector(selectFriendRequests)
  const user = useSelector(selectUser)
  const currentUser = useSelector(selectCurrentUser)

  let requestList
  let requestLabel
  if(currentUser.id == user.id){
    requestList = friendRequests.map((request) => {
      if(request.sender.id != user.id){
        return(
          <UserProfileLink key={user.id} user={request.sender}/>
        )
      }
    })
    requestLabel = <h4>friend requests</h4>
  }

  return(
    <div>
      {requestLabel}
      <ul>
        {requestList}
      </ul>
    </div>
  )
}

export default FriendRequestsList
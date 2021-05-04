import React from "react"
import { selectUser } from "./reducers/UserInfoSlice"
import { selectFriends } from "./reducers/UserFriendSlice"
import { selectCurrentUser } from "./reducers/CurrentUserInfoSlice"
import { useDispatch, useSelector } from "react-redux"
import { selectFriendRequests } from "./reducers/UserFriendRequestSlice"

const FriendButton = (props) => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const currentUser = useSelector(selectCurrentUser)
  const friendRequests = useSelector(selectFriendRequests)
  const friends = useSelector(selectFriends)

  let label
  let action
  if(user.id != null && currentUser.id != null && user.id != currentUser.id){
    if(friendRequests.some(request => request.sender.id == currentUser.id)){
      //cancel friend request
      label = "Cancel Friend Request"
    }
    else if(friendRequests.some(request => request.receiver.id == currentUser.id)){
      //accept friend request
      label = "Accept Friend Request"
    }
    else if(friends.some(friend => friend.id === currentUser.id)){
      //delete friend
      label = "Remove Friend"
    }
    else{
      //send friend request
      label = "Send Friend Request"
    }
  }

  return(
    <h4 className="friendButton">{label}</h4>
  )
}

export default FriendButton
import React from "react"
import { Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "./reducers/UserInfoSlice"
import { addFriendship, selectFriendships } from "./reducers/UserFriendSlice"
import { selectFriendRequests, addFriendRequest, deleteFriendRequest as deleteFriendRequestState } from "./reducers/UserFriendRequestSlice"
import { sendFriendRequest, deleteFriendRequest, acceptFriendRequest } from "./fetches/FriendRequestFetches"
import { deleteFriendship as deleteFriend } from "./fetches/FriendshipFetches"
import { deleteFriendship } from "./reducers/UserFriendSlice"

const FriendButton = (props) => {
  const { otherUserId } = props
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const friendRequests = useSelector(selectFriendRequests)
  const friendships = useSelector(selectFriendships)

  const sendFriendRequestWrapper = async() => {
    const response = await sendFriendRequest(user.id, otherUserId)
    dispatch(addFriendRequest(response.friend_request))
  }

  const cancelFriendRequestWrapper = async() => {
    const response = await deleteFriendRequest(otherUserId, outgoingFriendRequestId)
    dispatch(deleteFriendRequestState(response.friend_request.id))
  }

  const acceptFriendRequestWrapper = async() => {
    const response = await acceptFriendRequest(user.id, incomingFriendRequestId)
    dispatch(addFriendship(response.friendship))
    dispatch(deleteFriendRequestState(incomingFriendRequestId))
  }

  const deleteFriendshipWrapper = async() => {
    const response = await deleteFriend(user.id, friendshipId)
    dispatch(deleteFriendship(response.friendship))
  }

  const deleteFriendRequestWrapper = async() => {
    const response = await deleteFriendRequest(otherUserId, incomingFriendRequestId)
    dispatch(deleteFriendRequestState(response.friend_request.id))
  }

  let label
  let action
  let outgoingFriendRequestId
  let incomingFriendRequestId
  let friendshipId
  let color = "primary"
  let declineButton

  let friendship = friendships.find(friendship => friendship.friend.id == otherUserId)
  if(friendship == null){
    friendship = friendships.find(friendship => friendship.user.id == otherUserId)
  }

  const friendRequestIncoming = friendRequests.find(request => request.sender.id == otherUserId)
  const friendRequestOutgoing = friendRequests.find(request => request.receiver.id == otherUserId)

  if(friendship != null){
    label = "Delete Friend"
    action = deleteFriendshipWrapper
    friendshipId = friendship.id
    color = "secondary"
  }
  else if(friendRequestIncoming != null){
    label = "Accept Friend Request"
    action = acceptFriendRequestWrapper
    incomingFriendRequestId = friendRequestIncoming.id
    color = "primary"
    declineButton = <Button color="secondary" variant="contained" onClick={deleteFriendRequestWrapper}>Decline Friend Request</Button>
  }
  else if(friendRequestOutgoing != null){
    label = "Cancel Friend Request"
    action = cancelFriendRequestWrapper
    outgoingFriendRequestId = friendRequestOutgoing.id
    color = "default"
  }
  else{
    label = "Send Friend Request"
    action = sendFriendRequestWrapper
    color = "primary"
  }

  return(
    <div className="grid-x">
      <Button onClick={action} color={color} variant="contained">{label}</Button>
      {declineButton}
    </div>
  )
}

export default FriendButton
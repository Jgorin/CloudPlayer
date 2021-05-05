import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "./reducers/UserInfoSlice"
import { addFriendship, selectFriendships } from "./reducers/UserFriendSlice"
import { selectFriendRequests, addFriendRequest, deleteFriendRequest } from "./reducers/UserFriendRequestSlice"
import { sendFriendRequest, cancelFriendRequest, acceptFriendRequest } from "./fetches/FriendRequestFetches"
import { deleteFriendship as deleteFriend } from "./fetches/FriendshipFetches"
import { deleteFriendship } from "./reducers/UserFriendSlice"

const FriendButton = (props) => {
  const { otherUser } = props
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const friendRequests = useSelector(selectFriendRequests)
  const friendships = useSelector(selectFriendships)

  const sendFriendRequestWrapper = async() => {
    const response = await sendFriendRequest(user.id, otherUser)
    dispatch(addFriendRequest(response.friend_request))
  }

  const cancelFriendRequestWrapper = async() => {
    const response = await cancelFriendRequest(otherUser, outgoingFriendRequestId)
    dispatch(deleteFriendRequest(response.friend_request.id))
  }

  const acceptFriendRequestWrapper = async() => {
    const response = await acceptFriendRequest(user.id, incomingFriendRequestId)
    dispatch(addFriendship(response.friendship))
    dispatch(deleteFriendRequest(incomingFriendRequestId))
  }

  const deleteFriendshipWrapper = async() => {
    const response = await deleteFriend(user.id, friendshipId)
    dispatch(deleteFriendship(response.friendship))
  }

  let label
  let action
  let outgoingFriendRequestId
  let incomingFriendRequestId
  let friendshipId
  let className = "friendButton"

  let friendship = friendships.find(friendship => friendship.friend.id === otherUser)
  if(friendship === null){
    friendship = friendships.find(friendship => friendship.user.id === otherUser)
  }

  let friendRequestIncoming = friendRequests.find(request => request.sender.id === otherUser)
  let friendRequestOutgoing = friendRequests.find(request => request.receiver.id === otherUser)

  if(friendship != null){
    label = "Delete Friend"
    action = deleteFriendshipWrapper
    friendshipId = friendship.id
    className += " salmon"
  }
  else if(friendRequestIncoming != null){
    label = "Accept Friend Request"
    action = acceptFriendRequestWrapper
    incomingFriendRequestId = friendRequestIncoming.id
    className += " lightColor"
  }
  else if(friendRequestOutgoing != null){
    label = "Cancel Friend Request"
    action = cancelFriendRequestWrapper
    outgoingFriendRequestId = friendRequestOutgoing.id
    className += " grey"
  }
  else{
    label = "Send Friend Request"
    action = sendFriendRequestWrapper
  }

  return(
    <a><p onClick={action} className={className}>{label}</p></a>
  )
}

export default FriendButton
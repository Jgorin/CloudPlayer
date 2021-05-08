import React, { useState } from "react"
import { useSelector } from "react-redux"
import { selectFriendRequests } from "./reducers/UserFriendRequestSlice"
import { selectUser } from "./reducers/UserInfoSlice"
import FriendButton from "./FriendButton"
import UserProfilePhoto from "./UserProfilePhoto"

const FriendRequestsList = (props) => {
  const[isOpen, setIsOpen] = useState(true)
  const friendRequests = useSelector(selectFriendRequests)
  const user = useSelector(selectUser)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  let requestList
  if(isOpen){
    requestList = friendRequests.map((request) => {
      if(request.sender.id != user.id){
        return(
          <li key={request.sender.id}>
            <UserProfilePhoto user={request.sender}/>
            <p>{request.sender.username}</p>
            <FriendButton otherUserId={request.sender.id}/>
          </li>
        )
      }
    })
  }

  return(
    <div className="list">
      <h2 className="underlined">Friend Requests</h2>
      <ul className="list">
        {requestList}
      </ul>
    </div>
  )
}

export default FriendRequestsList
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

  const requestList = friendRequests.map((request) => {
    if(request.sender.id != user.id){
      return(
        <li key={request.sender.id} className="grid-x grid-margin-x callout rounded blue">
          <div className="cell small-1">
            <UserProfilePhoto user={request.sender}/>
          </div>
          <div className="cell small-2">
            <h4>{request.sender.username}</h4>
          </div>
          <div>
            <FriendButton otherUserId={request.sender.id}/>
          </div>
        </li>
      )
    }
  })

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
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { selectFriendRequests } from "./reducers/UserFriendRequestSlice"
import { selectUser } from "./reducers/UserInfoSlice"

const FriendRequestsList = (props) => {
  const[isOpen, setIsOpen] = useState(false)
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
            <p>{request.sender.email}</p>
          </li>
        )
      }
    })
  }

  return(
    <div>
      <a><h4 onClick={toggleOpen}>Friend Requests</h4></a>
      <ul>
        {requestList}
      </ul>
    </div>
  )
}

export default FriendRequestsList
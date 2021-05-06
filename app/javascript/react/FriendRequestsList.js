import React, { useState } from "react"
import { useSelector } from "react-redux"
import { selectFriendRequests } from "./reducers/UserFriendRequestSlice"
import { selectUser } from "./reducers/UserInfoSlice"

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
            <a><p>{request.sender.email}</p></a>
          </li>
        )
      }
    })
  }

  return(
    <div>
      <h4 className="underlined">Friend Requests</h4>
      <ul>
        {requestList}
      </ul>
    </div>
  )
}

export default FriendRequestsList
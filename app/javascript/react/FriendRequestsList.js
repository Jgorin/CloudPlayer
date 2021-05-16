import React, { useState } from "react"
import { List, ListItem } from "@material-ui/core"
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
        <ListItem key={request.sender.id} divider={true}>
            <UserProfilePhoto user={request.sender}/>
            <h4>{request.sender.username}</h4>
            <FriendButton otherUserId={request.sender.id}/>
        </ListItem>
      )
    }
  })

  return(
    <div className="list">
      <h2 className="underlined">Friend Requests</h2>
      <List>
        {requestList}
      </List>
    </div>
  )
}

export default FriendRequestsList
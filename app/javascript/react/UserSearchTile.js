import React from "react"
import FriendButton from "./FriendButton"
import UserProfilePhoto from "./UserProfilePhoto"
import { ListItem } from "@material-ui/core"

const UserSearchTile = (props) => {
  const { result } = props
  
  return(
    <ListItem key={result.id} divider={true}>
      <UserProfilePhoto user={result}/>
      <p>{result.username}</p>
      <FriendButton otherUserId={result.id}/>
    </ListItem>
  )
}

export default UserSearchTile
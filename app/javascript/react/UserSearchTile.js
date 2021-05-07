import React from "react"
import FriendButton from "./FriendButton"
import UserProfilePhoto from "./UserProfilePhoto"

const UserSearchTile = (props) => {
  const { result } = props
  
  return(
    <li key={result.id} className="grid-x callout rounded">
      <UserProfilePhoto user={result}/>
      <p>{result.username}</p>
      <FriendButton otherUserId={result.id}/>
    </li>
  )
}

export default UserSearchTile
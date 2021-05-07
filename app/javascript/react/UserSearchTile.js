import React from "react"
import FriendButton from "./FriendButton"

const UserSearchTile = (props) => {
  const { result } = props
  
  return(
    <li key={result.id} className="grid-x callout rounded">
      <p>{result.username}</p>
      <FriendButton otherUserId={result.id}/>
    </li>
  )
}

export default UserSearchTile
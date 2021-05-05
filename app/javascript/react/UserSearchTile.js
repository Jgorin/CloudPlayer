import React from "react"
import FriendButton from "./FriendButton"

const UserSearchTile = (props) => {
  const { result } = props
  return(
    <li key={result.id} className="grid-x callout rounded">
      <p>{result.email}</p>
      <FriendButton otherUser={result.id}/>
    </li>
  )
}

export default UserSearchTile
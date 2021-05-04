import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const FriendsList = props => {
    

  const friendsList = friends.map((friend) => {
    let text = friend.email
    if(currentUserId !== null && friend.id === currentUserId.id){
      text += " (you)"
    }

    const fetchProfileWrapper = () => {
      fetchProfile(friend.id)
    }

    return(
      <li key={friend.id}>
        <Link to={`/users/${friend.id}`} onClick={fetchProfileWrapper} className="black">{text}</Link>
      </li>
    )
  })

  return(
    <div>
      <ul>
        {friendsList}
      </ul>
    </div>
  )
}

export default FriendsList
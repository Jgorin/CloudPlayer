import React from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const FriendsList = props => {
  const { friendsData, currentUserId, fetchProfile } = props

  const friendsList = friendsData.map((friend) => {

    let text = friend.email
    if(currentUserId != null && friend.id === currentUserId.id){
      text += " (you)"
    }

    const fetchProfileWrapper = () => {
      fetchProfile(friend.id)
    }

    return(
      <li key={friend.id}>
        <Link to={`/users/${friend.id}`} onClick={fetchProfileWrapper}>{text}</Link>
      </li>
    )
  })

  return(
    <div>
      <h4>Friends:</h4>
      <ul>
        {friendsList}
      </ul>
    </div>
  )
}

export default FriendsList
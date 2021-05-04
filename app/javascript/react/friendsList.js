import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectFriends } from "./reducers/UserFriendSlice"
import { fetchUser } from "./fetches/UserFetches"
import { setCurrentUserFriendships } from "./reducers/CurrentUserFriendSlice"
import { setFriendships } from "./reducers/UserFriendSlice"



const FriendsList = props => {
  const friends = useSelector(selectFriends)

  const friendsList = friends.map((friend) => {
    let text = friend.email

    const fetchProfileWrapper = async() => {
      const response = await fetchUser(friend.id)
      debugger
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
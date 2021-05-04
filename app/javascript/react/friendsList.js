import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectFriends } from "./reducers/UserFriendSlice"
import UserProfileLink from "./UserProfileLink"


const FriendsList = props => {
  const dispatch = useDispatch()
  const friends = useSelector(selectFriends)

  const friendsList = friends.map((friend) => {
    return(
      <li key={friend.id}>
        <UserProfileLink user={friend}/>
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
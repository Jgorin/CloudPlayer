import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectFriends } from "./reducers/UserFriendSlice"
import UserProfileLink from "./UserProfileLink"


const FriendsList = props => {
  const dispatch = useDispatch()
  const friends = useSelector(selectFriends)
  const [ show, setShow ] = useState(false)

  let friendsList
  if(show){
    friendsList = friends.map((friend) => {
      return(
        <li key={friend.id}>
          <UserProfileLink user={friend}/>
        </li>
      )
    })
  }

  const toggleShow = () => {
    setShow(!show)
  }

  return(
    <div>
      <a><h4 onClick={toggleShow}>friends</h4></a>
      <ul>
        {friendsList}
      </ul>
    </div>
  )
}

export default FriendsList
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectFriendships } from "./reducers/UserFriendSlice"
import { selectUser } from "./reducers/UserInfoSlice"
import FriendButton from "./FriendButton"
import UserProfilePhoto from "./UserProfilePhoto"


const FriendsList = props => {
  const dispatch = useDispatch()
  const friendships = useSelector(selectFriendships)
  const user = useSelector(selectUser)

  let friendsList
  friendsList = friendships.map((friendship) => {
    
    let friend
    if(friendship.user.id === user.id){
      friend = friendship.friend
    }
    else{
      friend = friendship.user
    }

    return(
      <li key={friend.id} className="grid-x">
        <UserProfilePhoto user={friend}/>
        <h4>{friend.username}</h4>
        <FriendButton otherUserId={friend.id}/>
      </li>
    )
  })

  return(
    <div>
      <h2 className="underlined">Friends</h2>
      <ul>
        {friendsList}
      </ul>
    </div>
  )
}

export default FriendsList
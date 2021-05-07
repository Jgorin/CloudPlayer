import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectFriendships } from "./reducers/UserFriendSlice"
import { selectUser } from "./reducers/UserInfoSlice"
import FriendButton from "./FriendButton"


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
        <p>{friend.username}</p>
        <FriendButton otherUserId={friend.id}/>
      </li>
    )
  })

  return(
    <div>
      <h4 className="underlined">Friends</h4>
      <ul>
        {friendsList}
      </ul>
    </div>
  )
}

export default FriendsList
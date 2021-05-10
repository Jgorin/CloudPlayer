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
      <li key={friend.id} className="grid-x grid-margin-x callout rounded blue">
        <div className="cell small-1">
          <UserProfilePhoto user={friend}/>
        </div>
        <div className="cell small-4">
          <h2>{friend.username}</h2>
        </div>
        <FriendButton otherUserId={friend.id}/>
      </li>
    )
  })

  return(
    <div className="list">
      <h2 className="underlined">Friends</h2>
      <ul className="list">
        {friendsList}
      </ul>
    </div>
  )
}

export default FriendsList

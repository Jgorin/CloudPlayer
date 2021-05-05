import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectFriendships } from "./reducers/UserFriendSlice"
import { selectUser } from "./reducers/UserInfoSlice"


const FriendsList = props => {
  const dispatch = useDispatch()
  const friendships = useSelector(selectFriendships)
  const user = useSelector(selectUser)
  const [ show, setShow ] = useState(false)

  let friendsList
  if(show){
    friendsList = friendships.map((friendship) => {
      
      let friend
      if(friendship.user.id === user.id){
        friend = friendship.friend
      }
      else{
        friend = friendship.user
      }

      return(
        <li key={friend.id}>
          <p>{friend.email}</p>
        </li>
      )
    })
  }

  const toggleShow = () => {
    setShow(!show)
  }

  return(
    <div>
      <a><h4 onClick={toggleShow}>Friends</h4></a>
      <ul>
        {friendsList}
      </ul>
    </div>
  )
}

export default FriendsList
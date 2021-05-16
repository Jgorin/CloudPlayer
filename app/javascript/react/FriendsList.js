import React from "react"
import { List, ListItem } from "@material-ui/core"
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
      <ListItem key={friend.id} divider={true}>
        <UserProfilePhoto user={friend}/>
        <h2>{friend.username}</h2>
        <FriendButton otherUserId={friend.id}/>
      </ListItem>
    )
  })

  return(
    <div className="list">
      <h2 className="underlined">Friends</h2>
      <List>
        {friendsList}
      </List>
    </div>
  )
}

export default FriendsList

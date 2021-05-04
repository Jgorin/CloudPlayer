import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectFriends, setFriendships } from "./reducers/UserFriendSlice"
import { fetchFriends } from "./fetches/FriendshipFetches"
import { fetchUser } from "./fetches/UserFetches"
import { selectUser, setState } from "./reducers/UserInfoSlice"


const FriendsList = props => {
  const dispatch = useDispatch()
  const friends = useSelector(selectFriends)
  const user = useSelector(selectUser)

  const fetchFriendsWrapper = async() => {
    if(user.id != null){
      const response = await fetchFriends(user.id)
      dispatch(setFriendships(response.users))
    }
  }

  useEffect(()=>{
    fetchFriendsWrapper()
  },[user])

  const friendsList = friends.map((friend) => {
    let text = friend.email

    const fetchProfileWrapper = async() => {
      const response = await fetchUser(friend.id)
      dispatch(setState(response.users[0]))
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
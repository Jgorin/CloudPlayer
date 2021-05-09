import React, { useEffect } from "react"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "./reducers/UserInfoSlice"
import { selectFriendRequests } from "./reducers/UserFriendRequestSlice"
import { selectPartyInvites } from "./reducers/UserPartyInviteSlice"
import SearchBar from "./SearchBar"
import RootFetch from "./fetches/RootFetch"
import UserProfilePhoto from "./UserProfilePhoto"

const UserTopBar = (props) => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const partyInvites = useSelector(selectPartyInvites)
  const partyInvitesLength = partyInvites.length
  const friendRequests = useSelector(selectFriendRequests)
  const incomingFriendRequestsLength = friendRequests.filter(request => request.receiver.id == user.id).length

  let friendRequestLabel = "Friend Requests"
  let partyInvitesLabel = "Party Invites"
  if(incomingFriendRequestsLength > 0){
    friendRequestLabel += ` (${incomingFriendRequestsLength})`
  }
  if(partyInvitesLength > 0){
    partyInvitesLabel += ` (${partyInvitesLength})`
  }

  useEffect(() => {
    RootFetch(dispatch)
  }, [])

  return(
    <div className="userTopBar menu">
      <UserProfilePhoto user={user}/>
      <h2>{user.username}</h2>
      <Link to={`/users/${user.id}/friends`} className="selectable"><h4>Friends</h4></Link>
      <Link to={`/users/${user.id}/friend_requests`} className="selectable"><h4>{friendRequestLabel}</h4></Link>
      <Link to={`/users/${user.id}/party_invites`} className="selectable"><h4>{partyInvitesLabel}</h4></Link>
      <Link to={`/users/${user.id}/parties`} className="selectable"><h4>Parties</h4></Link>
      <SearchBar/>
      <Link to={`/users/${user.id}/parties/new`} className="button large text-center vertical-center">New Party</Link>
    </div>
  )
}

export default UserTopBar
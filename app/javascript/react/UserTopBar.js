import React, { useEffect } from "react"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "./reducers/UserInfoSlice"
import { selectFriendRequests } from "./reducers/UserFriendRequestSlice"
import { selectPartyInvites } from "./reducers/UserPartyInviteSlice"
import SearchBar from "./SearchBar"
import RootFetch from "./fetches/RootFetch"

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
  debugger
  let profilePhoto
  if(user.profilePhoto){
    profilePhoto = <img src={user.profilePhoto.url} className="profile-photo"/>
  }


  useEffect(() => {
    RootFetch(dispatch)
  }, [])

  return(
    <div className="userTopBar menu">
      {profilePhoto}
      <h2>{user.username}</h2>
      <Link to={`/users/${user.id}/friends`}>Friends</Link>
      <Link to={`/users/${user.id}/friend_requests`}>{friendRequestLabel}</Link>
      <Link to={`/users/${user.id}/party_invites`}>{partyInvitesLabel}</Link>
      <Link to={`/users/${user.id}/parties`}>Parties</Link>
      <SearchBar/>
      <Link to={`/users/${user.id}/parties/new`} className="button large text-center">New Party</Link>
    </div>
  )
}

export default UserTopBar
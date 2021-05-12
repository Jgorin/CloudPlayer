import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "./reducers/UserInfoSlice"
import { selectFriendRequests } from "./reducers/UserFriendRequestSlice"
import { selectPlaylistInvites } from "./reducers/UserPlaylistInviteSlice"
import SearchBar from "./SearchBar"
import RootFetch from "./fetches/RootFetch"
import UserProfilePhoto from "./UserProfilePhoto"

const UserTopBar = (props) => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const playlistInvites = useSelector(selectPlaylistInvites)
  const playlistInvitesLength = playlistInvites.length
  const friendRequests = useSelector(selectFriendRequests)
  const incomingFriendRequestsLength = friendRequests.filter(request => request.receiver.id == user.id).length

  let friendRequestLabel = "Friend Requests"
  let playlistInvitesLabel = "Playlist Invites"
  if(incomingFriendRequestsLength > 0){
    friendRequestLabel += ` (${incomingFriendRequestsLength})`
  }
  if(playlistInvitesLength > 0){
    playlistInvitesLabel += ` (${playlistInvitesLength})`
  }

  useEffect(() => {
    RootFetch(dispatch)
  }, [])

  return(
    <div className="userTopBar menu">
      <UserProfilePhoto user={user}/>
      <h2>{user.username}</h2>
      <NavLink to={`/users/${user.id}/friends`} className="selectable"><h4>Friends</h4></NavLink>
      <NavLink to={`/users/${user.id}/friend_requests`} className="selectable"><h4>{friendRequestLabel}</h4></NavLink>
      <NavLink to={`/users/${user.id}/playlist_invites`} className="selectable"><h4>{playlistInvitesLabel}</h4></NavLink>
      <NavLink to={`/users/${user.id}/playlists`} className="selectable"><h4>Playlists</h4></NavLink>
      <SearchBar/>
      <NavLink to={`/users/${user.id}/playlists/new`} className="button large text-center vertical-center">New Playlist</NavLink>
    </div>
  )
}

export default UserTopBar
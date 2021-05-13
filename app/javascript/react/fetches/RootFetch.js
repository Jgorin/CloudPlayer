import { fetchUser } from "./UserFetches"
import { setUser } from "../reducers/UserInfoSlice"
import { setFriendships } from "../reducers/UserFriendSlice"
import { setFriendRequests } from "../reducers/UserFriendRequestSlice"
import { setInvites } from "../reducers/UserPlaylistInviteSlice"
import { setPlaylists } from "../reducers/UserPlaylistSlice"


const RootFetch = async(dispatch) => {
  const parsedResponse = await fetchUser()
  const user = parsedResponse.user
  const info = {id: user.id, email: user.email, username: user.username, profilePhoto: user.profile_photo, provider: user.provider}
  dispatch(setUser(info))
  dispatch(setFriendships(user.friendships))
  dispatch(setFriendRequests(user.friend_requests))
  dispatch(setInvites(user.playlist_invites))
  dispatch(setPlaylists(user.playlists))
}

export default RootFetch
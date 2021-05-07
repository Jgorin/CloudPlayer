import { fetchUser } from "./UserFetches"
import { setUser } from "../reducers/UserInfoSlice"
import { setFriendships } from "../reducers/UserFriendSlice"
import { setFriendRequests } from "../reducers/UserFriendRequestSlice"
import { setInvites } from "../reducers/UserPartyInviteSlice"
import { setParties } from "../reducers/UserPartySlice"


const RootFetch = async(dispatch) => {
  const parsedResponse = await fetchUser()
  debugger
  const user = parsedResponse.user
  const info = {id: user.id, email: user.email, username: user.username, profilePhoto: user.profile_photo}
  dispatch(setUser(info))
  dispatch(setFriendships(user.friendships))
  dispatch(setFriendRequests(user.friend_requests))
  dispatch(setInvites(user.party_invites))
  dispatch(setParties(user.parties))
}

export default RootFetch
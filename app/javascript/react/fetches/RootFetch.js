import { fetchUser } from "./UserFetches"
import { setUser } from "../reducers/UserInfoSlice"
import { setFriendships } from "../reducers/UserFriendSlice"
import { setFriendRequests } from "../reducers/UserFriendRequestSlice"


const RootFetch = async(dispatch) => {
  const parsedResponse = await fetchUser()
  const user = parsedResponse.user
  const info = {id: user.id, email: user.email}
  dispatch(setUser(info))
  dispatch(setFriendships(user.friendships))
  dispatch(setFriendRequests(user.friend_requests))
}

export default RootFetch
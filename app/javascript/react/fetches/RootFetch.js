import { fetchUser } from "./UserFetches"
import { useDispatch } from "react-redux"
import { setState } from "../reducers/UserInfoSlice"
import { setCurrentUserState } from "../reducers/CurrentUserInfoSlice"
import { setCurrentUserFriendships } from "../reducers/CurrentUserFriendSlice"
import { setCurrentUserFriendRequests } from "../reducers/CurrentUserFriendRequestSlice"
import { setFriendships } from "../reducers/UserFriendSlice"
import { setFriendRequests } from "../reducers/UserFriendRequestSlice"


const RootFetch = async(id, dispatch) => {
  const parsedResponse = await fetchUser(id)
  const user1 = parsedResponse.users[0]
  const currentUser1 = parsedResponse.users[1]
  const user1info = {id: user1.id, email: user1.email}
  const currentUser1Info = {id: currentUser1.id, email: currentUser1.email}
  dispatch(setState(user1info))
  dispatch(setFriendships(user1.friends))
  dispatch(setFriendRequests(user1.friend_requests))
  dispatch(setCurrentUserState(currentUser1Info))
  dispatch(setCurrentUserFriendships(currentUser1.friends))
  dispatch(setCurrentUserFriendRequests(currentUser1.friend_requests))
}

export default RootFetch
import { combineReducers } from "redux"
import UserInfoSlice from "./UserInfoSlice"
import UserFriendSlice from "./UserFriendSlice"
import UserFriendRequestSlice from "./UserFriendRequestSlice"


const RootSlice = combineReducers({
  info: UserInfoSlice,
  friendships: UserFriendSlice,
  friendRequests: UserFriendRequestSlice
})

export default RootSlice
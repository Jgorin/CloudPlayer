import { combineReducers } from "redux"
import UserInfoSlice from "./UserInfoSlice"
import UserFriendSlice from "./UserFriendSlice"
import UserFriendRequestSlice from "./UserFriendRequestSlice"
import CurrentUserInfoSlice from "./CurrentUserInfoSlice"


const RootSlice = combineReducers({
  user: combineReducers({
    info: UserInfoSlice,
    friends: UserFriendSlice,
    friendRequests: UserFriendRequestSlice
  }),
  currentUser: CurrentUserInfoSlice
})

export default RootSlice
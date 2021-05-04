import { combineReducers } from "redux"
import TopBarSlice from "./TopBarSlice"
import UserInfoSlice from "./UserInfoSlice"
import UserFriendSlice from "./UserFriendSlice"
import UserFriendRequestSlice from "./UserFriendRequestSlice"
import CurrentUserInfoSlice from "./CurrentUserInfoSlice"
import CurrentUserFriendSlice from "./CurrentUserFriendSlice"
import CurrentUserFriendRequestSlice from "./CurrentUserFriendRequestSlice"

const RootSlice = combineReducers({
  user: combineReducers({
    info: UserInfoSlice,
    friends: UserFriendSlice,
    friendRequests: UserFriendRequestSlice
  }),
  currentUser: combineReducers({
    info: CurrentUserInfoSlice,
    friends: CurrentUserFriendSlice,
    friendRequests: CurrentUserFriendRequestSlice
  }),
  topbar: TopBarSlice
})

export default RootSlice
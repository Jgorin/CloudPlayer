import { combineReducers } from "redux"
import UserInfoSlice from "./UserInfoSlice"
import UserFriendSlice from "./UserFriendSlice"
import UserFriendRequestSlice from "./UserFriendRequestSlice"
import UserPartySlice from "./UserPartySlice"
import UserPartyInviteSlice from "./UserPartyInviteSlice"
import InvitationFormSlice from "./InvitationFormSlice"
import PartyRoomInfoSlice from "./PartyRoomInfoSlice"
import SongSearchFormSlice from "./SongSearchFormSlice"


const RootSlice = combineReducers({
  info: UserInfoSlice,
  friendships: UserFriendSlice,
  friendRequests: UserFriendRequestSlice,
  partyInvites: UserPartyInviteSlice,
  parties: UserPartySlice,
  invitationForm: InvitationFormSlice,
  partyRoomInfo: PartyRoomInfoSlice,
  songSearchForm: SongSearchFormSlice
})

export default RootSlice
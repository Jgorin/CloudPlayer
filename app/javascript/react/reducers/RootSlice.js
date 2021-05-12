import { combineReducers } from "redux"
import UserInfoSlice from "./UserInfoSlice"
import UserFriendSlice from "./UserFriendSlice"
import UserFriendRequestSlice from "./UserFriendRequestSlice"
import UserPlaylistSlice from "./UserPlaylistSlice"
import UserPlaylistInviteSlice from "./UserPlaylistInviteSlice"
import InvitationFormSlice from "./InvitationFormSlice"
import SongSearchFormSlice from "./SongSearchFormSlice"
import SubmissionFormSlice from "./SubmissionFormSlice"


const RootSlice = combineReducers({
  info: UserInfoSlice,
  friendships: UserFriendSlice,
  friendRequests: UserFriendRequestSlice,
  playlistInvites: UserPlaylistInviteSlice,
  playlists: UserPlaylistSlice,
  invitationForm: InvitationFormSlice,
  songSearchForm: SongSearchFormSlice,
  submissionForm: SubmissionFormSlice
})

export default RootSlice
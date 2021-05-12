import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const UserPlaylistInviteSlice = createSlice({
  name: "userPlaylistInvites",
  initialState,
  reducers: {
    addInvite(state, action){
      state.push(action.payload)
    },
    removeInvite(state, action){
      return state.filter(invite => invite.id != action.payload)
    },
    setInvites(state, action){
      return action.payload
    }
  }
})

export const selectPlaylistInvites = (state) => { return state.playlistInvites }

export const { addInvite, setInvites, removeInvite } = UserPlaylistInviteSlice.actions
export default UserPlaylistInviteSlice.reducer
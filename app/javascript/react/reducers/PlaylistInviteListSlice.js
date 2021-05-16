import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedInvite: null
}

const PlaylistInviteListSlice = createSlice({
  name: "playlistInviteList",
  initialState,
  reducers: {
    setSelectedInvite(state, action){
      state.selectedInvite = action.payload
    }
  }
})

export const selectSelectedInvite = (state) => { return state.playlistInviteList.selectedInvite }


export const { setSelectedInvite } = PlaylistInviteListSlice.actions
export default PlaylistInviteListSlice.reducer
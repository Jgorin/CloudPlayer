import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedPlaylist: {id: null},
}

const PlaylistScreenSlice = createSlice({
  name: "playlistScreen",
  initialState,
  reducers: {
    setSelectedPlaylist(state, action) {
      state.selectedPlaylist = action.payload
    }
  }
})

export const selectSelectedPlaylist = (state) => { return state.playlistScreen.selectedPlaylist }
export const selectSelectedId = (state) => { 
  return state.playlistScreen.selectedPlaylist.id 
}

export const { setSelectedPlaylist } = PlaylistScreenSlice.actions
export default PlaylistScreenSlice.reducer
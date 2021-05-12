import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const UserPlaylistSlice = createSlice({
  name: "userPlaylistMemberships",
  initialState,
  reducers: {
    addPlaylist(state, action){
      state.push(action.payload)
    },
    setPlaylists(state, action){
      return action.payload
    }
  }
})

export const selectPlaylists = (state) => { return state.playlists }

export const { addPlaylist, setPlaylists } = UserPlaylistSlice.actions
export default UserPlaylistSlice.reducer
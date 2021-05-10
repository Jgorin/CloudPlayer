import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  title: "",
  party_invites: [],
  users: [],
  songs: []
}

const PartyRoomInfoSlice = createSlice({
  name: "partyInfo",
  initialState,
  reducers: {
    setState(state, action){
      return action.payload
    },
    removeSong(state, action){
      state.songs = state.songs.filter(song => song.id != action.payload)
    },
    addSong(state, action){
      state.songs.push(action.payload)
    }
  }
})

export const selectParty = (state) => { return state.partyRoomInfo }
export const selectSongs = (state) => { return state.partyRoomInfo.songs }

export const { setState, removeSong, addSong } = PartyRoomInfoSlice.actions
export default PartyRoomInfoSlice.reducer
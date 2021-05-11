import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  title: "",
  token: "",
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
    setPartyInfo(state, action){
      state.id = action.payload.id
      state.title = action.payload.title
      state.party_invites = action.payload.party_invites
      state.users = action.payload.users
    },
    removeSong(state, action){
      state.songs = state.songs.filter(song => song.id != action.payload)
    },
    setSongs(state, action){
      state.songs = action.payload
    },
    addSong(state, action){
      state.songs.push(action.payload)
    }
  }
})

export const selectParty = (state) => { return state.partyRoomInfo }
export const selectSongs = (state) => { return state.partyRoomInfo.songs }
export const selectToken = (state) => { return state.partyRoomInfo.token }

export const { setState, removeSong, addSong, setSongs, setPartyInfo } = PartyRoomInfoSlice.actions
export default PartyRoomInfoSlice.reducer
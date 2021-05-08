import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  party_invites: [],
  title: "",
  users: []
}

const PartyRoomInfoSlice = createSlice({
  name: "partyInfo",
  initialState,
  reducers: {
    setState(state, action){
      return action.payload
    }
  }
})

export const selectParty = (state) => { return state.partyRoomInfo }

export const { setState } = PartyRoomInfoSlice.actions
export default PartyRoomInfoSlice.reducer
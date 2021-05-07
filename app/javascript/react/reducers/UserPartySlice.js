import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const UserPartySlice = createSlice({
  name: "userPartyMemberships",
  initialState,
  reducers: {
    addParty(state, action){
      state.push(action.payload)
    },
    setParties(state, action){
      return action.payload
    }
  }
})

export const selectParties = (state) => { return state.parties }

export const { addParty, setParties } = UserPartySlice.actions
export default UserPartySlice.reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const UserPartyInviteSlice = createSlice({
  name: "userPartyInvites",
  initialState,
  reducers: {
    addInvite(state, action){
      state.push(action.payload)
    },
    setInvites(state, action){
      return action.payload
    }
  }
})

export const selectPartyInvites = (state) => { return state.partyInvites }

export const { addInvite, setInvites } = UserPartyInviteSlice.actions
export default UserPartyInviteSlice.reducer
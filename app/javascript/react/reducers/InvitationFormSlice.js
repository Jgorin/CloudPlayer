import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  invites: [],
  selectedTile: null
}

const InvitationFormSlice = createSlice({
  name: "invitationForm",
  initialState,
  reducers: {
    addUser(state, action){
      state.invites.push(action.payload)
    },
    removeUser(state, action){
      return{
        invites: state.invites.filter(user => user.id !== action.payload.id),
        selectedTile: state.selectedTile
      }
    },
    setUser(state, action){
      state.invites[action.payload.index] = action.payload.value
    }
  }
})

export const selectInvitations = (state) => { return state.invitationForm.invites }

export const { addUser, setUser, removeUser } = InvitationFormSlice.actions
export default InvitationFormSlice.reducer
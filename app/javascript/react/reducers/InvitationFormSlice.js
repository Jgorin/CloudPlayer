import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  invites: [],
  title: ""
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
    setInvites(state, action){
      state.invites = action.payload
    },
    setTitle(state, action){
      state.title = action.payload
    }
  }
})

export const selectInvitations = (state) => { return state.invitationForm.invites }
export const selectForm = (state) => { return state.invitationForm }

export const { addUser, removeUser, setTitle, setInvites } = InvitationFormSlice.actions
export default InvitationFormSlice.reducer
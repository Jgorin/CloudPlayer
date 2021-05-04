import { createSlice } from '@reduxjs/toolkit'

const initialState = { id: null, email: "" }

const CurrentUserInfoSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUserId(state, action){
      state.id = action.payload
    },
    setCurrentUserEmail(state, action){
      state.email = action.payload
    },
    setCurrentUserState(state, action){
      state.id = action.payload.id
      state.email = action.payload.email
    }
  }
})

export const selectCurrentUser = (state) => {return state.currentUser.info}

export const { setCurrentUserId, setCurrentUserEmail, setCurrentUserState } = CurrentUserInfoSlice.actions 
export default CurrentUserInfoSlice.reducer
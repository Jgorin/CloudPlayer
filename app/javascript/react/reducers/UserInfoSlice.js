import { createSlice } from '@reduxjs/toolkit'

const initialState = { id: null, email: "" }

const UserInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId(state, action){
      state.id = action.payload
    },
    setEmail(state, action){
      state.email = action.payload
    },
    setState(state, action){
      state.id = action.payload.id
      state.email = action.payload.email
    }
  }
})

export const selectUser = (state) => {return state.user.info}

export const { setId, setEmail, setState } = UserInfoSlice.actions 
export default UserInfoSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = { id: null, email: "", profilePhoto: null }

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
    setUser(state, action){
      state.id = action.payload.id
      state.email = action.payload.email
      state.username = action.payload.username
      state.profilePhoto = action.payload.profilePhoto
      state.provider = action.payload.provider
    }
  }
})

export const selectUser = (state) => {return state.info}

export const { setId, setEmail, setUser } = UserInfoSlice.actions 
export default UserInfoSlice.reducer
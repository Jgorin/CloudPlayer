import { createSlice } from '@reduxjs/toolkit'

const initialState = { id: null, email: "" }

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setId(state, action){
      state.id = action.payload
    },
    setEmail(state, action){
      state.email = action.payload
    }
  }
})

export const { setId, setEmail } = userSlice.actions 
import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    addFriend(state, action){
      state = state.push(action.payload)
    },
    deleteFriend(state, action){
      //do stuff
    }
  }
})

export const { addFriend, deleteFriend } = friendsSlice.actions
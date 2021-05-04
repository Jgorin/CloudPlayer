import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const CurrentUserFriendSlice = createSlice({
  name: "currentUserFriends",
  initialState,
  reducers: {
    addCurrentUserFriendship(state, action){
      state.push(action.payload)
    },
    deleteCurrentUserFriendship(state, action){
      state.filter(friendship => friendship.id == action.payload.id)
    },
    setCurrentUserFriendships(state, action){
      state = action.payload
    }
  }
})

export const { addCurrentUserFriendship, deleteCurrentUserFriendship, setCurrentUserFriendships } = CurrentUserFriendSlice.actions
export default CurrentUserFriendSlice.reducer
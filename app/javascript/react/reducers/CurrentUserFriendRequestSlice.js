import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const CurrentUserFriendRequestSlice = createSlice({
  name: "currentUserFriendRequests",
  initialState,
  reducers: {
    addCurrentUserFriendRequest(state, action){
      state.push(action.payload)
    },
    deleteCurrentUserFriendRequest(state, action){
      state.filter(friendRequest => friend.id == action.payload.id)
    },
    setCurrentUserFriendRequests(state, action){
      state = action.payload
    }
  }
})

export const { addCurrentUserFriendRequest, deleteCurrentUserFriendRequest, setCurrentUserFriendRequests } = CurrentUserFriendRequestSlice.actions
export default CurrentUserFriendRequestSlice.reducer
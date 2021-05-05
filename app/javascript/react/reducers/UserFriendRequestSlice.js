import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const UserFriendRequestSlice = createSlice({
  name: "userFriendRequests",
  initialState,
  reducers: {
    addFriendRequest(state, action){
      state.push(action.payload)
    },
    deleteFriendRequest(state, action){
      return state.filter(request => request.id !== action.payload)
    },
    setFriendRequests(state, action){
      return action.payload
    }
  }
})

export const selectFriendRequests = (state) => { return state.friendRequests }

export const { addFriendRequest, deleteFriendRequest, setFriendRequests } = UserFriendRequestSlice.actions
export default UserFriendRequestSlice.reducer
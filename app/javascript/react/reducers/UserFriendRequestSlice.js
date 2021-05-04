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
      state.filter(friendRequest => friend.id == action.payload.id)
    },
    setFriendRequests(state, action){
      state = action.payload
    }
  }
})

export const { addFriend, deleteFriend, setFriendRequests } = UserFriendRequestSlice.actions
export default UserFriendRequestSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const UserFriendSlice = createSlice({
  name: "userFriends",
  initialState,
  reducers: {
    addFriendship(state, action){
      state.push(action.payload)
    },
    deleteFriendship(state, action){
      return state.filter(friendship => friendship.id !== action.payload.id)
    },
    setFriendships(state, action){
      return action.payload
    }
  }
})

export const selectFriendships = (state) => {return state.friendships}

export const { addFriendship, deleteFriendship, setFriendships } = UserFriendSlice.actions
export default UserFriendSlice.reducer
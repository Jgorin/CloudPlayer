import { createSlice } from '@reduxjs/toolkit'

const initialProfile = {
  id: null,
  email: "",
  friends: [],
  friend_requests: []
}

const initialState = {user: initialProfile, currentUser: initialProfile}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUsers(state, action){
      state = action.payload
    },
    setUser(state, action){
      state.user = action.payload
    },
    setUserId(state, action){
      state.user.id = action.payload
    },
    setUserEmail(state, action){
      state.user.email = action.payload
    },
    addUserFriend(state, action){
      state.user.friends.push(action.payload)
    },
    addUserFriendRequest(state, action){
      state.user.friend_requests.push(action.payload)
    },
    setCurrentUser(state, action){
      state.currentUser = action.payload
    },
    setCurrentUserId(state, action){
      state.currentUser.id = action.payload
    },
    setCurrentUserEmail(state, action){
      state.currentUser.email = action.payload
    },
    addCurrentUserFriend(state, action){
      state.currentUser.friends.push(action.payload)
    },
    addCurrentUserFriendRequest(state, action){
      state.currentUser.friend_requests.push(action.payload)
    }
  }
})

export const selectUser = (state) => {
  return {id: state.user.id, email: state.user.email}
}

export const selectCurrentUser = (state) => {
  return {id: state.currentUser.id, email: state.currentUser.email}
}

export const { setUsers, setUser, setUserId, setUserEmail, 
              addUserFriend, addUserFriendRequest, setCurrentUser, 
              setCurrentUserId, setCurrentUserEmail, addCurrentUserFriend, 
              addCurrentUserFriendRequest } = profileSlice.actions
export default profileSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: "none",
  isLoggedIn: false
}

const TopBarSlice = createSlice({
  name: "topbar",
  initialState,
  reducers: {
    setStatus(state, action){
      state.status = action.payload
    },
    setIsLoggedIn(state, action){
      state.isLoggedIn = action.payload
    }
  }
})

export const selectStatus = (state) => {return state.status}
export const selectIsLoggedIn = (state) => {return state.isLoggedIn}

export const { setStatus, setIsLoggedIn } = TopBarSlice.actions;
export default TopBarSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

const initialState = "none"

const TopBarSlice = createSlice({
  name: "topbar",
  initialState,
  reducers: {
    setStatus(state, action){
      return action.payload
    }
  }
})

export const selectStatus = (state) => {return state.topbar}

export const { setStatus } = TopBarSlice.actions;
export default TopBarSlice.reducer;
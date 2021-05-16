import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tabValue: 0,
  newPlaylistModalOpen: false
}

const TopBarSlice = createSlice({
  name: "topbar",
  initialState,
  reducers: {
    setTabValue(state, action) {
      state.tabValue = action.payload
    },
    setPlaylistModalOpen(state, action){
      state.newPlaylistModalOpen = action.payload
    }
  }
})

export const selectValue = (state) => { return state.topBar }

export const { setTabValue, setPlaylistModalOpen } = TopBarSlice.actions
export default TopBarSlice.reducer
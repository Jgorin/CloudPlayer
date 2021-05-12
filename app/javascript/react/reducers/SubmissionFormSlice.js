import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const SubmissionFormSlice = createSlice({
  name: "submissionForm",
  initialState,
  reducers: {
    addSong(state, action){
      state.push(action.payload)
    },
    deleteSong(state, action){
      state.splice(action.payload, 1)
    }
  }
})

export const selectSongs = (state) => { return state.submissionForm }

export const { addSong, deleteSong } = SubmissionFormSlice.actions
export default SubmissionFormSlice.reducer
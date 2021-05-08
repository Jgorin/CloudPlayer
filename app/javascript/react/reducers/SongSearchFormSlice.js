import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: "",
  results: []
}

const SongSearchFormSlice = createSlice({
  name: "songSearchForm",
  initialState,
  reducers: {
    setQuery(state, action){
      state.query = action.payload
    },
    setResults(state, action){
      state.results = action.payload
    }
  }
})

export const selectQuery = (state) => { return state.songSearchForm.query }
export const selectResults = (state) => { return state.songSearchForm.results }

export const { setQuery, setResults } = SongSearchFormSlice.actions
export default SongSearchFormSlice.reducer
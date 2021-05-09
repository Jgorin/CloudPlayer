import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setQuery, selectQuery, setResults } from "./reducers/SongSearchFormSlice"
import { searchSongs } from "./fetches/SongFetches"
import SongSearchResults from "./SongSearchResults"

const SongSearchBar = (props) => {
  const dispatch = useDispatch()
  const query = useSelector(selectQuery)
  
  const handleChange = async(event) => {
    dispatch(setQuery(event.currentTarget.value))
    if(event.currentTarget.value.length > 0){
      const response = await searchSongs(event.currentTarget.value)
      dispatch(setResults(response.tracks.items))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return(
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={query} className="rounded"/>
        <SongSearchResults/>
      </form>
    </div>
  )
}

export default SongSearchBar
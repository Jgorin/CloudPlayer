import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setQuery, selectQuery, setResults } from "./reducers/SongSearchFormSlice"
import { searchSongs } from "./fetches/SongFetches"
import SongSearchResults from "./SongSearchResults"

const SongSearchBar = (props) => {
  const dispatch = useDispatch()
  const query = useSelector(selectQuery)
  
  const handleChange = (event) => {
    dispatch(setQuery(event.currentTarget.value))
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    if(query.length > 0){
      const response = await searchSongs(query)
      dispatch(setResults(response.tracks.items))
    }
  }

  return(
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Hit enter to search:</label>
        <input type="text" onChange={handleChange} name="search" value={query} className="rounded"/>
        <SongSearchResults/>
      </form>
    </div>
  )
}

export default SongSearchBar
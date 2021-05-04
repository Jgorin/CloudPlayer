import React, { useState, useEffect } from "react"
import { searchUsers } from "./fetches/UserFetches"
import SearchResults from "./SearchResults"

const initialState = {
  query: "",
  results: []
}

const SearchBar = (props) => {
  const [state, setState] = useState(initialState)

  const searchUserWrapper = async() => {
    const response = await searchUsers(state.query)
  }

  const handleChange = async(event) => {
    const query = event.currentTarget.value
    if(query == ""){
      setState({
        query: query,
        results: []
      })
    }
    else{
      const response = await searchUsers(query)
      setState({
        query: query,
        results: response.users
      })
    }
  }

  return(
    <form>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" name="search" onChange={handleChange} value={state.query}/>
      <SearchResults results={state.results}/>
    </form>
  )
}

export default SearchBar
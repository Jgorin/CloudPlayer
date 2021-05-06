import React, { useState } from "react"
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

  const handleOnSubmit = (event) => {
    event.preventDefault()
    setState({
      ...state,
      ["query"]: ""
    })
  }

  return(
    <div>
      <form onSubmit={handleOnSubmit} autoComplete="off">
        <label htmlFor="search" className="text-left">Search Users:</label>
        <input type="text" id="search" name="search" onChange={handleChange} value={state.query} className="searchBar rounded"/>
        <SearchResults results={state.results}/>
      </form>
    </div>
  )
}

export default SearchBar
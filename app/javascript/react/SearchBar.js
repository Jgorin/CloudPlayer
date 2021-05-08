import React, { useState } from "react"
import { searchUsers } from "./fetches/UserFetches"
import SearchResults from "./SearchResults"

const initialState = {
  query: "",
  results: []
}

const SearchBar = (props) => {
  const [state, setState] = useState(initialState)

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
      ["results"]: [],
      ["query"]: ""
    })
  }

  return(
    <div className="searchBar">
      <form onSubmit={handleOnSubmit} autoComplete="off">
        <label htmlFor="search" className="text-left">Search Users:</label>
        <input type="text" id="search" name="search" onChange={handleChange} value={state.query} className="rounded"/>
        <div className="searchValues">
          <SearchResults results={state.results}/>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
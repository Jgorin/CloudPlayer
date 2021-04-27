import React from "react"
import UserTile from "../userTile"

const SearchResults = props => {
  const { results, setResults, currentUser, setCurrentUser, fetchProfile } = props

  const resultsList = results.map((result) => {

    const fetchProfileWrapper = () => {
      fetchProfile(result.id)
      setResults([])
    }

    return(
      <UserTile 
        key={result.id}
        result={result} 
        fetchProfileWrapper={fetchProfileWrapper} 
        currentUser={currentUser} 
        setCurrentUser={setCurrentUser}
      />
    )
  })

  return(
    <div>
      <h4>{results.length > 0 ? "Results:" : null}</h4>
      <ul>
        {resultsList}
      </ul>
    </div>
  )
}

export default SearchResults
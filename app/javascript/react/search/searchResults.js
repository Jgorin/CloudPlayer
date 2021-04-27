import React from "react"
import { Link } from "react-router-dom"
import FriendButton from "../friendButton"

const SearchResults = props => {
  const { results, setResults, currentUser, setCurrentUser, fetchProfile } = props

  const resultsList = results.map((result) => {

    const fetchProfileWrapper = () => {
      fetchProfile(result.id)
      setResults([])
    }

    return(
      <li className="grid-x" key={result.id}>
        <Link to={`/users/${result.id}`} onClick={fetchProfileWrapper}>{result.email}</Link>
        <FriendButton user={result} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </li>
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
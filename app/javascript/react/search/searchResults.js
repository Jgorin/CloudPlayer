import React from "react"

const SearchResults = props => {
  const { results } = props

  const resultsList = results.map((result) => {

    return(
      <li class="grid-x">
        <a href={`/users/${result.id}`}>{result.email}</a>
        <p class="button">Add Friend</p>
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
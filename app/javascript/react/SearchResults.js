import React from "react"
import UserSearchTile from "./UserSearchTile"

const SearchResults = (props) => {
  const { results } = props

  let resultsList
  let className = "searchValues rounded"
  if(results.length > 0){
    className += " callout"
    resultsList = results.map((result)=>{
      return(
        <UserSearchTile key={result.id} result={result}/>
      )
    })
  }
  return(
    <ul className={className}>
      {resultsList}
    </ul>
  )
}

export default SearchResults
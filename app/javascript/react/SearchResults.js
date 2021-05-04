import React from "react"
import UserProfileLink from "./UserProfileLink"

const SearchResults = (props) => {
  const { results } = props

  let resultsList
  let className = ""
  if(results.length > 0){
    className += "callout"
    resultsList = results.map((result)=>{
      return(
        <li key={result.id} className="indent">
          <UserProfileLink user={result}/>
        </li>
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
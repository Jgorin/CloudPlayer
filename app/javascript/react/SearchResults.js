import React from "react"
import UserProfileLink from "./UserProfileLink"
import FriendButton from "./FriendButton.js"

const SearchResults = (props) => {
  const { results } = props

  let resultsList
  let className = "searchValues"
  if(results.length > 0){
    className += " callout"
    resultsList = results.map((result)=>{
      return(
        <li key={result.id} className="indent">
          <p>{result.email}</p>
          <FriendButton otherUser={result.id}/>
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
import React from "react"
import UserSearchTile from "./UserSearchTile"
import { List, Divider } from '@material-ui/core';

const SearchResults = (props) => {
  const { results } = props

  let resultsList
  let className = "overflow white"
  if(results.length > 0){
    className += " callout"
    resultsList = results.map((result)=>{
      return(
        <UserSearchTile key={result.id} result={result}/>
      )
    })
  }
  return(
    <List className={className}>
      {resultsList}
    </List>
  )
}

export default SearchResults
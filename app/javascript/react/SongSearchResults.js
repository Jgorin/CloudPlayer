import React from "react"
import { useSelector } from "react-redux"
import { selectQuery, selectResults } from "./reducers/SongSearchFormSlice"
import SongSearchTile from "./SongSearchTile"

const SongSearchResults = (props) => {
  const results = useSelector(selectResults)
  const query = useSelector(selectQuery)

  let resultsList
  if(query.length > 0){
    resultsList = results.map((result) => {
      return(
        <SongSearchTile key={result.id} song={result}/>
      )
    })
  }

  return(
    <ul className="song-results light-color">
      {resultsList}
    </ul>
  )
}

export default SongSearchResults
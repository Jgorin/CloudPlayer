import React from "react"
import { List, ListItem } from "@material-ui/core"
import { useSelector } from "react-redux"
import { selectSongs } from "./reducers/SubmissionFormSlice"
import SongFormTile from "./SongFormTile"

const SubmissionSongs = (props) => {

  const songs = useSelector(selectSongs)
  
  let songList = songs.map((song, index) => {
    return(
      <SongFormTile song={song} key={index} id={index}/>
    )
  })

  return(
    <List className="added-songs">
      {songList}
    </List>
  )
}

export default SubmissionSongs
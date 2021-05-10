import React from "react"
import { useSelector } from "react-redux"
import { selectSongs } from "./reducers/PartyRoomInfoSlice"
import SongQueueTile from "./SongQueueTile"

const SongQueue = (props) => {
  const songs = useSelector(selectSongs)
  
  const songList = songs.map((song) => {
    return(
      <SongQueueTile song={song} key={song.id}/>
    )
  })

  return(
    <ul>
      {songList}
    </ul>
  )
}

export default SongQueue
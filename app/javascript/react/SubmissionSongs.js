import React from "react"
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

  if(songList.length < 5){
    songList.push(
      <li className="grid-x text-left callout rounded" key={songList.length}>
        <div className="cell small-10">
          <h4 className="text-center">New Song</h4>
        </div>
      </li>
    )  
  }

  return(
    <ul>
      {songList}
    </ul>
  )
}

export default SubmissionSongs
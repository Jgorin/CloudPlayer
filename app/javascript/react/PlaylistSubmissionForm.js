import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import SongSearchBar from "./SongSearchBar"
import SubmissionSongs from "./SubmissionSongs"
import { selectSongs } from "./reducers/SubmissionFormSlice"
import { postSubmission } from "./fetches/SubmissionFetches"
import { selectUser } from "./reducers/UserInfoSlice"
import { addPlaylist } from "./reducers/UserPlaylistSlice"
import { removeInvite } from "./reducers/UserPlaylistInviteSlice"
import { Button } from "@material-ui/core"
import { setTabValue } from "./reducers/TopBarSlice"
import { setSelectedPlaylist } from "./reducers/PlaylistScreenSlice"

const PlaylistSubmissionForm = (props) => {
  const [redirectId, setRedirectId] = useState(null)
  const dispatch = useDispatch()
  const songs = useSelector(selectSongs)
  const user = useSelector(selectUser)
  const { inviteId, playlist } = props

  const handleSubmit = async(event) => {
    const response = await postSubmission(user.id, songs, inviteId)
    dispatch(addPlaylist(response.playlist))
    dispatch(removeInvite(inviteId))
    dispatch(setSelectedPlaylist(playlist))
    dispatch(setTabValue(3))
  }

  let canvas
  if(songs.length < 5){
    canvas = 
    <div className="grid-x grid-margin-x">
      <div className="cell small-6 divider">
        <h2 className="text-center">Search Songs</h2>
        <SongSearchBar/>
      </div>
      <div className="cell small-6">
        <h2 className="text-center">Added Songs</h2>
        <SubmissionSongs/>
      </div>
    </div>
  }
  else{
    canvas = 
    <div className="text-center">
      <h2>Finalize</h2>
      <SubmissionSongs/>
      <Button variant="contained" className="salmon" onClick={handleSubmit}>Submit</Button>
    </div>
  }

  if(redirectId){
    return <Redirect to={`/playlists/${redirectId}`}/>
  }

  return(
    <div>
      {canvas}
    </div>
  )
}

export default PlaylistSubmissionForm
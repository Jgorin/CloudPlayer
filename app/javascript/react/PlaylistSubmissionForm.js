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

const PlaylistSubmissionForm = (props) => {
  const [redirectId, setRedirectId] = useState(null)
  const dispatch = useDispatch()
  const songs = useSelector(selectSongs)
  const user = useSelector(selectUser)
  const inviteId = props.match.params.playlist_id

  const handleSubmit = async(event) => {
    const response = await postSubmission(user.id, songs, inviteId)
    dispatch(addPlaylist(response.playlist))
    dispatch(removeInvite(inviteId))
    setRedirectId(response.playlist.id)
  }

  let searchBar
  let submitButton = <a onClick={handleSubmit}><p className="button rounded">Submit</p></a>
  if(songs.length < 5){
    searchBar = <SongSearchBar/>
    submitButton = null
  }

  if(redirectId){
    return <Redirect to={`/playlists/${redirectId}`}/>
  }


  return(
    <div className="grid-y">
      <div className="cell small-8 grid-x">
        <div className="cell small-6">
          <h2 className="text-center">Search Songs</h2>
          {searchBar}
        </div>
        <div className="cell small-6">
          <SubmissionSongs/>
          {submitButton}
        </div>
      </div>
    </div>
  )
}

export default PlaylistSubmissionForm
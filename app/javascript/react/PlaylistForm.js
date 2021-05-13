import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import PlaylistInviteListTile from "./PlaylistInviteListTile"
import { selectForm, setTitle, setInvites } from "./reducers/InvitationFormSlice"
import NewInviteSearchBar from "./NewInviteSearchBar"
import { createPlaylist } from "./fetches/PlaylistFetches"
import { addInvite } from "./reducers/UserPlaylistInviteSlice"
import { selectUser } from "./reducers/UserInfoSlice"
import { render } from "enzyme"

const PlaylistForm = (props) => {
  const[redirectId, setRedirectId] = useState(null)
  const[errors, setErrors] = useState(null)
  const dispatch = useDispatch()
  const form = useSelector(selectForm)
  const user = useSelector(selectUser)
  const invitationList = form.invites
  const title = form.title
  
  let tiles = []
  for(let i = 0; i < invitationList.length; i++){
    let component = <PlaylistInviteListTile key={i} user={invitationList[i]} id={i}/>
    tiles.push(component)
  }

  const handleSubmit = async() => {
    const invitedIds = invitationList.map((user) => {
      return(user.id)
    })
    const response = await createPlaylist(user.id, title, invitedIds)
    if(!response.error){
      dispatch(addInvite(response.playlist_invite))
      dispatch(setTitle(""))
      dispatch(setInvites([]))
      setRedirectId(response.playlist_invite.id)
    }
    else{
      setErrors(response.error)
    }
  }

  const handleTitleChange = (event) => {
    dispatch(setTitle(event.currentTarget.value))
  }

  if(redirectId){
    return <Redirect to={`/users/${user.id}/playlist_invites/${redirectId}/submissions/new`}/>
  }

  let errorTile
  if(errors){
    errorTile = <h4>{errors}</h4>
  }

  return(
    <div className="playlistForm">
      <h2 className="centered">Create a new Playlist</h2>
      {errors}
      <h4>Title</h4>
      <input type="text" onChange={handleTitleChange} value={title}/>
      <NewInviteSearchBar/>
      <ul>
        {tiles}
      </ul>
      <a className="button large" onClick={handleSubmit}>Submit</a>
    </div>
  )
}

export default PlaylistForm
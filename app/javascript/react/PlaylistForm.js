import React, { useState } from "react"
import { Button } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import PlaylistInviteListTile from "./PlaylistInviteListTile"
import { selectForm, setTitle, setInvites } from "./reducers/InvitationFormSlice"
import NewInviteSearchBar from "./NewInviteSearchBar"
import { createPlaylist } from "./fetches/PlaylistFetches"
import { addInvite } from "./reducers/UserPlaylistInviteSlice"
import { selectUser } from "./reducers/UserInfoSlice"
import { List } from "@material-ui/core"
import { setPlaylistModalOpen, setTabValue } from "./reducers/TopBarSlice"
import { setSelectedInvite } from "./reducers/PlaylistInviteListSlice"

const PlaylistForm = (props) => {
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
      dispatch(setPlaylistModalOpen(false))
      dispatch(setSelectedInvite(response.playlist_invite.id))
      dispatch(setTabValue(2))
    }
    else{
      setErrors(response.error)
    }
  }

  const handleTitleChange = (event) => {
    dispatch(setTitle(event.currentTarget.value))
  }

  let errorTile
  if(errors){
    errorTile = <h4>{errors}</h4>
  }

  let listClassName
  if(tiles.length > 0){
    listClassName="callout"
  }

  return(
    <div className="playlistForm">
      <h2 className="centered">Create a new Playlist</h2>
      {errors}
      <label htmlFor="title">Title</label>
      <input type="text" name="title" onChange={handleTitleChange} value={title}/>
      <NewInviteSearchBar/>
      <List className={listClassName}>
        {tiles}
      </List>
      <Button onClick={handleSubmit} className="salmon" variant="contained">Submit</Button>
    </div>
  )
}

export default PlaylistForm
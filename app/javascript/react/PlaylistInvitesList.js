import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectPlaylistInvites } from "./reducers/UserPlaylistInviteSlice"
import { addPlaylist } from "./reducers/UserPlaylistSlice"
import { selectUser } from "./reducers/UserInfoSlice"
import { acceptPlaylistInvite, declinePlaylistInvite } from "./fetches/PlaylistInviteFetches"
import { removeInvite } from "./reducers/UserPlaylistInviteSlice"
import UserProfilePhoto from "./UserProfilePhoto"

const PlaylistInvitesList = (props) => {
  const[ shouldRedirect, setshouldRedirect ] = useState(false)
  const dispatch = useDispatch()
  const playlistInvites = useSelector(selectPlaylistInvites)
  const user = useSelector(selectUser)
  
  
  const invitesList = playlistInvites.map((invite) => {

    const declinePlaylistInviteWrapper = async() => {
      const response = await declinePlaylistInvite(user.id, invite.id)
      dispatch(removeInvite(invite.id))
    }

    return(
      <li key={invite.id} className="list">
        <UserProfilePhoto user={invite.sender}/>
        <h4>{`${invite.playlist.title} - from ${invite.sender.username}`}</h4>
        <Link to={`/users/${user.id}/playlist_invites/${invite.id}/submissions/new`} className="button">Add Submission</Link>
        <a className="button" onClick={declinePlaylistInviteWrapper}>Decline</a>
      </li>
    )
  })

  return(
    <div className="list">
      <h2 className="underlined">Playlist Invites</h2>
      <ul className="list">
        {invitesList}
      </ul>
    </div>
  )
}

export default PlaylistInvitesList
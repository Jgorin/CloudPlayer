import React, { useState } from "react"
import { Modal, makeStyles, Backdrop, Fade } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import { selectPlaylistInvites } from "./reducers/UserPlaylistInviteSlice"
import { selectUser } from "./reducers/UserInfoSlice"
import { declinePlaylistInvite } from "./fetches/PlaylistInviteFetches"
import { removeInvite } from "./reducers/UserPlaylistInviteSlice"
import UserProfilePhoto from "./UserProfilePhoto"
import { List, ListItem, Button } from "@material-ui/core"
import { selectSelectedInvite, setSelectedInvite } from "./reducers/PlaylistInviteListSlice"
import PlaylistSubmissionForm from "./PlaylistSubmissionForm"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const PlaylistInvitesList = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const playlistInvites = useSelector(selectPlaylistInvites)
  const user = useSelector(selectUser)
  const selectedInviteId = useSelector(selectSelectedInvite)
  
  
  const invitesList = playlistInvites.map((invite) => {

    const isSelected = invite.id === selectedInviteId

    const declinePlaylistInviteWrapper = async() => {
      const response = await declinePlaylistInvite(user.id, invite.id)
      dispatch(removeInvite(invite.id))
    }

    const select = () => {
      dispatch(setSelectedInvite(invite.id))
    }

    const handleClose = () => {
      dispatch(setSelectedInvite(null))
    }

    return(
      <ListItem key={invite.id} divider={true}>
        <UserProfilePhoto user={invite.sender}/>
        <h4>{`${invite.playlist.title} - from ${invite.sender.username}`}</h4>
        <Button variant="contained" color="primary" onClick={select}>Add Submission</Button>
        <Button variant="contained" onClick={declinePlaylistInviteWrapper} color="secondary">Decline</Button>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={isSelected}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={isSelected}>
              <div className="white" style={{"borderRadius": "25px"}}>
                <PlaylistSubmissionForm inviteId={invite.id} playlist={invite.playlist}/>
              </div>
            </Fade>
          </Modal>
      </ListItem>
    )
  })

  return(
    <div className="list">
      <h2 className="underlined">Playlist Invites</h2>
      <List>
        {invitesList}
      </List>
    </div>
  )
}

export default PlaylistInvitesList
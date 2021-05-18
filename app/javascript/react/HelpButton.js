import React, { useState } from "react"
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Modal, Fade, Backdrop, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const HelpButton = (props) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return(
    <div className="margin">
      <HelpOutlineIcon onClick={handleOpen}/>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableAutoFocus={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="white text-center" style={{"borderRadius": "25px", "maxWidth": "500px", "padding": "30px"}}>
            <div>
              <h2>
                Welcome to CloudPlayer! 
              </h2>
              <h4>
                Adding Friends
              </h4>
              <p>
                Add friends by searching their username in the top bar search field, and click "SEND FRIEND REQUEST"
                Once they have accepted you can send them a request to join a collaborative playlist.
              </p>

              <h4>
                Creating a Playlist
              </h4>
              <p>
                In order to create a playlist, you must be signed in with a spotify account.
                Click on the "NEW PLAYLIST" button in the top bar to create a new collaborative playlist with friends!
                Each participant of a playlist can send in a submission consisting of five songs.
                Each of these five songs will be used to generate twenty other songs to ultimately
                be added to the collaborative playlist. 
              </p>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default HelpButton
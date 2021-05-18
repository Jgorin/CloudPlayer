import React, { useEffect, useState } from "react"
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, Button } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "./reducers/UserInfoSlice"
import { selectFriendRequests } from "./reducers/UserFriendRequestSlice"
import { selectPlaylistInvites } from "./reducers/UserPlaylistInviteSlice"
import FriendsList from "./FriendsList"
import FriendRequestsList from "./FriendRequestsList"
import PlaylistInvitesList from "./PlaylistInvitesList"
import PlaylistScreen from "./PlaylistScreen"
import SearchBar from "./SearchBar"
import RootFetch from "./fetches/RootFetch"
import UserProfilePhoto from "./UserProfilePhoto"
import { Modal, Fade, Backdrop, makeStyles } from "@material-ui/core"
import PlaylistForm from "./PlaylistForm"
import { selectValue, setTabValue, setPlaylistModalOpen } from "./reducers/TopBarSlice";
import HelpButton from "./HelpButton"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

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

const UserTopBar = (props) => {
  const value = useSelector(selectValue)
  // const[newPlaylistModalOpen, setNewPlaylistModalOpen] = useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const playlistInvites = useSelector(selectPlaylistInvites)
  const playlistInvitesLength = playlistInvites.length
  const friendRequests = useSelector(selectFriendRequests)
  const incomingFriendRequestsLength = friendRequests.filter(request => request.receiver.id == user.id).length

  let friendRequestLabel = "Friend Requests"
  let playlistInvitesLabel = "Playlist Invites"
  if(incomingFriendRequestsLength > 0){
    friendRequestLabel += ` (${incomingFriendRequestsLength})`
  }
  if(playlistInvitesLength > 0){
    playlistInvitesLabel += ` (${playlistInvitesLength})`
  }

  const handleChange = (event, newValue) => {
    dispatch(setTabValue(newValue))
  }

  useEffect(() => {
    RootFetch(dispatch)
  }, [])

  const handleOpen = () => {
    dispatch(setPlaylistModalOpen(true));
  };

  const handleClose = () => {
    dispatch(setPlaylistModalOpen(false));
  };

  let newPlaylistButton = <Button variant="contained" className="salmon" onClick={handleOpen}>New Playlist</Button>
  if(user.provider != "spotify"){
    newPlaylistButton = <Button variant="contained" className="disabled">New Playlist</Button>
  }

  return(
    <div>
      <AppBar position="static" className="medium-blue">
        <Toolbar>
          <UserProfilePhoto user={user}/>
          <Typography variant="h6">
            {user.username}
          </Typography>
          <SearchBar/>
          <Tabs value={value.tabValue} onChange={handleChange} aria-label="simple tabs example" variant="scrollable" scrollButtons="auto">
            <Tab label="Friends" {...a11yProps(0)} />
            <Tab label={friendRequestLabel} {...a11yProps(1)} />
            <Tab label={playlistInvitesLabel} {...a11yProps(2)} />
            <Tab label="Playlists" {...a11yProps(3)} />
          </Tabs>
          {newPlaylistButton}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={value.newPlaylistModalOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={value.newPlaylistModalOpen}>
              <div className="white" style={{"borderRadius": "25px"}}>
                <PlaylistForm/>
              </div>
            </Fade>
          </Modal>
          <HelpButton/>
        </Toolbar>
      </AppBar>

      <TabPanel value={value.tabValue} index={0}>
        <FriendsList/>
      </TabPanel>
      <TabPanel value={value.tabValue} index={1}>
        <FriendRequestsList/>
      </TabPanel>
      <TabPanel value={value.tabValue} index={2}>
        <PlaylistInvitesList/>
      </TabPanel>
      <TabPanel value={value.tabValue} index={3}>
        <PlaylistScreen/>
      </TabPanel>
    </div>
  )
}

export default UserTopBar
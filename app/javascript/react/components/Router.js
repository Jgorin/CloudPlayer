import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from "../Store"
import Home from "../Home"
import FriendsList from "../FriendsList"
import FriendRequestsList from "../FriendRequestsList"
import PlaylistInvitesList from "../PlaylistInvitesList"
import PlaylistForm from "../PlaylistForm"
import UserTopBar from "../UserTopBar"
import PlaylistList from "../PlaylistList"
import PlaylistSubmissionForm from "../PlaylistSubmissionForm"

export const Router = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/users" component={UserTopBar}/>
        <Route path="/playlists" component={UserTopBar}/>
        <Switch>
          <Route exact path="/users/:id/friends" component={FriendsList}/>
          <Route exact path="/users/:id/friend_requests" component={FriendRequestsList}/>
          <Route exact path="/users/:id/playlist_invites" component={PlaylistInvitesList}/>
          <Route exact path="/users/:id/playlists/new" component={PlaylistForm}/>
          <Route exact path="/users/:id/playlists" component={PlaylistList}/>
          <Route exact path="/users/:id/playlist_invites/:playlist_id/submissions/new" component={PlaylistSubmissionForm}/>
          <Route path="/" component={Home}/>
        </Switch>
        </Provider>
    </BrowserRouter>
  )
}

export default Router

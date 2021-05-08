import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from "../Store"
import Home from "../Home"
import FriendsList from "../FriendsList"
import FriendRequestsList from "../FriendRequestsList"
import PartyInvitesList from "../PartyInvitesList"
import PartyForm from "../PartyForm"
import UserTopBar from "../UserTopBar"
import PartyList from "../PartyList"
import PartyRoom from "../PartyRoom"

export const Router = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/users" component={UserTopBar}/>
        <Switch>
          <Route exact path="/users/:id/friends" component={FriendsList}/>
          <Route exact path="/users/:id/friend_requests" component={FriendRequestsList}/>
          <Route exact path="/users/:id/party_invites" component={PartyInvitesList}/>
          <Route exact path="/users/:id/parties/new" component={PartyForm}/>
          <Route exact path="/users/:id/parties" component={PartyList}/>
          <Route exact path="/parties/:id" component={PartyRoom}/>
          <Route path="/" component={Home}/>
        </Switch>
        </Provider>
    </BrowserRouter>
  )
}

export default Router

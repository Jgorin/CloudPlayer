import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from "../Store"
import UserTopBar from "../UserTopBar"

export const Router = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/users" component={UserTopBar}/>
        <Route path="/playlists" component={UserTopBar}/>
      </Provider>
    </BrowserRouter>
  )
}

export default Router

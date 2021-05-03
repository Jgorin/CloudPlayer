import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from "../ProfileStore"
import { topBarStore } from "../TopBarStore"
import userProfile from "../userProfile"
import Home from "../Home"
import TopBar from "../TopBar"
import { render } from 'enzyme'

export const Router = (props) => {
  return (
    <BrowserRouter>
        <Provider store={topBarStore}>
          <Route path="/" component={TopBar}/>
        </Provider>
        <Provider store={store}>
          <Switch>
            <Route exact path="/users/search"/>
            <Route exact path="/users/:id" component={userProfile}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Provider>
    </BrowserRouter>
  )
}

export default Router

import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from "../Store"
import userProfile from "../userProfile"
import Home from "../Home"
import Background from "../Background"

export const Router = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" component={Background}/>
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

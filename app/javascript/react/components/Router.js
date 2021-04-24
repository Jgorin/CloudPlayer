import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import userProfile from "../userProfile"
import SearchForm from "../search/searchForm"

export const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users/search"/>
        <Route exact path="/users/:id" component={userProfile}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router

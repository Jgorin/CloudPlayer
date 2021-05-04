import React, { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "./reducers/CurrentUserInfoSlice"

const RedirectOnLogout = (props) => {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const currentUser = useSelector(selectCurrentUser)
  
  if(currentUser.id == null && window.location.pathname != "/" && shouldRedirect == false){
    setShouldRedirect(true)
  }

  if(shouldRedirect){
    return <Redirect to="/"/>
  }

  return(
    null
  )
}

export default RedirectOnLogout
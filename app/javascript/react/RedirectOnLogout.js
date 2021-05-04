import React, { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"

const RedirectOnLogout = (props) => {

  if(props.shouldRedirect && window.location.pathname != "/"){
    props.setShouldRedirect(false)
    return <Redirect to="/"/>
  }

  return(
    null
  )
}

export default RedirectOnLogout
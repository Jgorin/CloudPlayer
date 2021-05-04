import React from "react"

const Background = (props) => {

  let className = "background"
  if(window.location.pathname != "/"){
    className = "background2"
  }
  return(
    <div className={`${className} fullscreen`}/>
  )
}

export default Background
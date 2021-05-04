import React from "react"
import SearchBar from "./SearchBar"

const ProfileBar = (props) => {
  return(
    <div className="profileBar">
      <h1 className="align">{props.name}</h1>
      <SearchBar className="align"/>
    </div>
  )
}

export default ProfileBar
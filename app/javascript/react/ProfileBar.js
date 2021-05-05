import React from "react"
import SearchBar from "./SearchBar"
import FriendButton from "./FriendButton.js"

const ProfileBar = (props) => {
  return(
    <div className="grid-x profileBar grid-margin-x">
      <div className="cell large-5 medium-6">
        <h1 className="wrap">{props.name}</h1>
      </div>
      <div className="cell large-5 medium-3">
        <SearchBar/>
      </div>
    </div>
  )
}

export default ProfileBar
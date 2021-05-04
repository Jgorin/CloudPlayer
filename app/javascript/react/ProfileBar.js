import React from "react"
import SearchBar from "./SearchBar"

const ProfileBar = (props) => {
  return(
    <div className="grid-x profileBar">
      <div className="cell small-5">
        <h1>{props.name}</h1>
      </div>
      <div className="cell small-6">
      <SearchBar/>
      </div>
    </div>
  )
}

export default ProfileBar
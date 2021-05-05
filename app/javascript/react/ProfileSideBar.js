import React from "react"
import FriendsList from "./FriendsList"
import FriendRequestsList from "./FriendRequestsList"
import SearchBar from "./SearchBar"

const ProfileSideBar = (props) => {
  return(
    <div className="profileSideBar">
      <SearchBar/>
      <FriendsList/>
      <FriendRequestsList/>
    </div>
  )
}

export default ProfileSideBar
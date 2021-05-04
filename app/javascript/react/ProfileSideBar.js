import React from "react"
import FriendsList from "./FriendsList"
import FriendRequestsList from "./FriendRequestsList"

const ProfileSideBar = (props) => {
  return(
    <div className="profileSideBar">
      <FriendsList/>
      <FriendRequestsList/>
    </div>
  )
}

export default ProfileSideBar
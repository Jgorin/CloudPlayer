import React from "react"
import FriendsList from "./FriendsList"
import FriendRequestsList from "./FriendRequestsList"

const ProfileSideBar = (props) => {
  return(
    <div className="profileSideBar">
      <h4>friends</h4>
      <FriendsList/>
      <FriendRequestsList/>
    </div>
  )
}

export default ProfileSideBar
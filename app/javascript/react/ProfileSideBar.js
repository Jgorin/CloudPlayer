import React from "react"
import FriendsList from "./FriendsList"
import FriendRequestsList from "./FriendRequestsList"

const ProfileSideBar = (props) => {
  return(
    <div className="profileSideBar">
      <h4>friends</h4>
      <FriendsList/>
      <h4>friend requests</h4>
      <FriendRequestsList/>
    </div>
  )
}

export default ProfileSideBar
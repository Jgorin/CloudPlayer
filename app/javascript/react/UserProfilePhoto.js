import React from "react"

const DefaultImageUrl = "http://mycloudplayer.s3.amazonaws.com/uploads/default-profile-picture.png"

const UserProfilePhoto = (props) => {
  const { user } = props

  let profilePhoto = <img src={DefaultImageUrl} className="profile-photo"/>
  if(user.profilePhoto && user.profilePhoto.url){
    profilePhoto = <img src={user.profilePhoto.url} className="profile-photo"/>
  }

  return(
    <div>
      {profilePhoto}
    </div>
  )
}

export default UserProfilePhoto
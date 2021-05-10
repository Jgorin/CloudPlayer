import React, { useState, useEffect } from "react"
import { getProfilePicture } from "./fetches/UserFetches"

const DefaultImageUrl = "http://mycloudplayer.s3.amazonaws.com/uploads/default-profile-picture.png"

const UserProfilePhoto = (props) => {
  const { user } = props
  const [imageUrl, setImageUrl] = useState(DefaultImageUrl)
  debugger

  const fetchProfilePictureWrapper = async() => {
    const response = await getProfilePicture(user.id)
    setImageUrl(response.url)
  }

  useEffect(() => {
    if(user.id){
      fetchProfilePictureWrapper()
    }
  })

  const profilePhoto = <img src={imageUrl} className="profile-photo"/>
  

  return(
    <div>
      {profilePhoto}
    </div>
  )
}

export default UserProfilePhoto
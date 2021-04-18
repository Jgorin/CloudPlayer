import { useEffect } from "react"
import React, { useState } from "react"

import FriendsList from "./friendsList"

const userProfile = props => {
  const [profile, setProfile] = useState(null)
  const [friends, setFriends] = useState([])
  const [avatarUrl, setAvatarUrl] = useState([])
  const [isCurrentUser, setIsCurrentUser] = useState(true)

  const fetchProfile = async () => {
    try{
      let profileId = props.match.params.id
      const response = await fetch(`/api/v1/users/${profileId}`)
      if(!response.ok){
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
      const parsedResponse = await response.json()
      setProfile(parsedResponse.user)
      setFriends(parsedResponse.friends)
      setIsCurrentUser(parsedResponse.current_user == parsedResponse.user.id)
      if('avatar' in parsedResponse){
        let avatarData = parsedResponse[3]
        setAvatarUrl(avatarData)
      }
    }
    catch(err){
      console.log("Error in fetching user profile...")
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])


  const profileName = profile == null ? null : profile.email

  let addFriendButton = null
  if(!isCurrentUser){
    addFriendButton = <p className="button" style={{marginLeft: "50px"}}>Add Friend</p>
  }

  return(
    <div>
      <div className="grid-x padding">
        <h2>{isCurrentUser ? "Your Profile" : `${profileName}'s profile`}</h2>
        {addFriendButton}    
      </div>
      <img src={avatarUrl}></img>
      <FriendsList friendsData={friends}/>
    </div>
  )
}

export default userProfile
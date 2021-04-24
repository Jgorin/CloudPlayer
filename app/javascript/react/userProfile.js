import { useEffect } from "react"
import React, { useState } from "react"

import FriendsList from "./friendsList"
import SearchShow from "./search/searchShow"

const userProfile = props => {
  const [profile, setProfile] = useState(null)
  const [friends, setFriends] = useState([])
  const [avatarUrl, setAvatarUrl] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

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
      setCurrentUser(parsedResponse.current_user_id)
      if('avatar' in parsedResponse){
        let avatarData = parsedResponse.avatarUrl
        setAvatarUrl(avatarData)
      }
    }
    catch(err){
      console.log("Error in fetching user profile...")
      console.log(err)
    }
  }

  const sendFriendRequest = async(event) => {
    try{
      const response = await fetch(`/api/v1/users/send_friend_request`, {method: "PATCH", body: JSON.stringify({receiver_id: profile.id, sender_id: currentUser})})
    }
    catch(err){

    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])


  const profileName = profile == null ? null : profile.email

  let isCurrentUser = false
  if(profile != null && profile.id == currentUser){
    isCurrentUser = true
  }

  let addFriendButton = null
  if(!isCurrentUser){
    addFriendButton = <p className="button" style={{marginLeft: "50px"}} onClick={sendFriendRequest}>Add Friend</p>
  }

  return(
    <div>
      <div className="grid-x padding">
        <h2>{isCurrentUser ? "Your Profile" : `${profileName}'s profile`}</h2>
        {addFriendButton}    
      </div>
      <img src={avatarUrl}></img>
      <FriendsList friendsData={friends}/>
      <SearchShow/>
    </div>
  )
}

export default userProfile
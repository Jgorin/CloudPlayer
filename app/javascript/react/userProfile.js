import { useEffect } from "react"
import React, { useState } from "react"

import FriendsList from "./friendsList"
import SearchShow from "./search/searchShow"
import FriendButton from "./friendButton"

const defaultProfile = {
  id: null,
  email: "",
  password: "",
  friends: [],
  friend_requests: {
    incoming: [], 
    outgoing: []
  }
}

const userProfile = props => {
  const [user, setUser] = useState(defaultProfile)
  const [currentUser, setCurrentUser] = useState(defaultProfile)

  const fetchProfile = async (profileId) => {
    try{
      const response = await fetch(`/api/v1/users/${profileId}`)
      if(!response.ok){
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
      const parsedResponse = await response.json()
      setUser({...parsedResponse.user,
        ["friends"]: parsedResponse.friends, 
        ["friend_requests"]: parsedResponse.friend_requests
      })
      setCurrentUser({...parsedResponse.current_user, 
        ["friends"]: parsedResponse.current_user_friends, 
        ["friend_requests"]: parsedResponse.current_user_friend_requests
      })
    }
    catch(err){
      console.log("Error in fetching user profile...")
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProfile(props.match.params.id)
  }, [])

  let profileName = null
  let isCurrentUser = false

  if(user != null && currentUser != null){
    profileName = user.email

    if(user.id == currentUser.id){
      isCurrentUser = true
    }
  }

  return(
    <div>
      <div className="grid-x padding">
        <h2>{isCurrentUser ? "Your Profile" : `${profileName}'s profile`}</h2>
        <FriendButton user={user} currentUser={currentUser} setUser={setUser} setCurrentUser={setCurrentUser}/> 
      </div>
      <FriendsList friendsData={user.friends} currentUserId={currentUser} setUser={setUser} fetchProfile={fetchProfile}/>
      <SearchShow currentUser={currentUser} setCurrentUser={setCurrentUser} setUser={setUser} fetchProfile={fetchProfile}/>
    </div>
  )
}

export default userProfile
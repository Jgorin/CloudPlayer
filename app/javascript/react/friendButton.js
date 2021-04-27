import React, { useState } from "react"

const FriendButton = props => {
  const { user, setUser, currentUser, setCurrentUser } = props

  const sendFriendRequest = async(event) => {
    try{
      const response = await fetch(`/api/v1/users/${user.id}/friend_requests`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json"
        },
        body: JSON.stringify({current_user: currentUser.id})
      })
      if(!response.ok){
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
      const parsedResponse = await response.json()
      handleFriendRequestChanges(parsedResponse)
    }
    catch(err){
      console.log("error in fetch")
      console.log(err)
    }
  }

  const handleFriendRequestChanges = changes => {
    
    let currentUserFriendRequests = currentUser.friend_requests
    currentUserFriendRequests.outgoing.push(changes.receiver)
    //UPDATE FRIEND REQUEST STATES HERE
    if(setUser != null){
      let userFriendRequests = user.friend_requests
      userFriendRequests.incoming.push(changes.sender)
      setUser({
        ...user,
        ["friend_requests"]: userFriendRequests
      })
    }
    setCurrentUser({
      ...currentUser,
      ["friend_requests"]: currentUserFriendRequests
    })
  }

  let label = null
  let button = null
  let interactFunction = null
  if(user.id != null && currentUser.id != null && currentUser.id !== user.id){
    label = "Send Friend Request"
    interactFunction = sendFriendRequest
    if(currentUser.friend_requests.outgoing.some(friend => friend.id === user.id)){
      label = "Cancel Friend Request"
    }
    if(currentUser.friend_requests.incoming.some(friend => friend.id === user.id)){
      label = "Accept Friend Request"
    }
    if(currentUser.friends.some(friend => friend.id === user.id)){
      label = "Remove Friend"
    }
  }

  if(label !== null){
    button = <p className="button" onClick={interactFunction}>{label}</p> 
  }

  return(
    <div>
      {button}
    </div>
  )
}

export default FriendButton
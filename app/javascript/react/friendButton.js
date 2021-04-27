import React, { useState } from "react"

const FriendButton = props => {
  const { user, setUser, currentUser, setCurrentUser, defaultClass } = props

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

  const cancelFriendRequest = async (event) => {
    try{
      const response = await fetch(`/api/v1/users/${user.id}/friend_requests/${currentUser.id}`, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json"
        }
      })
      if(!response.ok){
        let errorMessage = `${response.status} (${response.statusText})`
        let error = new Error(errorMessage)
        throw(error)
      }
      const parsedResponse = await response.json()
      handleDeleteChanges(parsedResponse)
    }
    catch(err){
      console.log("Error posting to friend requests")
      console.log(err)
    }
  }

  const handleDeleteChanges = (changes) => {
    let currentUserFriendRequests = currentUser.friend_requests
    currentUserFriendRequests.outgoing = currentUserFriendRequests.outgoing.filter(user => user.id !== changes.receiver.id )
    if(setUser != null){
      let userFriendRequests = user.friend_requests
      userFriendRequests.incoming = userFriendRequests.incoming.filter(user => user.id !== changes.sender.id)
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
  let buttonClass = "button rounded autoMargin"

  if(defaultClass != null && defaultClass != ""){
    buttonClass += ` ${defaultClass}`
  }

  if(user.id != null && currentUser.id != null && currentUser.id !== user.id){
    if(currentUser.friend_requests.outgoing.some(friend => friend.id === user.id)){
      label = "Cancel Friend Request"
      interactFunction = cancelFriendRequest
      buttonClass += " secondary"
    }
    else if(currentUser.friend_requests.incoming.some(friend => friend.id === user.id)){
      label = "Accept Friend Request"
    }
    else if(currentUser.friends.some(friend => friend.id === user.id)){
      label = "Remove Friend"
    }
    else{
      label = "Send Friend Request"
      interactFunction = sendFriendRequest
    }
  }

  if(label !== null){
    button = <p className={buttonClass} onClick={interactFunction}>{label}</p> 
  }

  return(
    <div>
      {button}
    </div>
  )
}

export default FriendButton
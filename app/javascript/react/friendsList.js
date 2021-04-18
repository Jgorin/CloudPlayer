import React from "react"

const FriendsList = props => {
  const { friendsData } = props

  const friendsList = friendsData.map((friend) => {
    return(
      <li key={friend.id}>
        <a href={`/users/${friend.id}`}>{friend.email}</a>
      </li>
    )
  })

  return(
    <div>
      <h4>Friends:</h4>
      <ul>
        {friendsList}
      </ul>
    </div>
  )
}

export default FriendsList
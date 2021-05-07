import React from "react"
import { useDispatch } from "react-redux"
import { removeUser } from "./reducers/InvitationFormSlice"
import UserProfilePhoto from "./UserProfilePhoto"

const PartyInviteListTile = (props) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(removeUser(props.user))
  }

  return(
    <div onClick={handleClick}>
      <div className="callout rounded">
        <UserProfilePhoto user={props.user}/>
        <a><p>{props.user.username}</p></a>
      </div>
    </div>
  )
}

export default PartyInviteListTile
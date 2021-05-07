import React from "react"
import { useDispatch } from "react-redux"
import { removeUser } from "./reducers/InvitationFormSlice"

const PartyInviteListTile = (props) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(removeUser(props.user))
  }

  return(
    <div>
      <div className="callout rounded">
        <a onClick={handleClick}><p>{props.user.username}</p></a>
      </div>
    </div>
  )
}

export default PartyInviteListTile
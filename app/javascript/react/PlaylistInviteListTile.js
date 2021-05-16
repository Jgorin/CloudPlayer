import React from "react"
import { useDispatch } from "react-redux"
import { removeUser } from "./reducers/InvitationFormSlice"
import UserProfilePhoto from "./UserProfilePhoto"
import { ListItem } from "@material-ui/core"

const PlaylistInviteListTile = (props) => {
  const { user } = props
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(removeUser(props.user))
  }

  return(
    <ListItem onClick={handleClick} divider={true}>
        <UserProfilePhoto user={user}/>
        <a><p>{user.username}</p></a>
    </ListItem>
  )
}

export default PlaylistInviteListTile
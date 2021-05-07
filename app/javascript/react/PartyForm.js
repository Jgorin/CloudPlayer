import React from "react"
import { useSelector, useDispatch } from "react-redux"
import PartyInviteListTile from "./PartyInviteListTile"
import { selectForm, setTitle } from "./reducers/InvitationFormSlice"
import NewInviteSearchBar from "./NewInviteSearchBar"
import {createParty} from "./fetches/PartyFetches"
import { selectUser } from "./reducers/UserInfoSlice"

const PartyForm = (props) => {
  // const invitationList = useSelector(selectInvitations)
  const dispatch = useDispatch()
  const form = useSelector(selectForm)
  const user = useSelector(selectUser)
  const invitationList = form.invites
  const title = form.title
  

  let tiles = []
  for(let i = 0; i < invitationList.length; i++){
    let component = <PartyInviteListTile key={i} user={invitationList[i]} id={i}/>
    tiles.push(component)
  }

  const handleSubmit = async() => {
    const invitedIds = invitationList.map((user) => {
      return(user.id)
    })
    const response = await createParty(user.id, title, invitedIds)
    debugger
  }

  const handleTitleChange = async(event) => {
    dispatch(setTitle(event.currentTarget.value))
  }
  
  return(
    <div className="partyForm">
      <h2 className="centered">Create a new Party</h2>
      <h4>Title</h4>
      <input type="text" onChange={handleTitleChange} value={title}/>
      <NewInviteSearchBar/>
      <ul>
        {tiles}
      </ul>
      <a className="button large" onClick={handleSubmit}>Submit</a>
    </div>
  )
}

export default PartyForm
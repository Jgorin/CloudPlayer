import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import PartyInviteListTile from "./PartyInviteListTile"
import NewInviteTile from "./NewInviteTile"
import { selectInvitations } from "./reducers/InvitationFormSlice"
import NewInviteSearchBar from "./NewInviteSearchBar"
import {createParty} from "./fetches/PartyFetches"
import { selectUser } from "./reducers/UserInfoSlice"

const PartyForm = (props) => {
  const invitationList = useSelector(selectInvitations)
  const user = useSelector(selectUser)

  let tiles = []
  for(let i = 0; i < invitationList.length; i++){
    let component = <PartyInviteListTile key={i} user={invitationList[i]} id={i}/>
    tiles.push(component)
  }
  if(tiles.length < 1){
    let component = <NewInviteTile key={tiles.length} id={tiles.length}/>
    tiles.push(component)
  }

  const handleSubmit = async() => {
    const invitedIds = invitationList.map((user) => {
      return(user.id)
    })
    const response = await createParty(user.id, invitedIds)
    debugger
  }
  
  return(
    <div className="partyForm">
      <h2 className="centered">Create a new Party</h2>
      <NewInviteSearchBar/>
      <ul>
        {tiles}
      </ul>
      <a className="button large" onClick={handleSubmit}>Submit</a>
    </div>
  )
}

export default PartyForm
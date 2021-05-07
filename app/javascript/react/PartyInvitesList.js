import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectPartyInvites } from "./reducers/UserPartyInviteSlice"


const PartyInvitesList = (props) => {
  const partyInvites = useSelector(selectPartyInvites)
  
  const invitesList = partyInvites.map((invite) => {
    return(
      <li key={invite.id}>
        <p>{`${invite.sender.email} invited you to join a party.`}</p>
      </li>
    )
  })

  return(
    <div>
      <h2 className="underlined">Party Invites</h2>
      <ul>
        {invitesList}
      </ul>
    </div>
  )
}

export default PartyInvitesList
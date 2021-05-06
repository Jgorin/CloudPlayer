import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectPartyInvites } from "./reducers/UserPartyInviteSlice"


const PartyInvitesList = (props) => {
  const partyInvites = useSelector(selectPartyInvites)
  
  const invitesList = partyInvites.map((invite) => {
    return(
      <li>
        <p>{`${invite.sender.email} invited you to join a party.`}</p>
      </li>
    )
  })

  return(
    <div>
      <h4 className="underlined">Party Invites</h4>
      <ul>
        {invitesList}
      </ul>
    </div>
  )
}

export default PartyInvitesList
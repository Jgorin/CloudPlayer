import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectPartyInvites } from "./reducers/UserPartyInviteSlice"
import { addParty } from "./reducers/UserPartySlice"
import { selectUser } from "./reducers/UserInfoSlice"
import { acceptPartyInvite, declinePartyInvite } from "./fetches/PartyInviteFetches"
import { removeInvite } from "./reducers/UserPartyInviteSlice"
import UserProfilePhoto from "./UserProfilePhoto"

const PartyInvitesList = (props) => {
  const dispatch = useDispatch()
  const partyInvites = useSelector(selectPartyInvites)
  const user = useSelector(selectUser)
  
  
  const invitesList = partyInvites.map((invite) => {

    const acceptPartyInviteWrapper = async() => {
      const response = await acceptPartyInvite(user.id, invite.id)
      dispatch(addParty(response.party))
      dispatch(removeInvite(invite.id))
    }

    const declinePartyInviteWrapper = async() => {
      const response = await declinePartyInvite(user.id, invite.id)
      dispatch(removeInvite(invite.id))
    }

    return(
      <li key={invite.id}>
        <UserProfilePhoto user={invite.sender}/>
        <h4>{`${invite.party.title} - from ${invite.sender.email}`}</h4>
        <a className="button" onClick={acceptPartyInviteWrapper}>Accept</a>
        <a className="button" onClick={declinePartyInviteWrapper}>Decline</a>
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
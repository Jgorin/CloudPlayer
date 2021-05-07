import React from "react"
import { useSelector } from "react-redux"
import { selectParties } from "./reducers/UserPartySlice"
import PartyTile from "./PartyTile"

const PartyList = (props) => {
  const parties = useSelector(selectParties)

  const partyList = parties.map((party) => {
    return(
      <PartyTile key={party.id} party={party}/>
    )
  })

  return(
    <div>
      <h2 className="underlined">Party List</h2>
      <ul>
        {partyList}
      </ul>
    </div>
  )
}

export default PartyList
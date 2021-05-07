import React from "react"

const PartyTile = (props) => {
  const { party } = props
  return(
    <li>
      <h4>{party.title}</h4>
    </li>
  )
}

export default PartyTile
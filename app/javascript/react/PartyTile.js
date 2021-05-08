import React from "react"
import { Link } from "react-router-dom"

const PartyTile = (props) => {
  const { party } = props
  return(
    <li>
      <Link to={`/parties/${party.id}`}><h4>{party.title}</h4></Link>
    </li>
  )
}

export default PartyTile
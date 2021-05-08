import React, { useEffect } from "react"
import {fetchParty} from "./fetches/PartyFetches"

const PartyRoom = (props) => {

  const fetchPartyWrapper = async() => {
    const response = await fetchParty(props.match.params.id)
  }

  useEffect(() => {
    fetchPartyWrapper()
  }, [])

  return(
    <h1>test</h1>
  )
}

export default PartyRoom
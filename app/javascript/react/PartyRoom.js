import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchParty } from "./fetches/PartyFetches"
import { setState, selectParty } from "./reducers/PartyRoomInfoSlice"
import { selectUser, setUser } from "./reducers/UserInfoSlice"
import SongSearchBar from "./SongSearchBar"

const PartyRoom = (props) => {
  const dispatch = useDispatch()
  const party = useSelector(selectParty)
  const user = useSelector(selectUser)
  

  const fetchPartyWrapper = async() => {
    const response = await fetchParty(props.match.params.id)
    const partyInfo = response.party
    const userInfo = response.party.current_user
    delete partyInfo.current_user
    dispatch(setState(partyInfo))
    dispatch(setUser(userInfo))
  }

  useEffect(() => {
    fetchPartyWrapper()
  }, [])

  return(
    <div>
      <h1>{party.title}</h1>
      <h4>{user.username}</h4>
      <SongSearchBar/>
    </div>
  )
}

export default PartyRoom
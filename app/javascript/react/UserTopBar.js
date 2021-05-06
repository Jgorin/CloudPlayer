import React, { useEffect } from "react"
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectUser } from "./reducers/UserInfoSlice"
import SearchBar from "./SearchBar"
import RootFetch from "./fetches/RootFetch"

const UserTopBar = (props) => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    RootFetch(dispatch)
  }, [])

  return(
    <div className="userTopBar menu">
      <h2>{user.email}</h2>
      <Link to={`/users/${user.id}/friends`}>Friends</Link>
      <Link to={`/users/${user.id}/friend_requests`}>Friend Requests</Link>
      <Link to={`/users/${user.id}/party_invites`}>Party Invites</Link>
      <Link to={`/users/${user.id}/parties`}>Parties</Link>
      <a className="searchBar"><SearchBar/></a>
      <Link to={`/users/${user.id}/parties/new`} className="button large text-center">New Party</Link>
    </div>
  )
}

export default UserTopBar
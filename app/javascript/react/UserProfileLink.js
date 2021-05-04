import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setState } from "./reducers/UserInfoSlice"
import { fetchUser } from "./fetches/UserFetches"
import RootFetch from "./fetches/RootFetch"

const UserProfileLink = (props) => {

  const { user } = props

  const dispatch = useDispatch()

  const fetchProfile = () => {
    RootFetch(user.id, dispatch)
  }

  return(
    <Link to={`/users/${user.id}`} onClick={fetchProfile}>{user.email}</Link>
  )
}

export default UserProfileLink
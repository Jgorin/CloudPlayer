import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "./reducers/UserInfoSlice"
import RootFetch from "./fetches/RootFetch"
import SearchBar from "./SearchBar"
import ProfileSideBar from "./ProfileSideBar"

const userProfile = props => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    RootFetch(props.match.params.id, dispatch)
  }, [])

  return(
    <div className="grid-x profile">
      <ProfileSideBar/>
      <SearchBar/>
    </div>
  )
}

export default userProfile
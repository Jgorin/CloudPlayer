import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "./reducers/UserInfoSlice"
import RootFetch from "./fetches/RootFetch"
import ProfileBar from "./ProfileBar"
import ProfileSideBar from "./ProfileSideBar"

const userProfile = props => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    RootFetch(props.match.params.id, dispatch)
  }, [])

  return(
    <div className="grid-y profile">
      <ProfileBar name={user.email}/>
      <ProfileSideBar/>
    </div>
  )
}

export default userProfile
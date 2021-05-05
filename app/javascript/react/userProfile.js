import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "./reducers/UserInfoSlice"
import RootFetch from "./fetches/RootFetch"
import ProfileSideBar from "./ProfileSideBar"

const userProfile = props => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    RootFetch(dispatch)
  }, [])

  return(
    <div className="grid-x profile">
      <ProfileSideBar/>
    </div>
  )
}

export default userProfile
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "./reducers/InvitationFormSlice"
import UserProfilePhoto from "./UserProfilePhoto"

const NewInviteSearchBarResults = (props) => {
  const { state, setState } = props
  const results = state.results

  const dispatch = useDispatch()

  const resultsList = results.map((result) => {
    const handleClick = (event) => {
      dispatch(addUser(result))
      if(results.length > 1){
        setState({
          ...state,
          ["results"]: results.filter(oldResult => oldResult.id != result.id)
        })
      }
      else{
        setState({
          ["query"]: "",
          ["results"]: []
        })
      }
    }

    return(
      <li key={result.id} onClick={handleClick}>
        <UserProfilePhoto user={result}/>
        <a>{result.username}</a>
      </li>
    )
  })

  return(
    <ul className="callout rounded overlap">
      {resultsList}
    </ul>
  )
}

export default NewInviteSearchBarResults
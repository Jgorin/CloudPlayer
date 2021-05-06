import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "./reducers/InvitationFormSlice"

const NewInviteSearchBarResults = (props) => {
  const { state, setState } = props
  const results = state.results
  const dispatch = useDispatch()

  const resultsList = results.map((result) => {
    const handleClick = (event) => {
      dispatch(addUser(result))
      setState({
        ...state,
        ["results"]: results.filter(oldResult => oldResult.id != result.id)
      })
    }

    return(
      <li>
        <a onClick={handleClick}>{result.email}</a>
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
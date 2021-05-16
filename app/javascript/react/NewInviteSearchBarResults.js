import React from "react"
import { List, ListItem } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { addUser } from "./reducers/InvitationFormSlice"
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
      <ListItem key={result.id} onClick={handleClick} divider={true}>
        <UserProfilePhoto user={result}/>
        <a>{result.username}</a>
      </ListItem>
    )
  })

  return(
    <List className="white overlap callout">
      {resultsList}
    </List>
  )
}

export default NewInviteSearchBarResults
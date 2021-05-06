import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectFriendships } from "./reducers/UserFriendSlice"
import NewInviteSearchBarResults from "./NewInviteSearchBarResults"
import { selectInvitations, addUser } from "./reducers/InvitationFormSlice"

const initialState = {
  query: "",
  results: []
}

const NewInviteSearchBar = (props) => {
  const[state, setState] = useState(initialState)
  const friendships = useSelector(selectFriendships)
  const invitationList = useSelector(selectInvitations)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    let results = []
    let query = event.currentTarget.value
    if(query != ""){
      results = searchFriends(friendships, invitationList, query)
    }
    setState({
      ["query"]: query,
      ["results"]: results
    })
  }

  let results
  if(state.results.length > 0){
    results = <NewInviteSearchBarResults state={state} setState={setState}/>
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addUser(state.results[0]))
    setState({
      ["query"]: "",
      ["results"]: []
    })
  }

  return(
    <div>
      <form className="rounded" onSubmit={handleSubmit}>
        <label htmlFor="inviteName">Search</label>
        <input type="text" id="inviteName" name="inviteName" onChange={handleChange} value={state.query} autocomplete="off"/>
      </form>
      {results}
    </div>
  )
}

const searchFriends = (friendships, invitationList, query) => {
  let results = []
  friendships.forEach((friendship) => {
    if(friendship.friend.email.includes(query) && !invitationList.includes(friendship.friend)){
      results.push(friendship.friend)
    }
  })
  return results
}

export default NewInviteSearchBar
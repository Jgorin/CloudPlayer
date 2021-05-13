import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectFriendships } from "./reducers/UserFriendSlice"
import NewInviteSearchBarResults from "./NewInviteSearchBarResults"
import { selectInvitations, addUser } from "./reducers/InvitationFormSlice"
import { selectUser } from "./reducers/UserInfoSlice"

const initialState = {
  query: "",
  results: []
}

const NewInviteSearchBar = (props) => {
  const[state, setState] = useState(initialState)
  const friendships = useSelector(selectFriendships)
  const invitationList = useSelector(selectInvitations)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    let results = []
    let query = event.currentTarget.value
    if(query != ""){
      results = searchFriends(friendships, invitationList, query, user.id)
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
    if(state.results.length > 0){
      dispatch(addUser(state.results[0]))
    }
    setState({
      ["query"]: "",
      ["results"]: []
    })
  }

  return(
    <div>
      <form className="rounded" onSubmit={handleSubmit}>
        <label htmlFor="inviteName">Search Friends</label>
        <input type="text" id="inviteName" name="inviteName" onChange={handleChange} value={state.query} autoComplete="off"/>
      </form>
      {results}
    </div>
  )
}

const searchFriends = (friendships, invitationList, query, userId) => {
  let results = []
  friendships.forEach((friendship) => {
    let friend = null
    if(friendship.friend.id == userId){
      friend = friendship.user
    }
    else{
      friend = friendship.friend
    }
    if(friend.username.toLowerCase().startsWith(query.toLowerCase()) && !invitationList.includes(friend)){
      results.push(friend)
    }
  })
  return results
}

export default NewInviteSearchBar
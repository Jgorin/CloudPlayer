import React, { useState } from "react"

const defaultFormState = {
  searchValue: ""
}

const SearchForm = props => {
  const [formState, setFormState] = useState(defaultFormState)
  const { handleSubmit } = props

  const handleStateChange = event => {
    setFormState({
      ...formState,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmitWrapper = (event) => {
    event.preventDefault()
    handleSubmit(formState.searchValue)
  }

  return(
    <form onSubmit={handleSubmitWrapper}>
      <input type="text" name="searchValue" id="searchValue" onChange={handleStateChange}/>
      <input type="submit" class="button" value="Search"/>
    </form>
  )
}

export default SearchForm
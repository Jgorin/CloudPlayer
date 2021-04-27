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
    setFormState(defaultFormState)
  }

  return(
    <form onSubmit={handleSubmitWrapper}>
      <input type="text" name="searchValue" id="searchValue" onChange={handleStateChange} value={formState.searchValue}/>
      <input type="submit" className="button" value="Search"/>
    </form>
  )
}

export default SearchForm
import React, { useState } from "react"

const defaultFormState = {
  searchValue: ""
}

const SearchBar = props => {
  const [formState, setFormState] = useState(defaultFormState)

  const handleStateChange = event => {
    setFormState({
      ...formState,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    try{
      const response = await fetch("/api/v1/users/search", {method: "POST", body: JSON.stringify(formState)})
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedResponse = await response.json()
      console.log(parsedResponse)
      setFormState(defaultFormState)
    }
    catch(err){
      console.log(err)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" name="searchValue" id="searchValue" onChange={handleStateChange}/>
      <input type="submit" value="Search"/>
    </form>
  )
}

export default SearchBar
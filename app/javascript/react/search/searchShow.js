import React, { useState } from "react"

import SearchForm from "./searchForm"
import SearchResults from "./searchResults"

const SearchShow = props => {
  const [results, setResults] = useState([])

  const handleSubmit = async(formValue) => {
    try{
      const response = await fetch("/api/v1/users/search?" + new URLSearchParams({searchValue: formValue}))
      if(!response.ok){
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedResponse = await response.json()
      setResults(parsedResponse)
      setFormState(defaultFormState)
    }
    catch(err){
      console.log(err)
    }
  }

  return(
    <div>
      <SearchForm handleSubmit ={handleSubmit}/>
      <SearchResults results={results}/>
    </div>
  )
}

export default SearchShow

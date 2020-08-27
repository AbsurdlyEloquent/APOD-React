import React from 'react'

function SearchBar() {
  return (
    <form onSubmit={handler}>
      <input type='text' placehoder='Enter a date' />
      <input type='submit' value='Submit' />
    </form>
  )
}

function handler(e) {
  e.preventDefault()
  
}

export default SearchBar

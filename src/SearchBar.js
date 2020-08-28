import React from 'react'

function SearchBar(props) {
  //for setting today's date as the max date
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0!
  let yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd
  }
  if(mm<10){
    mm='0'+mm
  }
  today = yyyy+'-'+mm+'-'+dd;

  return (
    <form onSubmit={e=>props.handler(e)} class="form">
      <input type='date' min='1995-06-16' max={today}/>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default SearchBar

import React from 'react'
import './SearchBar.css'

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
    {/* 1995 is the first day of the APOD api */}
    {/* This input type is not supported by safari and IE
      It falls back to a text input that only accepts yyyy-mm-dd */}
      <input class="date" type='date' min='1995-06-16' max={today} placeholder="yyyy-mm-dd" required pattern="\d{4}-\d{2}-\d{2}"/>
      <input class="submit" type='submit' value='Submit' />
    </form>
  )
}

export default SearchBar

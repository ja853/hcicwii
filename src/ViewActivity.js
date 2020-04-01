import React from "react";
import "./App.css";
import './book.css'


export function ViewActivity() {
  return(
    <div className="App">
      <div className="second-title">
        <h1 id="second-title">YOUR ACTIVITY DETAILS</h1>
        <div className="red-line"/>
        <p id="subheading">View details of the activity you're booked into below.</p>
      </div>

      <ActivityDetails/>

      <button className="Login-button"><a className="backLink" href="/myActivities">Go Back</a></button>

    </div>
  )

}

function ActivityDetails(){
  return (
    <div className="Activity-details">
      <p id="subheading"><b>Gardening Session</b><br/>Tuesday 13th of May<br/>From 09:00am to 10:00am</p>
      <button id="delete-button">Delete Booking</button>
    </div>
  )
}
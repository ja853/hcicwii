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
    <div>
      <p>Content here. can use existing css files</p>
    </div>
  )

}
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="first-title">
        <ul>
          <li id="Wellbeing-tag">WELLBEING</li> 
          <li id="Services-tag">SERVICES</li> 
        </ul>
        </div>
        <div className="logo">
          <img id="bath-logo" alt="Bath Logo" src={require("../src/BathLogo.png")} />
        </div>
      </header>
      <div className="App-body">
          <div className="main-container">
            <div className="second-title">
              <h1 id="second-title">WELLBEING ACTIVITIES</h1>
              <div className="red-line">
                hello
              </div>
              <p id="subheading">We run a number of activities to help you improve your wellbeing. All activities are free but do require booking. <b> Select</b> from the activities below to see what <b>sessions</b> are <b>available</b> for each activity.</p>
            </div>
            <div className="activities-container">
                <button id="button-gs" type="button">Gardening Sessions (GS)</button>
                <button id="button-dw" type="button">Dog Walking (DW)</button>
                <button id="button-cc" type="button">Cooking Classes (CC)</button>
                <button id="button-tcr" type="button">Talk Club - Running (TCR)</button>
                <button id="button-cw" type="button">Counselling Workshops (CW)</button>
                <button id="button-asg" type="button">Autism Social Group (ASG)</button>
                <button id="button-ds" type="button">Drop-in Sessions (DS)</button>
            </div>
            <div className="filter-container">
              <button id="show-all" type="button">Show All</button>
              <button id="my-bookings" type="button">My Bookings</button>
            </div>
            <table className="Calendar">
              <tr>
                <th id="hour-tag">Hours</th>
                <th id="day-tag">Monday</th>
                <th id="day-tag">Tuesday</th>
                <th id="day-tag">Wednesday</th>
                <th id="day-tag">Thursday</th>
                <th id="day-tag">Friday</th>
                <th id="day-tag">Saturday</th>
                <th id="day-tag">Sunday</th>
              </tr>
              <tr><th id="time">7:00-8:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><th id="time">8:00-9:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><th id="time">9:00-10:00</th><td></td><td id="dw">(DW)</td><td></td><td></td><td id="ds">(DS)</td><td></td><td></td></tr>
              <tr><th id="time">10:00-11:00</th><td id="tcr">(TCR)</td><td id="gs">(GS)</td><td></td><td></td><td id="cc">(CC)</td><td></td><td></td></tr>
              <tr><th id="time">11:00-12:00</th><td></td><td></td><td></td><td id="asg">(ASG)</td><td></td><td></td><td></td></tr>
              <tr><th id="time">12:00-13:00</th><td id="cc">(CC)</td><td id="cw">(CW)</td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><th id="time">13:00-14:00</th><td></td><td></td><td id="tcr">(TCR)</td><td></td><td></td><td id="ds">(DS)</td><td id="asg">(ASG)</td></tr>
              <tr><th id="time">14:00-15:00</th><td></td><td id="cc">(CC)</td><td></td><td id="gs">(GS)</td><td></td><td id="tcr">(TCR)</td><td></td></tr>
              <tr><th id="time">15:00-16:00</th><td id="gs">(GS)</td><td></td><td></td><td id="asg">(ASG)</td><td></td><td id="cw">(CW)</td><td></td></tr>
              <tr><th id="time">16:00-17:00</th><td></td><td></td><td></td><td></td><td id="dw">(DW)</td><td></td><td></td></tr>
              <tr><th id="time">17:00-18:00</th><td></td><td id="cw">(CW)</td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><th id="time">18:00-19:00</th><td></td><td></td><td></td><td id="gs">(GS)</td><td></td><td id="dw">(DW)</td><td></td></tr>
              <tr><th id="time">19:00-20:00</th><td id="tcr">(TCR)</td><td></td><td id="ds">(DS)</td><td></td><td></td><td></td><td></td></tr>
              <tr><th id="time">20:00-21:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><th id="time">21:00-22:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              <tr><th id="time">22:00-23:00</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            </table>
          </div>
      </div>
      <div className="footer">
              <h2 id="footer-tag">Contact</h2>
              <h2> | </h2>
              <h2 id="footer-tag">Main Site</h2>
            </div>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
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
              <p id="subheading">We run a number of activities to help you improve your wellbeing. All activities are free but do require booking. Have a look below at what <b>sessions</b> are <b>available</b> for each activity.</p>
            </div>
            <div className="activities-container">
                <button type="button">Gardening Sessions</button>
                <button type="button">Dog Walking</button>
                <button type="button">Cooking Classes</button>
                <button type="button">Talk Club - Running</button>
                <button type="button">Counselling Workshops</button>
                <button type="button">Autism Social Group</button>
                <button type="button">Drop-in Sessions</button>
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
              <tr><th id="time">7:00-8:00</th></tr>
              <tr><th id="time">8:00-9:00</th></tr>
              <tr><th id="time">9:00-10:00</th></tr>
              <tr><th id="time">10:00-11:00</th></tr>
              <tr><th id="time">11:00-12:00</th></tr>
              <tr><th id="time">12:00-13:00</th></tr>
              <tr><th id="time">13:00-14:00</th></tr>
              <tr><th id="time">14:00-15:00</th></tr>
              <tr><th id="time">15:00-16:00</th></tr>
              <tr><th id="time">16:00-17:00</th></tr>
              <tr><th id="time">17:00-18:00</th></tr>
              <tr><th id="time">18:00-19:00</th></tr>
              <tr><th id="time">19:00-20:00</th></tr>
              <tr><th id="time">20:00-21:00</th></tr>
              <tr><th id="time">21:00-22:00</th></tr>
              <tr><th id="time">22:00-23:00</th></tr>
            </table>
            <div className="footer">
              <h2>Contact</h2>
              <h2>Main Site</h2>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;

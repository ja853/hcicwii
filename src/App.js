import React from 'react';
import './App.css';
import './buttons.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UoBathLogo from './BathLogo.png'
import {Book} from "./Book";

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
          <img id="bath-logo" alt="Bath Logo" src={UoBathLogo} />
        </div>

      </header>

      <div className="App-body">
        <div className="main-container">

          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/book">
                <Book />
              </Route>

            </Switch>
          </Router>

        </div>
      </div>




      <div className="footer">
        <h2 id="footer-tag"><a className="formattedLink" href={"https://www.bath.ac.uk/professional-services/wellbeing-service/"}>Contact Us</a></h2>
        <h2> | </h2>
        <h2 id="footer-tag"><a className="formattedLink" href={"https://www.bath.ac.uk/professional-services/wellbeing-service/"}>Main Site</a></h2>
      </div>

    </div>
  );
}

function ActivityButtons(){
  return (
    <div>
    <div className="activities-container">
      <div><input id="gs" type="checkbox"/><label htmlFor="gs" >Gardening Sessions</label></div>
      <div><input id="dw" type="checkbox"/><label htmlFor="dw" >Dog Walking</label></div>
      <div><input id="cc" type="checkbox"/><label htmlFor="cc" >Cooking Classes</label></div>
      <div><input id="tcr" type="checkbox"/><label htmlFor="tcr" >Talk Club</label></div>
      <div><input id="cw" type="checkbox"/><label htmlFor="cw" >Counselling</label></div>
      <div><input id="asg" type="checkbox"/><label htmlFor="asg" >Autism Social</label></div>
      <div><input id="ds" type="checkbox"/><label htmlFor="ds" >Drop-in Session</label></div>
    </div>

    <div className="filter-container">
      <button id="show-all" type="button">Show All</button>
      <button id="my-bookings" type="button">My Bookings</button>
    </div>
    </div>
  )
}

function Calendar() {
  return (
    <div className="calendar-container">
      <h3 id="prev">&#10094;</h3>
      <table className="Calendar">
        <tr>
          <td id="year-tag" colspan="8">May 2020</td>
        </tr>
        <tr>
          <th id="hour-tag">Time</th>
          <th id="day-tag">Monday<br/>12</th>
          <th id="day-tag">Tuesday<br/>13</th>
          <th id="day-tag">Wednesday<br/>14</th>
          <th id="day-tag">Thursday<br/>15</th>
          <th id="day-tag">Friday<br/>16</th>
          <th id="day-tag">Saturday<br/>17</th>
          <th id="day-tag">Sunday<br/>18</th>
        </tr>

        <tr> <th id="time">7:00-8:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>
        <tr> <th id="time">8:00-9:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">9:00-10:00</th> <td/>

          <td id="dw"><div><label htmlFor="dw"><a href="/book">DW</a></label></div></td>

          <td/> <td/> <td id="ds">(DS)</td> <td/> <td/>
        </tr>

        <tr> <th id="time">10:00-11:00</th> <td id="tcr">(TCR)</td><td id="gs">(GS)</td> <td/> <td/> <td id="cc">(CC)</td> <td/> <td/> </tr>
        <tr> <th id="time">11:00-12:00</th> <td/> <td/> <td/> <td id="asg">(ASG)</td> <td/> <td/> <td/> </tr>
        <tr> <th id="time">12:00-13:00</th> <td id="cc">(CC)</td> <td id="cw">(CW)</td> <td/> <td/> <td/> <td/> <td/> </tr>
        <tr> <th id="time">13:00-14:00</th> <td/> <td/> <td id="tcr">(TCR)</td> <td/> <td/> <td id="ds">(DS)</td> <td id="asg">(ASG)</td> </tr>
        <tr> <th id="time">14:00-15:00</th> <td/> <td id="cc">(CC)</td> <td/> <td id="gs">(GS)</td> <td/> <td id="tcr">(TCR)</td> <td/> </tr>
        <tr> <th id="time">15:00-16:00</th> <td id="gs">(GS)</td> <td/> <td/> <td id="asg">(ASG)</td> <td/> <td id="cw">(CW)</td> <td/> </tr>
        <tr> <th id="time">16:00-17:00</th> <td/> <td/> <td/> <td/> <td id="dw">(DW)</td> <td/> <td/> </tr>
        <tr> <th id="time">17:00-18:00</th> <td/> <td id="cw">(CW)</td> <td/> <td/> <td/> <td/> <td/> </tr>
        <tr> <th id="time">18:00-19:00</th> <td/> <td/> <td/> <td id="gs">(GS)</td> <td/> <td id="dw">(DW)</td> <td/> </tr>
        <tr> <th id="time">19:00-20:00</th> <td id="tcr">(TCR)</td><td/><td id="ds">(DS)</td><td/> <td/> <td/> <td/> </tr>
        <tr> <th id="time">20:00-21:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>
        <tr> <th id="time">21:00-22:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>
        <tr> <th id="time">22:00-23:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>
      </table>
      <h3 id="next">&#10095;</h3>
    </div>
  )
}

function Home(){
  return (
    <div>
      <div className="second-title">
        <h1 id="second-title">WELLBEING ACTIVITIES</h1>
        <div className="red-line"/>
        <p id="subheading">We run a number of activities to help you improve your wellbeing. All activities are free but do require booking. <b>Select</b> from the activities below to see what <b>sessions</b> are <b>available</b> for each activity.</p>
      </div>

      <ActivityButtons/>
      <Calendar/>
    </div>

  )
}


export default App;

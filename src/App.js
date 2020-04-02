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
import {MyBookings} from './MyBookings'
import {ViewActivity} from './ViewActivity';
import {BookForCounselling} from './bookForCounselling'


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

              <Route path="/BookForCounselling">
                <BookForCounselling />
              </Route>

              <Route path="/myActivities">
                <MyBookings />
              </Route>

              <Route path="/viewDetails">
                <ViewActivity />
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

function GSclicked() {
  let bodyStyles = document.body.style;
  bodyStyles.setProperty('--gsColour','red');
}

function DWclicked() {
  let bodyStyles = document.body.style;
  bodyStyles.setProperty('--dwColour','rgb(206, 0, 189)');
}

function CCclicked() {
  let bodyStyles = document.body.style;
  bodyStyles.setProperty('--ccColour','rgb(1, 44, 175)');
}

function TCRclicked() {
  let bodyStyles = document.body.style;
  bodyStyles.setProperty('--tcrColour','rgb(240, 216, 1)');
}

function CWclicked() {
  let bodyStyles = document.body.style;
  bodyStyles.setProperty('--cwColour','rgb(255, 153, 94)');
}

function ASGclicked() {
  let bodyStyles = document.body.style;
  bodyStyles.setProperty('--asgColour','green');
}

function DSclicked() {
  let bodyStyles = document.body.style;
  bodyStyles.setProperty('--dsColour','rgb(94, 97, 110)');
}

function ChangeAllClicked(){
  console.log("fart");
  let bodyStyles = document.body.style;
  bodyStyles.setProperty('--gsColour','red');
  bodyStyles.setProperty('--dwColour','rgb(206, 0, 189)');
  bodyStyles.setProperty('--ccColour','rgb(1, 44, 175)');
  bodyStyles.setProperty('--tcrColour','rgb(240, 216, 1)');
  bodyStyles.setProperty('--cwColour','rgb(255, 153, 94)');
  bodyStyles.setProperty('--asgColour','green');
  bodyStyles.setProperty('--dsColour','rgb(94, 97, 110)');
}

function ActivityButtons(){
  return (
    <div>
    <div className="activities-container">
      <div><input id="gs" type="checkbox" onClick={GSclicked}/><label htmlFor="gs" >Gardening Sessions</label></div>
      <div><input id="dw" type="checkbox" onClick={DWclicked}/><label htmlFor="dw" >Dog Walking</label></div>
      <div><input id="cc" type="checkbox" onClick={CCclicked}/><label htmlFor="cc" >Cooking Classes</label></div>
      <div><input id="tcr" type="checkbox" onClick={TCRclicked}/><label htmlFor="tcr" >Talk Club</label></div>
      <div><input id="cw" type="checkbox" onClick={CWclicked}/><label htmlFor="cw" >Counselling</label></div>
      <div><input id="asg" type="checkbox" onClick={ASGclicked}/><label htmlFor="asg" >Autism Social</label></div>
      <div><input id="ds" type="checkbox" onClick={DSclicked}/><label htmlFor="ds" >Drop-in Session</label></div>
    </div>

    <div className="activities-container2" > {/*className="filter-container"*/}
{/*      <button id="show-all" type="button" onClick={ChangeAllClicked}>Show All</button>
      <button id="my-bookings" type="button">My Bookings</button>*/}
      <input id="show-all" type="checkbox"/><label onClick={ChangeAllClicked} className="showAllLabel">Show All</label>
      <input id="show-all" type="checkbox" onClick={ChangeAllClicked}/><label className="showAllLabel"><a className="myBookingsLink" href="/myActivities">My Bookings</a></label>
    </div>
    </div>
  )
}

function CalElement(props) {
  let counselling = props.txt;
  if (counselling==="Counselling"){
    return ( <div><label className={props.cn}><a className="calLink" href="/BookForCounselling">{props.txt}</a></label></div> )
  }else {
    return ( <div><label className={props.cn}><a className="calLink" href="/book">{props.txt}</a></label></div> )
  }
}

function Calendar() {
  return (
    <div className="calendar-container">
      <h3 id="prev">&#10094;</h3>
      <table className="Calendar">
        <tr>
          <td id="year-tag" colSpan="8">May 2020</td>
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

        <tr> <th id="time">9:00-10:00</th> <td/> <td id="gs"><CalElement cn={"gsLabel"} txt={"Gardening"}/></td> <td/> <td/> <td id="ds"><CalElement cn={"dsLabel"} txt={"Drop In"}/></td> <td/> <td/> </tr>

        <tr> <th id="time">10:00-11:00</th> <td id="tcr"><CalElement cn={"tcrLabel"} txt={"Talk Club"}/></td> <td id="gs"><CalElement cn={"gsLabel"} txt={"Gardening"}/></td> <td/> <td/> <td id="cc"><CalElement cn={"ccLabel"} txt={"Cooking"}/></td> <td/> <td/> </tr>

        <tr> <th id="time">11:00-12:00</th> <td/> <td/> <td/> <td id="asg"><CalElement cn={"asgLabel"} txt={"Autism"}/></td> <td/> <td/> <td/> </tr>

        <tr> <th id="time">12:00-13:00</th> <td id="cc"><CalElement cn={"ccLabel"} txt={"Cooking"}/></td> <td id="cw"><CalElement cn={"cwLabel"} txt={"Counselling"}/></td> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">13:00-14:00</th> <td/> <td/> <td id="tcr"><CalElement cn={"tcrLabel"} txt={"Talk Club"}/></td> <td/> <td/> <td id="ds"><CalElement cn={"dsLabel"} txt={"Drop In"}/></td> <td id="asg"><CalElement cn={"asgLabel"} txt={"Autism"}/></td> </tr>

        <tr> <th id="time">14:00-15:00</th> <td/> <td id="cc"><CalElement cn={"ccLabel"} txt={"Cooking"}/></td> <td/> <td id="gs"><CalElement cn={"gsLabel"} txt={"Gardening"}/></td> <td/> <td id="tcr"><CalElement cn={"tcrLabel"} txt={"Talk Club"}/></td> <td/> </tr>

        <tr> <th id="time">15:00-16:00</th> <td id="gs"><CalElement cn={"gsLabel"} txt={"Gardening"}/></td> <td/> <td/> <td id="asg"><CalElement cn={"asgLabel"} txt={"Autism"}/></td> <td/> <td id="cw"><CalElement cn={"cwLabel"} txt={"Counselling"}/></td> <td/> </tr>

        <tr> <th id="time">16:00-17:00</th> <td/> <td/> <td/> <td/> <td id="dw"><CalElement cn={"dwLabel"} txt={"Dog Walk"}/></td> <td/> <td/> </tr>

        <tr> <th id="time">17:00-18:00</th> <td/> <td id="cw"><CalElement cn={"cwLabel"} txt={"Counselling"}/></td> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">18:00-19:00</th> <td/> <td/> <td/> <td id="gs"><CalElement cn={"gsLabel"} txt={"Gardening"}/></td> <td/> <td id="dw"><CalElement cn={"dwLabel"} txt={"Dog Walk"}/></td> <td/> </tr>

        <tr> <th id="time">19:00-20:00</th> <td id="tcr"><CalElement cn={"tcrLabel"} txt={"Talk Club"}/></td><td/><td id="ds"><CalElement cn={"dsLabel"} txt={"Drop In "}/></td><td/> <td/> <td/> <td/> </tr>

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

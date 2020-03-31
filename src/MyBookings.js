import React from "react";
import "./App.css";
import './book.css'


export function MyBookings() {
  return(
    <div className="App">
      <div className="second-title">
        <h1 id="second-title">YOUR ACTIVITES</h1>
        <div className="red-line"/>
        <p id="subheading">View the activities you're booked into here.</p>
      </div>

    <MyCalendar/>

    </div>
  )

}

function CalElement(props) {
  return (
    <div><label className={props.cn}><a className="calLink" href="/book">{props.txt}</a></label></div>
  )
}

function MyCalendar() {
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

        <tr> <th id="time">9:00-10:00</th> <td/> <td id="gs"><CalElement cn={"gsLabel"} txt={"Gardening"}/></td> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">10:00-11:00</th> <td id="tcr"><CalElement cn={"tcrLabel"} txt={"Talk Club"}/></td> <td/> <td/> <td/> <td id="cc"><CalElement cn={"ccLabel"} txt={"Cooking"}/></td> <td/> <td/> </tr>

        <tr> <th id="time">11:00-12:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">12:00-13:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">13:00-14:00</th> <td/> <td/> <td/> <td/> <td/> <td id="ds"><CalElement cn={"dsLabel"} txt={"Drop In"}/></td> <td/> </tr>

        <tr> <th id="time">14:00-15:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">15:00-16:00</th> <td/> <td/> <td/> <td id="asg"><CalElement cn={"asgLabel"} txt={"Autism"}/></td> <td/> <td id="cw"><CalElement cn={"cwLabel"} txt={"Counselling"}/></td> <td/> </tr>

        <tr> <th id="time">16:00-17:00</th> <td/> <td/> <td/> <td/> <td id="dw"><CalElement cn={"dwLabel"} txt={"Dog Walk"}/></td> <td/> <td/> </tr>

        <tr> <th id="time">17:00-18:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">18:00-19:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">19:00-20:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">20:00-21:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">21:00-22:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>

        <tr> <th id="time">22:00-23:00</th> <td/> <td/> <td/> <td/> <td/> <td/> <td/> </tr>

      </table>
      <h3 id="next">&#10095;</h3>
    </div>
  )
}
import React, {Component} from "react";
import "./App.css";
import './book.css'

export function Book() {
  return(
    <div className="App">
      <div className="second-title">
        <h1 id="second-title">BOOKING FORM</h1>
        <div className="red-line"/>
        <p id="subheading">Please enter your details below to get booked into the activity.</p>
      </div>

      <RegisterForm/>

    </div>
  )

}


class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {firstName: '',
      lastName: '',
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
    /*this.setState({value1: event.target.value1});*/ // KEEP ME FOR REFERENCE
  }

  handleSubmit(event) {
    console.log("firstName: " + this.state.firstName);
    console.log("lastName: " + this.state.lastName);
    console.log("username: " + this.state.username);

    // TODO input validation - here?
    console.log(this.state.firstName.length);
    let valid = true;
    if (this.state.firstName.length === 0
      || this.state.lastName.length === 0
      || this.state.username.length === 0) {
      window.alert("Please fill in all fields");
      valid = false;
    }

    event.preventDefault();
    if (valid) {
      window.alert("You are booked into this activity!");
    }
  }

  render() {
    return (
      <div>
        <p><b>REGISTER</b></p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" className="Input-box" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/> <br/> <br/>
          <input type="text" name="lastName" className="Input-box" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/> <br/> <br/>
          <input type="text" name="username" className="Input-box" placeholder="Bath username" value={this.state.username} onChange={this.handleChange}/> <br/> <br/>
          <button type="submit" value="Submit" className="Login-button">Book</button> <br/> <br/>
          <button className="Login-button"><a className="backLink" href="/">Go Back</a></button>
        </form>
      </div>
    );
  }

}
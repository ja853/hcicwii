import React, {Component} from "react";
// import "./App.css";
// import './book.css';
import './slider.css';

export function BookForCounselling() {
  return(
    <div className="App">
      <div className="second-title">
        <h1 id="second-title">BOOKING FORM</h1>
        <div className="red-line"/>
        <p id="subheading">Please enter your details below to get booked into the activity.</p>
      </div>

      <RegisterForm />

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
          <div>
            Preferred Gender of Counsellor:
            <select id="gender">
              <option value="0">Choose option</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Non-Binary</option>
              <option value="4">No preference</option>
            </select>
          </div>
          <div>
            Preferred Age of Counsellor:
            <select id="age">
              <option value="0">Choose option</option>
              <option value="1">18-29</option>
              <option value="2">30-39</option>
              <option value="3">40-49</option>
              <option value="4">50+</option>
              <option value="5">No preference</option>
            </select>
          </div>
          <div>
            Preferred Ethnicity of Counsellor:
            <select id="ethnicity">
              <option value="0">Choose option</option>
              <option value="1">White British</option>
              <option value="2">Asian</option>
              <option value="3">Black</option>
              <option value="4">Other</option>
              <option value="5">No preference</option>
            </select>
          </div>
          <br/>
          Slide for recurring booking
          <LoginButton/>
          <button type="submit" value="Submit" className="Login-button">Book</button> <br/> <br/>
          <button className="Login-button"><a className="backLink" href="/">Go Back</a></button>
        </form>
      </div>
    );
  }

}

function LoginButton() {
  return (
    <div>

      <label className="switch">
        <input type="checkbox" id="logRegToggle"/>
        <span className="slider round"/>
      </label>
    </div>
  );
}


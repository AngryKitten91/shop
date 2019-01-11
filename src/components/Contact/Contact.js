import React, { Component } from "react";

import "./Contact.scss";
export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="c-contact">
        <h3>Contact Us</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="c-contact__section">
              <label>First Name</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>

            <div className="c-contact__section">
              <label>Last Name</label>
              <input
                onChange={this.handleChange}
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>

            <div className="c-contact__section">
              <label>Email</label>
              <input
              onChange={this.handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
              />
            </div>

            <div className="c-contact__section">
              <label>Subject</label>
              <textarea
              onChange={this.handleChange}
                id="subject"
                name="subject"
                placeholder="Write something.."
              />
            </div>

            <input className="contact-button" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

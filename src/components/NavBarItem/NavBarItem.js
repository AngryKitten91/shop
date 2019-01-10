import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class NavBarItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, adress } = this.props.data;

    return (
      <div>
        <Link to={`/${adress}`}>{name}</Link>
      </div>
    );
  }
}

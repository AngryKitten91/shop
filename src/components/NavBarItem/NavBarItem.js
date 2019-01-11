import React, { Component } from "react";
import { Link } from "react-router-dom";

import './NavBarItem.scss';

export default class NavBarItem extends Component {

  render() {
    const { name, adress } = this.props.data;

    return (
      <div className="c-navbar__item">
        <Link to={`/${adress}`}>{name}</Link>
      </div>
    );
  }
}

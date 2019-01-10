import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductButton.scss";

export default class ProductButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Link to={`/products/${this.props.data}`}>Check Product</Link>
      </div>
    );
  }
}

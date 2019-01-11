import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ProductButton.scss";

export default class ProductButton extends Component {
  
  render() {
    return (
      <div className="c-product__button">
        <Link to={`/products/${this.props.data}`}>Check Product</Link>
      </div>
    );
  }
}

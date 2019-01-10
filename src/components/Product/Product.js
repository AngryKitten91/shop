import React, { Component } from "react";
import "./Product.scss";

export default class Product extends Component {
  render() {
    const { data, productId } = this.props;
    const product = data.find(({ uuid }) => {
      return uuid === productId;
    });

    if (!product) {
      return (
        <div>
          <p>No such product</p>
        </div>
      );
    }

    const {
      uuid,
      name,
      price,
      category,
      description,
      promotion,
      quantity,
      imageUrl
    } = product;

    return (
      <div>
        <div>{name}</div>
        <div>{category}</div>
        <div>{price}</div>
        <div>{promotion}</div>
        <div>{quantity}</div>
        <div>{description}</div>
      </div>
    );
  }
}

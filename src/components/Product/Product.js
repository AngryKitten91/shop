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
        <div className="c-product">
          <p>No such product</p>
        </div>
      );
    }

    const {
      name,
      price,
      category,
      description,
      promotion,
      quantity,
      imageUrl
    } = product;

    return (
      <div className="c-product">
        <img src={imageUrl} alt="" />
        <div className="c-product__info">
          <h3>{name}</h3>
          {promotion ? (
            <p className="c-promo">PROMOTION!</p>
          ) : (
            <p>REGULAR PRICE</p>
          )}
          {quantity > 0 ? (
            <p>Quantity: {quantity}</p>
          ) : (
            <p className="c-availability">PRODUCT NOT AVAILABLE</p>
          )}
          <div>Price: {price}$</div>
          <div>Category: {category}</div>
          <h3>Product description:</h3>
          <div>{description}</div>
        </div>
      </div>
    );
  }
}

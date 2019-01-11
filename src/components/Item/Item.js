import React, { Component } from "react";
import "./Item.scss";

import ProductButton from "components/ProductButton";

export default class Item extends Component {
  
  render() {
    const {
      imageUrl,
      name,
      price,
      category,
      quantity,
      promotion
    } = this.props.data;
    const { productId } = this.props;

    return (
      <div className="c-item">
        <img src={imageUrl} alt={name} />
        <div className="c-item__content">
          <h3>{name}</h3>
          {promotion ? <p className="c-promo">PROMOTION!</p> : <p>REGULAR PRICE</p>}
          {quantity > 0 ? (
            <p>Quantity: {quantity}</p>
          ) : (
            <p className="c-availability">PRODUCT NOT AVAILABLE</p>
          )}
          
          <p>Price: {price}$</p>
          <p>Category: {category}</p>
          <ProductButton data={productId} />
        </div>
      </div>
    );
  }
}

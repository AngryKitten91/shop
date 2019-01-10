import React, { Component } from "react";
import "./Item.scss";

import ProductButton from "components/ProductButton";

export default class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      imageUrl,
      name,
      price,
      category,
      description,
      quantity,
      promotion
    } = this.props.data;
    const { productId } = this.props;
    
    return (
      <div className="o-flex__child c-item">
        <img src={"imageUrl"} alt={name} />
        <h3>{name}</h3>
        {quantity > 0 ? (
          <p>{quantity}</p>
        ) : (
          <p className="c-availability">PRODUCT NOT AVAILABLE</p>
        )}
        {promotion ? <p className="c-promo">PROMOTION!</p> : <p> </p>}
        <p>{price}$</p>
        <p>{category}</p>
        <ProductButton data={productId}/>
      </div>
    );
  }
}

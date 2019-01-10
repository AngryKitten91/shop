import React, { Component, Fragment } from "react";
import "./Products.scss";

import Item from "components/Item";
import Filter from "components/Filter";
import Product from 'components/Product'

import products from "products/products";

const categories = products.reduce((acc, { category }) => {
  if (!acc.includes(category)) {
    acc.push(category);
  }
  return acc;
}, []);

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      sortAsc: true,
      category: "all",
      promotion: false,
      availability: false
    };
  }

  handleChange = e => {
    const { value, name, type, checked } = e.target;

    this.setState({
      [name]: type === "checkbox" ? checked : value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleSort = () => {
    this.setState(prevState => ({
      sortAsc: !prevState.sortAsc
    }));
  };

  render() {
    const { sortAsc } = this.state;
    const { match: {params : {productId}} } = this.props;

    if(productId && productId !== undefined){
      return <Product productId={productId} data={products}/>
    }

    return (
      <Fragment>
        <Filter
          data={this.state}
          handlers={{
            handleSort: this.handleSort,
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange
          }}
          categories={categories}
        />

        <div className="o-flex">
          {products
            .filter(elem => {
              const { productName } = this.state;
              const { name } = elem;

              return (
                name.toLowerCase().includes(productName.toLowerCase()) ||
                !productName
              );
            })
            .filter(elem => {
              const { category } = this.state;
              const { category: elemCategory } = elem;
              if (category === "all") {
                return elem;
              }
              return category === elemCategory;
            })
            .filter(elem => {
              const { promotion } = this.state;
              const { promotion: elemPromotion } = elem;
              if (promotion) {
                return elemPromotion;
              }
              return elem;
            })
            .filter(elem => {
              const { availability } = this.state;
              const { quantity } = elem;
              if (availability) {
                return quantity > 0;
              }
              return elem;
            })
            .sort(({ name: nameA }, { name: nameB }) => {
              return sortAsc
                ? nameA.localeCompare(nameB)
                : nameB.localeCompare(nameA);
            })
            .map((elem, i) => {
              return <Item key={i} productId={elem.uuid} data={elem} />;
            })}
        </div>
      </Fragment>
    );
  }
}

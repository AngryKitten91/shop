import React, { Component, Fragment } from "react";
import "./Filter.scss";

import Checkbox from "components/Checkbox";

export default class Filter extends Component {
  
  render() {
    const {
      productName,
      availability,
      sortAsc,
      category,
      promotion
    } = this.props.data;

    const { handleSort, handleChange, handleSubmit } = this.props.handlers;
    const { categories } = this.props;
    const checkboxes = [
      {
        name: "promotion",
        desc: "Promotion",
        checked: promotion,
        onChange: handleChange
      },
      {
        name: "availability",
        desc: "Availability",
        checked: availability,
        onChange: handleChange
      },
      {
        name: "order",
        desc: "Sort by order",
        checked: sortAsc,
        onChange: handleSort
      }
    ];

    return (
      <Fragment>
        <form onSubmit={handleSubmit}>
          <input
            name="productName"
            placeholder="Enter name to filter"
            onChange={handleChange}
            value={productName}
          />
          <select value={category} onChange={handleChange} name="category">
            <option value="all">All products</option>
            {categories.map(category => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>

          {checkboxes.map((elem, i) => {
            return <Checkbox key={i} data={elem} />;
          })}
        </form>
      </Fragment>
    );
  }
}

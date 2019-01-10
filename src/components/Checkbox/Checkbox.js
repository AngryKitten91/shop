import React, { Component, Fragment } from "react";
import "./Checkbox.scss";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, checked, onChange, desc } = this.props.data;
    return (
      <label>
        {desc}
        <input
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </label>
    );
  }
}

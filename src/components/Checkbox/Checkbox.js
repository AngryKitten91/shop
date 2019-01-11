import React, { Component } from "react";
import "./Checkbox.scss";

export default class Checkbox extends Component {
  
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

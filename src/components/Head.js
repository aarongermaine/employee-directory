import React, { Component } from "react";
import "../styles/Head.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <span>
          <p>Use the filter or search box for more specific results!</p>
        </span>
      </div>
    );
  }
}

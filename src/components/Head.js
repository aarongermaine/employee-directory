import React, { Component } from "react";
import "../styles/Head.css";

export default class Header extends Component {
  render() {
    return (
      <div className="head">
        <h1>Employee Directory</h1>
        <span>
          <p>Filter by Name or use the search box for more specific results!</p>
        </span>
      </div>
    );
  }
}

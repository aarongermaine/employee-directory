import React, { Component } from "react";

import DetailTable from "./DetailTable";

import API from "../utils/API";

import Navbar from "./Navbar";

import "../styles/DetailScope.css";

export default class DetailScope extends Component {
  // sort users
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [{}],
  };

  // sort headings
  headings = [
    {
      name: "Image",
      width: "10%",
    },
    {
      name: "Name",
      width: "10%",
    },
    {
      name: "DOB",
      width: "10%",
    },
    {
      name: "Phone",
      width: "20%",
    },
    {
      name: "Email",
      width: "20%",
    },
  ];

  sortHandler = (heading) => {
    // sort based on state options picked
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend",
      });
    } else {
      this.setState({
        order: "descend",
      });
    }

    const sortCompare = (a, b) => {
      // if else to determine applied filter
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    // define constant to apply sorting to state
    const userSort = this.state.filteredUsers.sort(sortCompare);
    // set the state to the user sort
    this.setState({
      filteredUsers: userSort,
    });
  };

  // on search change target the filter
  handleSearchChange = (event) => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({
      filteredUsers: filteredList,
    });
  };

  componentDidMount() {
    API.getUsers().then((results) => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <Navbar handleSearchChange={this.handleSearchChange} />
        <div className="data-area">
          <DetailTable
            headings={this.headings}
            users={this.state.filteredUsers}
            sortHandler={this.sortHandler}
          />
        </div>
      </>
    );
  }
}

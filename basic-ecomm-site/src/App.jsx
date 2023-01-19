import React, { Component } from "react";
import Navbar from "./Navbar";
import Main from "./CustomersList";
import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ShoppingCart />
      </React.Fragment>
    );
  }
}

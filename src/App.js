import React, { Component } from "react";
import Header from "./components/layout/Header";
import Routes from "./Routes";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes />
      </React.Fragment>
    );
  }
}

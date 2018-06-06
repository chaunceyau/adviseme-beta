import React, { Component } from "react";
import { Container } from "semantic-ui-react";

// Component imports
import Header from "./components/layout/Header";
import Routes from "./Routes";
import { containerStyle } from "./util/Constants";
import BreadcrumbView from "./components/layout/BreadcrumbView";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container style={containerStyle}>
          <BreadcrumbView />
          <Routes />
        </Container>
      </React.Fragment>
    );
  }
}

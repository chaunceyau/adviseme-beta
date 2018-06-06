import React, { Component } from "react";
import { Breadcrumb, Segment } from "semantic-ui-react";

const sections = [
  { key: "home", content: "Home", link: true },
  { key: "plan", content: "Plan", link: true },
  { key: "requirements", content: "Requirements", link: true },
  { key: "aesthetic_interpretation", content: "Aesthetic Interpretation", active: true }
];

const BreadcrumbExampleProps = () => (
  <Breadcrumb icon="right angle" sections={sections} />
);

class BreadcrumbView extends Component {
  render() {
    return (
      <Segment>
        <BreadcrumbExampleProps />
      </Segment>
    );
  }
}

export default BreadcrumbView;

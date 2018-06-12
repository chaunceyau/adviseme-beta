import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";

//
import DegreeRequirementGroup from "./DegreeRequirement";

class DegreeRequirementCategoryGroup extends Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    let index = -1;
    let subrequirements = [];
    console.log(JSON.stringify(this.props));
    return (
      <Accordion fluid styled>
        {this.props.requirements.map(requirement => {
          index++;
          subrequirements = [];
          return [
            <Accordion.Title
              active={activeIndex === index}
              index={index}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              {requirement.name}
            </Accordion.Title>,
            <Accordion.Content active={activeIndex === index}>
              {/**
               * Map subrequirements to an array so they can be added to a group (accordion)
               * */

              requirement.requirements.map(req => {
                subrequirements.push(req);
              })}
              <DegreeRequirementGroup requirements={subrequirements} />
            </Accordion.Content>
          ];
        })}
      </Accordion>
    );
  }
}

class DegreeRequirementCategory extends Component {
  render() {
    return <Accordion.Title>category</Accordion.Title>;
  }
}

export default DegreeRequirementCategoryGroup;

import React, { Component } from "react";
import { Accordion, Icon, Segment, Message, Card } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";

//
import { requirementCategories } from "../../../api/api";
import CourseOptionsPage from "./options/CourseOptionsView";
import AddedCourseBanner from "./AddedCourseBanner";

export default class DegreeRequirementsView extends Component {
  state = { activeIndex: null };

  /**
   * Clicking an individual requirement.. used for handling the accordion effect
   * to show different categories
   */

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  renderRequirementCategories() {
    // accordion index
    let index = 0;

    /**
     * Map through each requirement category and create an accordion for the category
     */
    return requirementCategories.map(category => {
      index++;

      /**
       * If no subrequirements show, most likely an error..
       */
      if (!category.subrequirements)
        return (
          <div>
            No subrequirements are showing.. this is most likely an error.
            Contact your advisor for assistance.
          </div>
        );

      /**
       * If subrequirements do exist, return them..
       */
      return [
        /**
         * Title of each accordion section. Displays the requirement category title.
         */
        <Accordion.Title
          active={this.state.activeIndex === index}
          index={index}
          onClick={this.handleClick}
          key={category.name}
        >
          <Icon name="dropdown" />
          {category.name}
        </Accordion.Title>,

        /**
         * The hidden content within the accordion. Initially the content is hidden.. content below is displayed when accordion section is active
         */

        <Accordion.Content
          active={this.state.activeIndex === index}
          key={category.name + "r"}
        >
          <Segment.Group>
            {/**
             * For each category, map through subrequirements..create a clickable segment for users to
             * navigate to the course options page for the particular subrequirement
             */
            category.subrequirements.map(subrequirement => {
              return [
                <Segment key={subrequirement.name}>
                  {subrequirement.completed ? (
                    <Icon color="green" name="check circle outline" />
                  ) : (
                    <Icon color="grey" name="remove circle outline" />
                  )}

                  <span
                    style={{
                      color: subrequirement.completed ? "green" : "grey"
                    }}
                  >
                    {subrequirement.name}
                  </span>
                </Segment>
              ];
            })
            /**
             * End of loop through subrequirements
             */
            }
          </Segment.Group>
        </Accordion.Content>
      ];
    });
  }

  render() {
    return (
      <React.Fragment>
        <AddedCourseBanner />
        <h3 style={{ marginTop: 0 }}>
          Select courses to fulfill the following requirements
        </h3>
        <Accordion fluid styled>
          {this.renderRequirementCategories()}
        </Accordion>
      </React.Fragment>
    );
  }
}

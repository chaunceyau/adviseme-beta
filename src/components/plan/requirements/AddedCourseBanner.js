import React, { Component } from "react";
import { Message } from "semantic-ui-react";

/**
 * After course is added to plan, user returns to requirements page. This banner
 * will show visual indicator notifying user if successful.
 */
class AddedCourseBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: "ART 100",
      success: true,
      visible: true
    };
  }
  /**
   * Handle dismissing the banner
   */
  handleDismiss = () => {
    this.setState({ visible: false });
  };

  /**
   * If course is succesfully added, show green banner notifying user
   */
  handleCourseSuccessfullyAdded() {
    return (
      <Message positive onDismiss={this.handleDismiss}>
        <Message.Header>Course successfully added to your plan!</Message.Header>
        <p>
          The course <b>{this.state.courseName}</b> was added to your plan (plan
          coursework section of the page)
        </p>
      </Message>
    );
  }

  /**
   * If course is not added, show red banner notifying user
   */
  handleCourseFailedToAdd() {
    return (
      <Message negative onDismiss={this.handleDismiss}>
        <Message.Header>Course was NOT be added to your plan!</Message.Header>
        <p>
          The course <b>{this.state.courseName}</b> could not be added to your
          plan. Try again or contact your advisor.
        </p>
      </Message>
    );
  }

  /**
   * Display notification for user after course attempted to add
   */
  render() {
    if (!this.state.visible) return <div />;
    return this.state.success
      ? this.handleCourseSuccessfullyAdded()
      : this.handleCourseFailedToAdd();
  }
}

export default AddedCourseBanner;

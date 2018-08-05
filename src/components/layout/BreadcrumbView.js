import React, { Component } from 'react'
import { Breadcrumb, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { toTitleCase } from '../../constants/utilities'

class BreadcrumbView extends Component {
  render() {
    let sections = [{ key: 'home', content: 'Home', link: true }]
    this.props.location.pathname
      .replace(/^\/|\/$/g, '')
      .split('/')
      .forEach((value, index, arr) => {
        // if last value in array, make it the active index in breadcrumb
        if (arr.length - 1 === index) sections.push({ key: value, content: toTitleCase(value.replace(/_/g, ' ')), active: true })
        // if not last value, simply add as a link
        else sections.push({ key: value, content: toTitleCase(value.replace(/_/g, ' ')), link: true })
      })
    return (
      <Segment>
        <Breadcrumb icon="right angle" sections={sections} />
      </Segment>
    )
  }
}

export default withRouter(BreadcrumbView)

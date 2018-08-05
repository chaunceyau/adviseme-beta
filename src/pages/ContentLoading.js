import React, { Component } from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export default class ContentLoading extends Component {
  render() {
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader size="medium">Loading</Loader>
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Segment>
    )
  }
}

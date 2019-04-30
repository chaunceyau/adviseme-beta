import React, { Component } from 'react'
import { Card, Icon, Modal, Button } from 'semantic-ui-react'
//
import { replaceUnderscoreWithSpace } from '../../../../util/Utilities'

export default class AddAcademicUnit extends Component {
  state = {
    open: false
  }
  closeModal = () => {
    this.setState({ open: false })
  }
  render() {
    return (
      <Modal
        open={this.state.open}
        onClose={this.closeModal}
        trigger={
          <Card
            // TODO: UPDATE THIS
            onClick={() => {
              this.setState({ open: true })
            }}
            style={{
              height: '100%',
              backgroundColor: 'gainsboro',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 250
            }}
          >
            <Icon name="add circle" size="huge" style={{ color: 'white', marginBottom: '1rem' }} />
            <span style={{ color: 'white', fontWeight: '600', fontSize: '1.35rem' }}>Add Semester</span>
          </Card>
        }
      >
        <Modal.Header>Add an academic unit to your plan</Modal.Header>
        <Modal.Content>
          {this.props.availableUnits.map(unit => {
            return (
              <Button
                key={unit}
                style={{ marginTop: 10, marginRight: 10 }}
                disabled={this.props.academicUnits.some(existingUnits => existingUnits.name === unit)}
                onClick={() => {
                  this.props.addAcademicUnit({ name: unit, courses: [] })
                  this.setState({ open: false })
                }}
              >
                {replaceUnderscoreWithSpace(unit)}
              </Button>
            )
          })}
        </Modal.Content>
      </Modal>
    )
  }
}

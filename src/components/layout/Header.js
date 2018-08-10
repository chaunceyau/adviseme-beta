import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { store } from '../../store'
import { setAcademicUnits } from '../../actions'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'plan'
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu fluid stackable inverted style={{ borderRadius: 0, backgroundColor: '#512888' }}>
        {/* <Menu.Item>
          <img src={require("../../logo.png")} centered="true" alt="logo" />
        </Menu.Item> */}
        <Menu.Item
          header
          style={{
            paddingRight: '2em',
            paddingLeft: '3em',
            textAlign: 'center'
          }}
        >
          <h2>AdviseMe-</h2>
        </Menu.Item>
        <Menu.Item name="plan" active={activeItem === 'plan'} onClick={this.handleItemClick} as={Link} to={'/plan'}>
          Plan
        </Menu.Item>

        <Menu.Item name="audit" active={activeItem === 'audit'} onClick={this.handleItemClick}>
          Audit
        </Menu.Item>

        <Menu.Item name="explore" active={activeItem === 'explore'} onClick={this.handleItemClick} as={Link} to={'/explore'}>
          Explore
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="sign-up" active={activeItem === 'sign-up'} onClick={this.handleItemClick}>
            Sign-Up
          </Menu.Item>
          <Menu.Item name="login" active={activeItem === 'login'} onClick={this.handleItemClick}>
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header

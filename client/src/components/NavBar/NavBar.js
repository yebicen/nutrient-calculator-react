import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Hello User</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/recipes">Manage Recipes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ingredients">Manage Ingredients</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users/admin">Admin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users/profile">Profile</NavLink>
              </NavItem>
          
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Nav vertical>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/recipes">Manage Recipes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ingredients">Manage Ingredients</NavLink>
          </NavItem>
        </Nav>
        <hr />

        <Nav vertical>
          <NavLink href="/admin">Admin</NavLink> 
          <NavLink href="/login">Login</NavLink> 
        </Nav>

        <hr />
        <Nav vertical>
          <NavLink href="/contact">Contact</NavLink> 
        </Nav>
        

      </div>
    );
  }
}


export default NavBar;
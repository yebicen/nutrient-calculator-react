import React from 'react';
import {NavLink,Nav, NavItem, Col, Row, Container  } from 'reactstrap';




class NavBar extends React.Component {
  render() {
    return (
      <Container fluid>
      <Row>
      <Col xs="3">
        <Nav className="navbar navbar-light bg-light" vertical>
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


        <Nav className="navbar navbar-light bg-light" vertical>
          <NavLink href="/admin">Admin</NavLink> 
          <NavLink href="/login">Login</NavLink> 
        </Nav>


         <Nav className="navbar navbar-light bg-light" vertical>
          <NavLink href="/contact">Contact</NavLink> 
        </Nav>
        
        </Col>
        </Row>
      </Container>
    );
  }
}


export default NavBar;
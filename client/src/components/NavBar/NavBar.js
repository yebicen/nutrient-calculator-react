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
// import { Router, Route, Link } from 'react-router-dom';
import history from '../../history';
import UserAPI from "../../utils/UserAPI";

console.log(history);
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loggedIn: false,
      isAdmin: false,
      firstname: "",
    };
  }

  componentDidMount() {
      
    UserAPI.findUser()
    .then(res => {
        console.log(res.data[0].role);
        console.log(res.data[0].id);      
        this.setState({ 
           loggedIn: res.data[0].id? true : false,
           isAdmin: res.data[0].role ==="admin"? true : false,
           firstname: res.data[0].firstname
          //  userId:  res.data[0].id
        });     
        console.log(this.state);
    })
    .catch(err => console.log(err));
    
  }
 
  logoutHandler =(e) => {
    e.preventDefault();
    UserAPI.logoutUser()
    .then(res => {      
      history.replace('/');
      console.log(history);
    })
    .catch(err => console.log(err));
    this.setState({ 
      loggedIn: false,
      isAdmin: false,
      firstname: "" 
   });
  }
  
  

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {user, isAdmin, loggedIn, firstname} = this.state;
    return (
      <div>
        <Navbar color="warning" light expand="md">
        {loggedIn &&<NavbarBrand href="/">Hello, {firstname}</NavbarBrand>}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              
              {loggedIn &&
              <NavItem>
                <NavLink href="/recipes">Recipes</NavLink>
              </NavItem>
              }
              {loggedIn &&
              <NavItem>
                <NavLink href="/ingredients">Ingredients</NavLink>
              </NavItem>
              }
              <NavItem>
                {loggedIn?
                <NavLink href="/users/sign-out" onClick={e=>this.logoutHandler(e)}>Logout</NavLink>
                  :
                <NavLink href="/login" onClick={e=>this.loginHandler(e)}>Login</NavLink>
                }
              </NavItem>
              {loggedIn &&
              <NavItem>
                <NavLink href="/admin">Admin</NavLink>
              </NavItem>
              }
              {loggedIn &&
              <NavItem>
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>             
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
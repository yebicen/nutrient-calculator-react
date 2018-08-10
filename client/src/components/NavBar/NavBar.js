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
import UserAPI from "../../utils/UserAPI";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loggedIn: false,
      isAdmin: false,
      user: "",
    };
  }

  componentDidMount() {
      
    UserAPI.findUser()
    .then(res => {
        console.log(res.data[0].role);
        console.log(res.data);
        if (res.data.id >= 0) {
        this.setState({ 
           loggedIn: true,
           isAdmin: res.data[0].role ==="admin"? true : false,
           user: res.data[0].firstname
          //  userId:  res.data[0].id
        });
      }
    })
    .catch(err => console.log(err));
    
  }
 
  logoutHandler =(e) => {
    e.preventDefault();
    UserAPI.logoutUser()
    .then(res => {      
      
    })
    .catch(err => console.log(err));
    this.setState({ 
      loggedIn: false,
      isAdmin: false,
      user: "" 
   });
  }  

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const {user, isAdmin, loggedIn} = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Hello {this.state.user}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/recipes">Recipes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ingredients">Ingredients</NavLink>
              </NavItem>
              <NavItem>
                {loggedIn?
                <NavLink href="/users/sign-out" onClick={e=>this.logoutHandler(e)}>Logout</NavLink>
                  :
                <NavLink href="/users/login" >Login</NavLink>
                }
              </NavItem>
              <NavItem>
                <NavLink href="/users/admin">Admin</NavLink>
              </NavItem>
              {loggedIn &&
              <NavItem>
                <NavLink href="/users/profile">Profile</NavLink>
              </NavItem>             
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
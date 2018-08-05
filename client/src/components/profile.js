import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import UserAPI from "../utils/UserAPI";

export default class Profile extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        user: "",
        // userid: "",
        // firstname: "",
        // lastname: "",
        // username: "",
        // role: "",
        // email: "",
        // password: ""
      };
      
      this.saveUser = this.saveUser.bind(this);
      this.handleProfileChange = this.handleProfileChange.bind(this);
    }
  
  componentDidMount() {
      
      UserAPI.findUser()
      .then(res => {
          console.log(res);
          this.setState({ user: res.data[0]});
      })
      .catch(err => console.log(err));
      console.log(this.state.user);
  }

  saveUser = (param) =>event => {
    event.preventDefault();
    console.log(param);

    UserAPI.updateUser(param)
    .then(res => {
      console.log("saved");
      console.log(res);
      
     })
    .catch(err => console.log(err));
     window.location.reload(); 
  }

  handleProfileChange = event => {
    // event.preventDefault();
    const field = event.target.name;
    const userValue = event.target.value;
    const updatedUser = this.state.user;
    updatedUser.field = userValue;   
    this.setState({
        // [event.target.name]:event.target.value
        user: updatedUser       
        });         
  };

  render() {
    const {user} = this.state;
    return (
        <div className="container"> 
              
          <h1>{user.username}'s Porfile</h1>
          <Form>
            <FormGroup>
              <Label>First Name</Label>
              <Input value={user.firstname}  readOnly />  
            </FormGroup>
            <FormGroup> 
              <Label>Last Name</Label>
              <Input value={user.lastname} readOnly />
            </FormGroup>
            <FormGroup>
              <Label>Username</Label>
              <Input type="text" value={user.username} name="username" onChange={this.handleProfileChange} />
            </FormGroup>
            <FormGroup>
              <Label>Role</Label>  
              <Input value={user.role}  readOnly /> 
            </FormGroup>
            <FormGroup> 
              <Label>Password: </Label>     
              <Input type="text" value={user.password} name="password" onChange={this.handleProfileChange} />
            </FormGroup>
            <FormGroup>
              <Label>Email: </Label>   
              <Input type="text" value={user.email} name="email" onChange={this.handleProfileChange} />
            </FormGroup>
              <Button onClick={this.saveUser({
                username: user.username,
                id: user.id,
                password: user.password,
                email: user.email
              })}>Save Changes</Button>
          </Form>  
      
        </div>
      )
    }

  }
import React from 'react';
import { Table } from 'reactstrap';
import Adduser from "./adduser";
import API from "../utils/UserAPI";
import Userlist from "./userlist";
import Userlistedit from "./userlistedit";


export default class Example extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          editmode: false,
          userList: [],
          userData: ""
        };
        console.log(this.state);
        this.edituser = this.edituser.bind(this);
        this.deleteuser = this.deleteuser.bind(this);
        this.saveuser = this.saveuser.bind(this);
        this.adduser = this.adduser.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
      }
    
    CompnentDidMount() {
        UserAPI.getUsers()
        .then(res => {
            console.log(res.data);
            this.setState({ userList: res.data});
        })
        .catch(err => console.log(err));
    }
    

    edituser =event=> {
        this.setState({
          editmode: true
        })
    }
    
    saveuser = (param)=>event => {
        event.preventDefault();
        console.log(param);
    }

    adduser = event =>{
        event.preventDefault();
    }

    handleUserChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value
            });
    };


  render() {
    const isEditMode = this.state.editmode;
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>User ID</th>
            <th>Role</th>
            <th>Password</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        isEditMode? 
        <Userlist users={this.state.Userlist} edituser={this.edituser} deleteuser={this.edituser}/> :
        <Userlistedit users={this.state.Userlist} saveuser={this.saveuser} /> 
      </Table>

      )
   }

}
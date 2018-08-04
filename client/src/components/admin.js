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
          userData: "",
          firstname: "",
          lastname: "",
          username: "",
          role: "",
          email: "",
          password: ""
        };
        this.edituser = this.edituser.bind(this);
        this.deleteuser = this.deleteuser.bind(this);
        this.saveuser = this.saveuser.bind(this);
        this.adduser = this.adduser.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
      }
    
    ComponentDidMount() {
        UserAPI.getUsers()
        .then(res => {
            console.log(res.data);
            this.setState({ userList: res.data});
        })
        .catch(err => console.log(err));
    }
    

    editUser =event=> {
        this.setState({
          editmode: true
        })
    }
    
    saveUser = (param)=>event => {
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

    adduUser =(param) => event =>{
        event.preventDefault();
        console.log(param);

        API.addUser(param)
        .then(res => {
          console.log("added");
          console.log(res);
         })
      .catch(err => console.log(err));
       window.location.reload(); 
    }
    
    deleteUser =(param) => event =>{
      console.log(param);
      API.deleteArticles(param)
      .then(res => {
        console.log("deleted");
        console.log(res);      
       })
      .catch(err => console.log(err));
       window.location.reload(); 
    }

    handleUserChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value
            });
    };


  render() {
    const isEditMode = this.state.editmode;
    const {firstname, lastname, username, role, password, email} = this.state;
    return (
     <div className="container">
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
        <Userlist users={this.state.Userlist} edituser={this.editUser} deleteuser={this.editUser}/> :
        <Userlistedit users={this.state.Userlist} saveuser={this.saveUser} handleUserChange={this.handleUserChange}/> 
       </Table>
      {/*<AddUser firstname={firstname} lastname={lastname} username={username} role={role} email={email} password={email} adduser={this.addUser} handleUserChange={this.handleUserChange}/>*/}
     </div>

      )
   }

}
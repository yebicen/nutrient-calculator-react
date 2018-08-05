import React from 'react';
import { Table } from 'reactstrap';
import Adduser from "./adduser";
import UserAPI from "../utils/UserAPI";

import Userrow from "./userrow";
import Edituserrow from "./edituserrow";

export default class Admin extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          editModeID: "",
          userList: [],
          firstname: "",
          lastname: "",
          username: "",
          role: "",
          email: "",
          password: ""
        };
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
      }
    
    componentDidMount() {
        UserAPI.getUsers()
        .then(res => {
            console.log(res.data);
            this.setState({ userList: res.data});
        })
        .catch(err => console.log(err));
    }
    
  
    editUser = (param) => event => {
        event.preventDefault();
        console.log(param);
        const userData = this.state.userList[param.key];
        this.setState({
          editModeID: param.id,
          firstname: userData.firstname,
          lastname: userData.lastname,
          username: userData.username,
          id: userData.id,
          role: userData.role,
          password: userData.password,
          email: userData.email
        });
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
       this.setState({
        editModeID: "",
        firstname: "",
        lastname: "",
        username: "",
        id: "",
        role: "",
        password: "",
        email: ""
      });
      
    }

    addUser =(param) => event =>{
        event.preventDefault();
        console.log(param);

        UserAPI.addUser(param)
        .then(res => {
          console.log("added");
          console.log(res);
          
         })
      .catch(err => console.log(err));
      this.setState({
        editModeID: "",
        firstname: "",
        lastname: "",
        username: "",
        id: "",
        role: "",
        password: "",
        email: ""
      });
       window.location.reload(); 
    }
    
    deleteUser =(param) => event =>{
      console.log(param);
      UserAPI.deleteArticles(param)
      .then(res => {
        console.log("deleted");
        console.log(res);      
       })
      .catch(err => console.log(err));
       window.location.reload(); 
    }

    handleUserChange =  event => {
        // event.preventDefault();
     
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value
            
            });
          
        
    };


  render() {
    

    const {editModeID, firstname, lastname, username, role, password, email, id, userList} = this.state;
    return (
    <div>
     <h1>Current Users</h1>
     <form>
       <div className="form-group">
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
        <tbody>
         {userList.map((user, i) => (user.id === editModeID) ?
          <Edituserrow 
              key = {i}
              num = {i}
              firstname = {firstname}
              lastname = {lastname}
              username = {username}
              id = {id}
              role = {role}
              password = {password}
              email = {email} 
              saveuser = {this.saveUser}
              handleUserchange = {this.handleUserChange}
              />
          :
          <Userrow 
              key = {i}
              num = {i}
              firstname = {user.firstname}
              lastname = {user.lastname}
              username = {user.username}
              id = {user.id}
              role = {user.role}
              password = {user.password}
              email = {user.email} 
              edituser = {this.editUser} 
              deleteuser = {this.deleteUser} />
         )}
        </tbody>
       
        
        {/*
           <Userlist editModeID={editModeID} users={userList} edituser={this.editUser} deleteuser={this.editUser} saveuser={this.saveUser} handleUserchange={this.handleUserChange}/>
          {isEditMode? (
          <Userlistedit users={userList} saveuser={this.saveUser} handleUserChange={this.handleUserChange}/> 
          ): (       
          <Userlist users={userList} edituser={this.editUser} deleteuser={this.editUser}/>
          )}
        */}
     
        </Table>
       </div>
      </form>
      {/*<AddUser firstname={firstname} lastname={lastname} username={username} role={role} email={email} password={email} adduser={this.addUser} handleUserChange={this.handleUserChange}/>*/}
      <Adduser 
            firstname={firstname} 
            lastname={lastname} 
            username={username} 
            role={role} 
            email={email} 
            password={email} 
            adduser={this.addUser} 
            handleUserchange={this.handleUserChange}/>
     
     </div>
    )
   }

}
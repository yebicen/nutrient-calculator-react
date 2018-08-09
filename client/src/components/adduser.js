import React from "react";
import { Table } from 'reactstrap';
import './admin.css'


const Adduser = props => (
  <div>          
    <h5>Add New User</h5>
    <form>
      <div className="form-group">
      <Table striped>
      <thead className="userheader">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Role</th>
          <th>Password</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="userrow">
       <tr>
        <td><input type="text" name="firstname" value={props.firstname} onChange={props.handleUserchange} /></td>
        <td><input type="text" name="lastname" value={props.lastname} onChange={props.handleUserchange} /></td>
        <td><input type="text" name="username" value={props.username} onChange={props.handleUserchange} /></td>
        <td><input type="text" name="role" value={props.value} onChange={props.handleUserchange} /></td>          
        <td><input type="text" name="password" value={props.password} onChange={props.handleUserchange} /></td>
        <td><input type="text" name="email" value={props.email} onChange={props.handleUserchange} /></td>
        <td>
          <button type="submit" value="submit" onClick={props.adduser({
            firstname: props.firstname,
            lastname: props.lastname,
            username: props.username,
            role: props.role,
            password: props.password,
            email: props.email
          })}>Add</button>
        </td>
       </tr>
       </tbody>
       </Table>
     </div>
    </form>  
  </div>

);

export default Adduser;
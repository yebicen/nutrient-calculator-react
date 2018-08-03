import React from "react";

const Adduser = props => (
  <div className="container"> 
         
    <h1>Add New User</h1>
    <form>
      <div className="form-group">
      <Table striped>
      <thead>
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
      <tbody>
        <td><input type="text" value={user.firstname} name="firstname" onChange={props.handleUserchange} /></td>
        <td><input type="text" value={user.lastname} name="lastname" onChange={props.handleUserchange} /></td>
        <td><input type="text" value={user.username} name="username" onChange={props.handleUserchange} /></td>
        <td><input type="text" value={user.role} name="role" onChange={props.handleUserchange} /></td>          
        <td><input type="text" value={user.password} name="password" onChange={props.handleUserchange} /></td>
        <td><input type="text" value={user.email} name="email" onChange={props.handleUserchange} /></td>
        <td>
          <button onClick={prop.adduser}>Add</button>
        </td>
       </tbody>
       </Table>
     </div>
    </form>  
  </div>

);

export default Adduser;
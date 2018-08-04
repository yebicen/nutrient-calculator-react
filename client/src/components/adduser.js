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
        <td><input type="text" name="firstname" value={props.firstname} onChange={props.handleUserchange} /></td>
        <td><input type="text" name="lastname" value={props.lastname} onChange={props.handleUserchange} /></td>
        <td><input type="text" name="username" value={props.username} onChange={props.handleUserchange} /></td>
        <td><input type="text" name="role" value={props.value} onChange={props.handleUserchange} /></td>          
        <td><input type="text" name="password" value={props.password} onChange={props.handleUserchange} /></td>
        <td><input type="text" name="email" value={props.email} onChange={props.handleUserchange} /></td>
        <td>
          <button type="submit" value="submit" onClick={prop.adduser({
            firstname: props.firstname,
            lastname: props.lastname,
            username: props.username,
            role: props.role,
            password: props.password,
            email: props.email
          })}>Add</button>
        </td>
       </tbody>
       </Table>
     </div>
    </form>  
  </div>

);

export default Adduser;
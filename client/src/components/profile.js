import React from "react";

const Profile = props => (
  <div className="container"> 
         
    <h1>{props.username}'s Porfile</h1>
    <form>
      <div className="form-group">
        <p>First Name : {user.firstname}     Last Name :{user.lastname}</p>
        <p>User Name :</p>
        <input type="text" value={user.username} name="username" onChange={props.handleUserchange} /><br/>
        <p>Role: {user.role}</p>   
        <p>Password: </p>     
        <input type="text" value={user.password} name="password" onChange={props.handleUserchange} /><br/>
        <p>Email: </p>   
        <input type="text" value={user.email} name="email" onChange={props.handleUserchange} /><br/>
        <button onClick={prop.saveuser}>Save Changes</button>
     </div>
    </form>  
  </div>

);
export default Profile;
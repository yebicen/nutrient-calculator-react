import React from "react";

const Userlist = props => (
 <tbody>
    {props.users.map((user, i) => 
        <tr key={i}>
         <th scope="row">{i}</th>
         <td>{user.firstname}</td>
         <td>{user.lastname}</td>
         <td>{user.username}</td>
         <td>{user.id}</td>
         <td>{user.role}</td>          
         <td>{user.password}</td>
         <td>{user.email}</td>
         <td>
             <button onClick={prop.edituser}>Edit</button>
             <button onClick={prop.deleteuser}>Delete</button>
         </td>
       </tr> 
    )}
  </tbody>

)


export default Userlist;
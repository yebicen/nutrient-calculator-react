import React from "react";

const Userlistedit = props => (
 <tbody>
    {props.users.map((user, i) => 
        <tr key={i}>
            <th scope="row">{i}</th>
            <td><input type="text" value={user.firstname} name="firstname" onChange={props.handleUserchange} /></td>
            <td><input type="text" value={user.lastname} name="lastname" onChange={props.handleUserchange} /></td>
            <td><input type="text" value={user.username} name="username" onChange={props.handleUserchange} /></td>
            <td><input type="text" value={user.id} name="id" onChange={props.handleUserchange} /></td>
            <td><input type="text" value={user.role} name="role" onChange={props.handleUserchange} /></td>          
            <td><input type="text" value={user.password} name="password" onChange={props.handleUserchange} /></td>
            <td><input type="text" value={user.email} name="email" onChange={props.handleUserchange} /></td>
            <td>
              <button type="submit" onClick={props.saveuser({
                firstname: user.firstname,
                lastname: user.lastname,
                username: user.username,
                // id: user.id,
                role: user.role,
                password: user.password,
                email: user.email
            })}>Save</button>             
            </td>
           </tr>
    )}
  </tbody>

)


export default Userlistedit;
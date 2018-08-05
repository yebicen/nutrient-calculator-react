import React from "react";

const Userlist = props => (
 <tbody>
    {props.users.map((user, i) => (user.id === props.editModeID) ?
       <tr key={i}>
            <th scope="row">{i}</th>
            <td><input type="text" value={user.firstname} name="firstname" onChange={props.handleUserchange({key: i})} /></td>
            <td><input type="text" value={user.lastname} name="lastname" onChange={props.handleUserchange({key: i})} /></td>
            <td><input type="text" value={user.username} name="username" onChange={props.handleUserchange({key: i})} /></td>
            <td><input type="text" value={user.id} name="id" onChange={props.handleUserchange({key: i})} /></td>
            <td><input type="text" value={user.role} name="role" onChange={props.handleUserchange({key: i})} /></td>          
            <td><input type="text" value={user.password} name="password" onChange={props.handleUserchange({key: i})} /></td>
            <td><input type="text" value={user.email} name="email" onChange={props.handleUserchange({key: i})} /></td>
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
           </tr> :
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
                  <button onClick={props.edituser({
                    id: user.id,
                    key: i
                  })}>Edit</button>
                  <button onClick={props.deleteuser({
                    id: user.id
                  })}>Delete</button>
              </td>
            </tr>
    )}
 </tbody>

)


export default Userlist;
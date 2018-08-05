import React from "react";

const Edituserrow = props => (

       <tr>
            <th scope="row">{props.num}</th>
            <td><input type="text" value={props.firstname} name="firstname" onChange={props.handleUserchange} /></td>
            <td><input type="text" value={props.lastname} name="lastname" onChange={props.handleUserchange} /></td>
            <td><input type="text" value={props.username} name="username" onChange={props.handleUserchange} /></td>
            <td>{props.id}</td>
            <td><input type="text" value={props.role} name="role" onChange={props.handleUserchange} /></td>          
            <td><input type="text" value={props.password} name="password" onChange={props.handleUserchange} /></td>
            <td><input type="text" value={props.email} name="email" onChange={props.handleUserchange} /></td>
            <td>
              <button type="submit" onClick={props.saveuser({
                firstname: props.firstname,
                lastname: props.lastname,
                username: props.username,
                id: props.id,
                role: props.role,
                password: props.password,
                email: props.email
            })}>Save</button>             
            </td>
           </tr> 


)


export default Edituserrow;
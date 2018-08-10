import React from "react";

const Userrow = props => (   
           <tr>
             <th scope="row">{props.num}</th>
             <td>{props.firstname}</td>
             <td>{props.lastname}</td>
             <td>{props.username}</td>
             <td>{props.id}</td>
             <td>{props.role}</td>          
             <td>{props.password}</td>
             <td>{props.email}</td>
             <td>
                  <button onClick={props.edituser({
                    id: props.id,
                    key: props.num
                  })}>Edit</button>
             </td>
             <td>
                  <button onClick={props.deleteuser({
                    id: props.id
                  })}>Delete</button>
              </td>
            </tr>
    

)

export default Userrow;
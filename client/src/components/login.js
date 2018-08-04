import React from 'react';
import UserAPI from "../utils/UserAPI";

export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {         
          username: "",
          password: ""
        };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
      }


     handleLoginChange = event => {
         this.setState({
             [event.target.name]: event.target.value
         })
         console.log(this.state);
     }

     handleLoginSubmit = event => {
         event.preventDefault();
         const login = {
             username: this.state.username,
             password: this.state.password
         }
         UserAPI.loginUser(login)
        .then(res => {
          console.log("logged In");
         })
        .catch(err => console.log(err));
      
         this.setState({
             username: "",
             password: ""
         })


     }
     
     render() {

       return (
           <div>
              <form>
                 <label>
                 Userame:
                 <input name = "username" value = {this.state.username} onChange = {this.handleLoginChange} />
                 </label>
                 <label>
                 Password: 
                 <input name = "password" value = {this.state.password} onChange = {this.handleLoginChange} />
                 </label>
                 <button onClick = {this.handleLoginSubmit} >Submit </button>

              </form>
           </div>

       );


     }
    

}
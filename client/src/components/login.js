import React from 'react';
import UserAPI from "../utils/UserAPI";

export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {         
          usernameLgIn: "",
          passwordLgIn: ""
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
             username: this.state.usernameLgIn,
             password: this.state.passwordLgIn
         }
         UserAPI.loginUser(login)
        .then(res => {
          console.log("logged In");
         })
        .catch(err => console.log(err));
      
         this.setState({
             usernameLgIn: "",
             passwordLgIn: ""
         })


     }
     
     render() {

       return (
           <div>
              <form>
                 <label>
                 Userame:
                 <input name = "usernameLgIn" value = {this.state.usernameLgIn} onChange = {this.handleLoginChange} />
                 </label>
                 <label>
                 Password: 
                 <input name = "passwordLgIn" value = {this.state.passwordLgIn} onChange = {this.handleLoginChange} />
                 </label>
                 <button onClick = {this.handleLoginSubmit} >Submit </button>

              </form>
           </div>

       );


     }
    

}
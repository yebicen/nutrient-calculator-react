import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                   <label for="usernameLgIn" className="mr-sm-2">Userame: </label>                
                   <input id="usernameLgIn" name = "usernameLgIn" value = {this.state.usernameLgIn} onChange = {this.handleLoginChange} />                
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                   <label for="passwordLgIn" className="mr-sm-2">Password: </label>               
                   <input id="passwordLgIn" name = "passwordLgIn" value = {this.state.passwordLgIn} onChange = {this.handleLoginChange} />               
                </FormGroup>
                <button onClick = {this.handleLoginSubmit} >Submit </button>

              </Form>
           </div>

       );


     }
    

}
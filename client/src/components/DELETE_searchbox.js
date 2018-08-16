import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import UserAPI from "../utils/SearchAPI";

export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {         
          searchquery: "",
          findresult: false
        };
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
      }


     handleSearchChange = event => {
         this.setState({
             [event.target.name]: event.target.value
         })
         console.log(this.state);
     }

     handleSearchSubmit = event => {
         event.preventDefault();
         const userquery = {
             query: this.state.searchquery,
             
         }
         //or go to the webpage /search/combined-search?query="+this.state.searchquery
         //create a component for retrieve the query string from url (this.props.location.search)* query-string npm
         //doing searchUser API and displaying the results
         searchAPI.searchUser(userquery)
        .then(res => {
          console.log("found");
          this.setState({
            findresult: true          
           })
         })
        .catch(err => console.log(err));
      
         this.setState({
             searchquery: "",            
         })


     }
     
     render() {

       return (
           <div>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                   <label for="userSearch" className="mr-sm-2">Userame: </label>                
                   <input id="userSearch" name ="searchquery" value = {this.state.searchquery} onChange = {this.handleSearchChange} placeholder="Search for users ..." />                
                </FormGroup>
                <button onClick = {this.handleSearchSubmit}>Search</button>
              </Form>
            
            



           </div>

       );


     }
    

}
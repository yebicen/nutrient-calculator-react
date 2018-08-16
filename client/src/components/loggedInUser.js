import React from 'react';
import UserAPI from "../../utils/UserAPI";


export default class LoggedInUser extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loggedIn: false,
      isAdmin: false,
      firstname: "",
    };
  }

  componentDidMount() {
      
    UserAPI.findUser()
    .then(res => {
        console.log(res.data[0].role);
        console.log(res.data[0].id);      
        this.setState({ 
           loggedIn: res.data[0].id? true : false,
           isAdmin: res.data[0].role ==="admin"? true : false,
           firstname: res.data[0].firstname
          //  userId:  res.data[0].id
        });     
        console.log(this.state);
    })
    .catch(err => console.log(err));
    
  }

}
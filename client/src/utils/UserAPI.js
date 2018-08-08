import axios from "axios";
// import $ from 'jquery';
export default {

  getUsers: function () {
    return axios.get("/users/admin");
  },

  deleteUser: function (data) {
    // console.log(data.id);
    return axios.delete("/users/api/users/"+data.id, data);
  },

  addUser: function (data) {
    return axios.post("/users/api/users",  data );
  },

  findUser: function () {
    
    return axios.get("/users/profile");
  },

  updateUser: function (data) {
    console.log(data);
    return axios.put("/users/api/users/"+data.id, data );
  },

  loginUser: function(data) {

    return axios.post("/users/login",data);
  }
};




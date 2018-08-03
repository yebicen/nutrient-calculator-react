import axios from "axios";
// import $ from 'jquery';
export default {

  getUsers: function () {
    return axios.get("/admin");
  },

  deleteUser: function (data) {
    // console.log(data.id);
    return axios.delete("/api/users/"+data.id, data);
  },

  addUser: function (data) {
    return axios.post("/api/users",  data );
  },

  findUser: function (data) {
    return axios.get("/profile");
  },

  updateUser: function (data) {
    return axios.post("/api/users/"+data.id, data );
  }
};




import axios from "axios";
// import $ from 'jquery';
export default {

  searchUsers: function (data) {
    return axios.get("/search/combined-search?q="+data.query);
  }

}

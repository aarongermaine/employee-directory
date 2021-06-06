import axios from "axios";

// gets users
export default {
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};

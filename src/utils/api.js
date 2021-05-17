// getting api info from https://randomuser.me/documentation#howto using axios npm (make sure to install and import)

import axios from "axios";
const url = "https://randomuser.me/api/?results=60&nat=us";

//fetches users from API- only calling for 60 
export default {
    fetchUsers: function() {
        return axios    
            .get(url)
    }
}
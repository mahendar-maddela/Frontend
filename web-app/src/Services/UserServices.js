import axios from 'axios';

const createUserURL = "http://localhost:8080/api/v1/User/create";
const getUserURL = "http://localhost:8080/api/v1/User";

class UserServices {
    createUser(data){
        return axios.post(createUserURL, data);
    }
   
    getUser(){
        return axios.get(getUserURL);
    }
}

export default new UserServices();

import axios from "axios"

const BASE_URL = 'http://localhost:5000';

const headers = {
    "Content-Type": 'application/json'
}

class UserService {

    add_product(data){
        return axios.post(BASE_URL + '/menu', data, headers)
    }

    get_product(){
        return axios.get(BASE_URL + '/menu', headers)
    }
}

export default new UserService();
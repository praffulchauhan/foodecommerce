import axios from "axios"

const BASE_URL = 'http://localhost:5000';

const headers = {
    "Content-Type": 'application/json'
}

class UserService {

    add_product(data){
        return axios.post(BASE_URL + '/menu', data, headers)
    }

    add_product2(data){
        return axios.post(BASE_URL + '/cart', data, headers)
    }


    get_product(){
        return axios.get(BASE_URL + '/menu', headers)
    }
    get_product2(){
        return axios.get(BASE_URL + '/cart', headers)
    }


}

export default new UserService();
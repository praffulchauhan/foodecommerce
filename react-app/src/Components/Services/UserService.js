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



    find_product(id){
        return axios.get(BASE_URL + '/menu/find/'+ id, headers)
    }

    edit_product(id,data){
        return axios.post(BASE_URL + '/menu/update/'+ id, data, headers )
    }

    delete_product(id){
        return axios.post(BASE_URL + '/menu/'+ id, headers)
    }


}

export default new UserService();
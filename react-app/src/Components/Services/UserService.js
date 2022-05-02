import axios from "axios"

const BASE_URL = 'http://localhost:5000';

const headers = {
    "Content-Type": 'application/json'
}

class UserService {

    // Admin Product
    add_product(data){
        return axios.post(BASE_URL + '/menu', data, headers)
    }
    
    get_product(){
        return axios.get(BASE_URL + '/menu', headers)
    }

    find_product(id){
        return axios.get(BASE_URL + '/menu/find/'+ id, headers)
    }

    edit_product(id,data){
        return axios.post(BASE_URL + '/menu/update/'+ id, data, headers )
    }

    delete_product(id){
        return axios.get(BASE_URL + '/menu/'+ id, headers)
    }

    // CART Product
    add_product2(data,id){
        return axios.post(BASE_URL + '/cart/add/' + id , data, headers)
    }


    get_product2(id){
        return axios.get(BASE_URL + '/cart/' + id, headers)
    }

    delete_productAll(id){
        return axios.get(BASE_URL + '/cart/delete/' + id, headers)
    }

    delete_productOne(id){
        return axios.get(BASE_URL + '/cart/deleteOne/' + id, headers)
    }

    // USER
    find_user(id){
        return axios.get(BASE_URL + '/user/'+ id, headers)
    }

    login_user(data){
        return axios.post(BASE_URL + '/user/login/', data, headers)
    }

    signup_user(data){
        return axios.post(BASE_URL + '/user/signup/', data, headers)
    }

}

export default new UserService();
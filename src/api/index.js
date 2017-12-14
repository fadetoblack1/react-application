import axios from 'axios';

const apiPrefix = 'https://reqres.in/';

export default {
    logIn(data) {
        return axios.post(`${apiPrefix}api/login`, data);
    },

    getUsersList(page){
        return axios.get(`${apiPrefix}api/login?page=${page}`)
    }
}

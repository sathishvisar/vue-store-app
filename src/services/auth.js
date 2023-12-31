import axios from 'axios';


export default {
    userLogin: async function (params) {
        try{
            return await axios.post('https://fakestoreapi.com/auth/login', params)
        } catch (error) {
            throw new Error(error);
        }
    }
}
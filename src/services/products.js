import axios from 'axios';


export default {
    fetchProducts: async function () {
        try{
            return axios.get('https://fakestoreapi.com/products');
        } catch (error) {
            throw new Error(error);
        }
    }
}
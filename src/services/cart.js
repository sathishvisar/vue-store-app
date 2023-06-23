import axios from 'axios';


export default {
    getCartItems: async function () {
        try{
            return await axios.get('https://fakestoreapi.com/carts/1')
        } catch (error) {
            throw new Error(error);
        }
    }
}
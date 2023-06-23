import ProductsService from "@/services/products";
import { actions as ac, mutations as mc } from "@/store/constants/products";

export const state = {
  data: [],
  loading:  false,
  error: null
}

/** Start of getters */
const getters = {
  getProducts: state => state.data,
  isLoading: state => state.loading,
  getError: state => state.error
}

/**** Start of actions *******/
export const actions = {
  [ac.FETCH_PRODUCTS]({commit}) {
    commit(mc.IS_LOADING, true);
    return ProductsService.fetchProducts()
      .then(({ data }) => {
        commit(mc.PRODUCTS, data);
        commit(mc.IS_LOADING, false);
      })
      .catch(error => {
        commit(mc.IS_ERROR, error);
        commit(mc.IS_LOADING, false);
      });
  }
}
/**** End of actions *******/

/**** Start of mutations *******/
export const mutations = {

  [mc.PRODUCTS](state, data) {
      state.data = data;
  },

  [mc.IS_LOADING](state, isLoading) {
    state.loading = isLoading;
  },

  [mc.IS_ERROR](state, error) {
    state.error = error;
  }
  
}
/**** End of mutations *******/


export default {
  state,
  getters,
  actions,
  mutations
};
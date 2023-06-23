import CartService from "@/services/cart";
import { actions as ac, mutations as mc } from "@/store/constants/cart";

export const state = {
  data: [],
  loading:  false,
  error: null
}


/**** Start of actions *******/
export const actions = {
  [ac.FETCH_CART]({commit}) {
    commit(mc.IS_LOADING, true);
    return CartService.getCartItems()
      .then(({ data }) => {
        commit(mc.CART, data);
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

  [mc.CART](state, data) {
      state.data = data.products;
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
  actions,
  mutations
};
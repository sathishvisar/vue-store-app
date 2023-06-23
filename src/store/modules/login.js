import AuthService from "@/services/auth";
import { actions as ac, mutations as mc } from "@/store/constants/login";

export const state = {
  user: null,
  loading:  false,
  error: null
}

/** Start of getters */
const getters = {
  isLoggedin: state => state.user || localStorage.getItem('token')
}

/**** Start of actions *******/
export const actions = {
  [ac.USER_LOGIN]({commit}, params) {
    commit(mc.IS_LOADING, true);
    return AuthService.userLogin(params)
      .then(({ data }) => {
        commit(mc.TOKEN, data.token);
        localStorage.setItem('token', data.token);
        commit(mc.IS_LOADING, false);
      })
      .catch(error => {
        commit(mc.IS_ERROR, error);
        commit(mc.IS_LOADING, false);
      });
  },

  [ac.USER_LOGOUT]({commit}) {
    commit(mc.TOKEN, null);
    localStorage.removeItem('token');
  }

}
/**** End of actions *******/

/**** Start of mutations *******/
export const mutations = {

  [mc.TOKEN](state, data) {
      state.user = data;
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
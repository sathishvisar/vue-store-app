<template>
    <b-modal id="login-modal" hide-footer>
        <template #modal-title>
            User Login
        </template>
        <div class="d-block text-center">
            <b-form-input class="mt-3" v-model="username" placeholder="Username"></b-form-input>
            <b-form-input class="mt-3" v-model="password" placeholder="Password"></b-form-input>
        </div>
        <div class="mt-3 action">
            <b-button class="close" @click="$bvModal.hide('login-modal')">Close Me</b-button>
            <b-button class="login" @click="login">Login</b-button>
        </div>
    </b-modal>
</template>
<script>
import store from "@/store";
import { actions as ac } from '@/store/constants/login';

export default {
  name: "store-login",
  data() {
    return {
        username: 'mor_2314',
        password: '83r5^_'
    }
  },
  methods: {
    async login() {
        await store.dispatch(ac.USER_LOGIN, {
            username: this.username,
            password: this.password
        }).then(()=>{
            this.$bvModal.hide('login-modal')
        })
    }
  }
};
</script>
<style lang="stylus" scoped>
.action {
    text-align: right;
    .close{
        margin-right: 10px;
    }
    .login {

    }
}
</style>

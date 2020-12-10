import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joinUsers: [],
    welcomeMessage: ''
  },
  mutations: {
    SOCKET_welcomeMessage (state,payload) {
      state.welcomeMessage = payload
    },
    addNewUserLogin (state, payload) {
      state.usersLogin.push(payload)
    },
    SOCKET_login (state,payload) {
      console.log(payload,'store')
      state.joinUsers.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})

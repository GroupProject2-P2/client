import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joinUsers: [],
    welcomeMessage: '',
    question: ''
    
  },
  mutations: {
    SOCKET_welcomeMessage (state,payload) {
      state.welcomeMessage = payload
    },
    addNewUserLogin (state, payload) {
      state.usersLogin.push(payload)
    },
    SOCKET_login (state,payload) {
      state.joinUsers.push(payload)
    },
    SOCKET_questions (state, payload) {
      state.question = payload
      console.log(payload, 'from sotre')
    }
  },
  actions: {
  },
  modules: {
  }
})

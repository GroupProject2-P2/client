import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joinUsers: [],
    welcomeMessage: '',
    question: '',
    winners: ''
  },
  mutations: {
    SOCKET_welcomeMessage (state,payload) {
      state.welcomeMessage = payload
    },
    addNewUserLogin (state, payload) {
      state.usersLogin.push(payload)
    },
    SOCKET_login (state,payload) {
      state.joinUsers = payload
    },
    SOCKET_questions (state, payload) {
      state.question = payload
      // console.log(payload, 'from sotre')
    },
    SOCKET_startGame () {
      router.push('/play')
    },
    SOCKET_moveToResult (state, pemenang) {
      state.winners = pemenang
      router.push('/result')
    }
  },
  actions: {
  },
  modules: {
  }
})

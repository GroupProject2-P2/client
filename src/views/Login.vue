<template>
    <div class="container-login card mt-5 pt-5">
        <div class="card-title text-center">
            <h1>{{welcomeMessage}}</h1>
        </div>
        <div class="card-body">
            <form @submit.prevent="insertUser">
                <div class="email mb-3">
                    <input v-model="userName" type="text" name="text" class="container-fluid" placeholder="Insert Username">
                </div>
                <div v-if="joinUsers.length !== 4" class="button-login row">
                  <button class="btn btn-lg btn-primary btn-block mt-2 p-2 rounded-pill">Lets Play</button>
                </div>
                <div v-else class="div">
                  <h1>MAAF RUANGAN SUDAH PENUH</h1>
                  <small>Silahkan Menunggu Sebentar</small>
                </div>
            </form>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    insertUser () {
      localStorage.setItem('username', this.userName)
      this.$socket.emit('login',this.userName)
      this.$router.push('/waitingroom')
      console.log(this.joinUsers)
    }
  },
  computed: {
    ...mapState ({
      welcomeMessage: 'welcomeMessage',
      joinUsers: 'joinUsers'
    })
  }
}
</script>

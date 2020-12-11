<template>
    <div class="container-login card">
        <div class="card-header">
            <h1>{{welcomeMessage}}</h1>
        </div>
        <div class="card-body">
            <form @submit.prevent="insertUser">
                <div class="email mb-3">
                    <h5>Insert Your Name</h5>
                    <input v-model="userName" type="text" name="text" class="container-fluid">
                </div>
                <div v-if="joinUsers.length !== 4" class="button-login row">
                  <button class="btn btn-primary mt-3">Lets Play</button>
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

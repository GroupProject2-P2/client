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
                <div class="button-login row">
                    <button class="btn btn-primary mt-3">Lets Play</button>
                    <div id="emailHelp" class="form-text">
                    </div>
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

<template>
  <div>
    <h3 class="text-white mb-3 mt-0 p-0">Berani Cepat, Harus Benar, Tentukan Pilihanmu!</h3>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <div class="card bg-secondary text-white">
            <h4 class="mb-0">Total </h4>
          </div>
          <div class="card mt-4 bg-success text-white">
            <h2 class="mb-0">Benar :</h2>
            <h2 class="mb-0"><i class="fa fa-check-circle"></i></h2>
          </div>
          <div class="card mt-4 bg-danger text-white">
            <h2 class="mb-0">Salah :</h2>
            <h2 class="mb-0"><i class="fa fa-exclamation-circle"></i></h2>
          </div>
        </div>
        <div class="col-10">
          <div class="row">
            <!-- Player 1 -->
            <div v-for="(player, index) in joinUsers" :key="index" class="col-3">
              <div class="card border-primary" style="">
                <img class="card-img-top img-char p-0" :src="image_player[index]" alt="Card image cap">
                <div class="card-body p-1">
                  <h5 class="card-title">{{ joinUsers[index].username }}</h5>
                  <div class="bg-primary text-white card">
                    <h4>Score</h4>
                  </div>
                  <div class="border-warning card">
                    <h1>{{player.score}}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="container">
      <div class="card border-danger">
        <small class="mt-2">Question</small>
        <h2>{{question.question}} ??</h2>
      </div>
    </div>
    <div class="container mt-3">
      <button @click="jawab('Benar')" class="btn fontbtn btn-success ml-4"><h1>Benar</h1></button> |
      <button @click="jawab('Salah')" class="btn btn-danger fontbtn mr-4"><h1>Salah</h1></button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'GamePlay',
  data () {
    return {
      image_player: [
        "https://ih1.redbubble.net/image.1720409113.7485/st,small,507x507-pad,600x600,f8f8f8.jpg",
        "https://ih1.redbubble.net/image.1720403004.7334/st,small,507x507-pad,600x600,f8f8f8.jpg",
        "https://ih1.redbubble.net/image.1726787262.2958/st,small,507x507-pad,600x600,f8f8f8.jpg",
        "https://ih1.redbubble.net/image.1720457610.8739/st,small,507x507-pad,600x600,f8f8f8.jpg"
      ],
    }
  },
  methods : {
      questionButton () {
          this.$socket.emit('questions')
          console.log(this.question)
      },
      jawab (jawaban) {
        const username = localStorage.getItem('username')
        this.questionButton()
        if (jawaban !== this.question.answer) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: this.question.explain
          })
          this.$socket.emit('jawabanSalah', username)
        } else {
          this.$socket.emit('jawabanBenar', username)
          console.log('test')
        }
        console.log(jawaban)
        console.log(this.joinUsers)
      }
  },
  computed: {
    ...mapState({
      question: 'question',
      joinUsers: 'joinUsers'
    })
  },
  created () {
    this.questionButton()
    
  }
}
</script>

<style>

</style>

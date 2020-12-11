<template>
  <div>
    <h3 class="text-white mb-3 mt-4 p-0">Berani Cepat, Harus Benar, Tentukan Pilihanmu!</h3>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <!-- Player Card -->
            <PlayerCard v-for="(player, index) in joinUsers" :key="index" :player='player' :index='index'></PlayerCard>
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
import PlayerCard from '../components/PlayerCard'

export default {
  name: 'GamePlay',
  components: {
    PlayerCard
  },
  data () {
    return {
      
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

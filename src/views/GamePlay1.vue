<template>
  <div class="game-play">

    <div class="soal container-fluid">
        <div class="row">
            <div class="card col-sm-4 container-fluid" style="width: 18rem;">
                <div class="card-header">
                    <h1>Benar atau salah ??</h1>
                </div>
    
                <div class="card-body">
                    <h2>{{question.question}} ??</h2>
                    <button @click="questionButton">Ubah soal</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card col-sm-4 container-fluid" style="width: 18rem;">
                <div class="card-header">
                    <h1>Skor pemain lain: </h1>
                </div>
    
                <div class="card-body">
                    <ul>
                        <li>Player 1</li>
                        <li>Player 1</li>
                        <li>Player 1</li>
                        <li>Player 1</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="container-product row">
        <div class="card col-sm-4" style="width: 18rem;">
            <div class="card-header">
                <h1> User Name</h1>
            </div>
            <div class="card-body">
                <h2 class="card-title">Score: 50 </h2>

              <button @click="jawab('benar')" class="btn btn-primary ">Benar dong</button>
              <button @click="jawab('salah')"  class="btn btn-danger ">salah dong</button>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GamePlay',
  methods : {
      questionButton () {
          this.$socket.emit('questions', 'tes')
      },
      jawab (jawaban) {
        console.log(jawaban)
      }
  },
  computed: {
    ...mapState({
      question: 'question',
      joinUsers: 'joinUsers'
    })
  }
}
</script>

<style>

</style>
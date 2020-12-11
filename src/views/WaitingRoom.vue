<template>
  <div>
    <div class="div">
      <h1 class="text-white">- Waiting Room -</h1>
    </div>
    <div class="div">
      <h2 class="text-warning">Wait for Another Player to Join</h2>
    </div>
    <div class="container">
      <div class="row">
        <!-- looping -->
        <div v-for="(player, index) in 4" :key="index" class="col-3">
          <div class="card border-primary" style="">
                <img class="card-img-top img-char p-0" v-if="joinUsers[index]" :src="image_player[index]">
                <img class="card-img-top img-char p-0" v-else :src="image_empty">
            <div class="card-body p-1">
              <h5 class="card-title">{{ joinUsers[index] ? joinUsers[index].username : 'Empty' }}</h5>
              <div class="bg-primary text-white card">
                <h4>Status</h4>
              </div>
              <div class="border-warning card">
                <h2>{{ joinUsers[index] ? joinUsers[index].status : 'Waiting'}}</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- looping -->
      </div>
    </div>
    <div class="container mt-4">
      <h1 class="text-white">Wait until for 4 players Joining the Game</h1>
      <div v-if="joinUsers.length === 2">
        <button @click="goToPlay" class="btn btn-success mt-4">Start the Game</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
export default {
  name: 'WaitingRoom',
  data () {
    return {
      image_player: [
        "https://ih1.redbubble.net/image.1720409113.7485/st,small,507x507-pad,600x600,f8f8f8.jpg",
        "https://ih1.redbubble.net/image.1720403004.7334/st,small,507x507-pad,600x600,f8f8f8.jpg",
        "https://ih1.redbubble.net/image.1726787262.2958/st,small,507x507-pad,600x600,f8f8f8.jpg",
        "https://ih1.redbubble.net/image.1720457610.8739/st,small,507x507-pad,600x600,f8f8f8.jpg"
      ],
      image_empty: "https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
    }
  },
  methods: {
    goToPlay () {
      this.$socket.emit('startTheGame')
    }
  },
  computed: {
    ...mapState ({
      joinUsers: 'joinUsers'
    })
  },
  created () {
    Swal.fire({
      icon: 'info',
      title: '<strong>How To Play<strong>',
      width: '70%',
      html: `
      <ul class="text-left border px-5 py-3">
        <li>Game bisa dimulai jika ada <b>4 orang</b> di dalam game</li>
        <li>Setelah game dimulai, nanti akan diminta pilih jawaban <b>Benar atau Salah</b></li>
        <li>Yang paling cepat menjawab dia yang akan mendapatkan Nilai</li>
        <li>Jika pertanyaannya benar terjawab akan mendapatkan nilai 10 jika salah akan dikurangi 3</li>
        <li>Game akan berhenti jika ada player yang mendapatkan <b>score 100</b></li>
      </ul>
      `,
      confirmButtonText: 'OK'
    })
  }
}
</script>

<style>

</style>

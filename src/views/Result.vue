<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <img src="https://thumbs.dreamstime.com/b/congratulations-patriotic-card-design-independence-day-veteran-day-patriot-day-election-day-vector-illustration-patriotic-80747200.jpg" alt="congrats" class="congrats">
      </div>
      <div class="col-6">
        <h1 class="text-white mt-5"><i class="fa fa-child" style="font-size:48px;color:yellow"></i> SELAMAT KEPADA <i class="fa fa-child" style="font-size:48px;color:yellow"></i></h1>
        <h1 class="text-white">{{ winners }}</h1>
        <h2 class="text-white">Untuk Kemenangannya</h2>
      </div>
    </div>
    <button @click="backButton" class="btn btn-warning">Kembali Ke Home</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Result',
  computed: {
    ...mapState({
      winners: 'winners'
    })
  },
  methods: {
    backButton () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>

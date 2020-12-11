<template>
  <div class="container">
    <h1 class="text-white mt-5">Selamat Datang di</h1>
    <img src="https://st-nicholas.cheshire.sch.uk/wp-content/uploads/2017/10/quiz-1170x630.jpg" alt="quizimage" class="home-img">
    <h2 class="text-white mt-4">Siapa Cepat, Siapa Benar, dia Pemenangnya!</h2>
    <button @click="goToLogin" class="text-white btn btn-primary">Click Here To Login</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
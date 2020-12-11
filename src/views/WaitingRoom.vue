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
        <div class="col-3">
          <div class="card border-primary" style="">
                <img class="card-img-top img-char p-0" src="https://ih1.redbubble.net/image.1720409113.7485/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Card image cap">
            <div class="card-body p-1">
              <h5 class="card-title">Player 1</h5>
              <div class="bg-primary text-white card">
                <h4>Status</h4>
              </div>
              <div class="border-warning card">
                <h1>Ready</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card border-secondary" style="">
            <img class="card-img-top img-char p-0" src="https://ih1.redbubble.net/image.1720403004.7334/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Card image cap">
            <div class="card-body p-1">
              <h5 class="card-title">Player 2</h5>
              <div class="bg-secondary text-white card">
                <h4>Status</h4>
              </div>
              <div class="border-warning card">
                <h1>Ready</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card border-warning" style="">
            <img class="card-img-top img-char p-0" src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png" alt="Card image cap">
            <div class="card-body p-1">
              <h5 class="card-title">Waiting</h5>
              <div class="bg-warning text-white card">
                <h4>Status</h4>
              </div>
              <div class="border-warning card">
                <h1>Empty</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card border-success" style="">
            <img class="card-img-top img-char p-0" src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png" alt="Card image cap">
            <div class="card-body p-1">
              <h5 class="card-title">Waiting</h5>
              <div class="bg-success text-white card">
                <h4>Status</h4>
              </div>
              <div class="border-warning card">
                <h1>Empty</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <h1 class="text-white">Wait until for 4 players Joining the Game</h1>
      <button @click="goToPlay" class="btn btn-success mt-4">Start the Game</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaitingRoom',
  methods: {
    goToPlay () {
      this.$router.push('/play')
    }
  }
}
</script>

<style>

</style>

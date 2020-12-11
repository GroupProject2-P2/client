<template>
  <div class="col-3">
    <div class="card border-primary" style="">
      <img class="card-img-top img-char p-0" :src="image_player[index]" alt="Card image cap">
      <div class="card-body p-1">
        <h5 class="card-title">{{ player.username }}</h5>
        <div class="bg-primary text-white card">
          <h4>Score</h4>
        </div>
        <div class="border-warning card">
          <h1>{{player.score}}</h1>
        </div>
        <div class="bg-primary text-white card">
          <h4>Salah / Benar</h4>
        </div>
        <div class="border-warning card">
          <h1>{{ player.salah }} / {{ player.benar }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: ['player', 'index'],
  data () {
    return {
      image_player: [
        "https://ih1.redbubble.net/image.1720409113.7485/st,small,507x507-pad,600x600,f8f8f8.jpg",
        "https://ih1.redbubble.net/image.1720403004.7334/st,small,507x507-pad,600x600,f8f8f8.jpg",
        "https://ih1.redbubble.net/image.1726787262.2958/st,small,507x507-pad,600x600,f8f8f8.jpg",
        "https://ih1.redbubble.net/image.1720457610.8739/st,small,507x507-pad,600x600,f8f8f8.jpg"
      ],
    }
  }
}
</script>

<style>

</style>
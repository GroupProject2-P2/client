<template>
  <div>

    <Navbar/>
    <div class="container-product row">
      <RoomCard/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import RoomCard from '../components/RoomCard.vue'

export default {
  name: 'RoomDasboard',
  components: {
    Navbar,
    RoomCard
  }
}
</script>

<style>

</style>
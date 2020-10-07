<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './navbar.vue'
  export default {
    name: 'hetong',
    components:{
      navbar
    },
    data() {
      return {

      }
    }
  }

</script>

<style lang="" scoped>

</style>

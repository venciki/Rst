<template>
  <div id="app">
    <!-- <zuoye></zuoye> -->
    <router-view></router-view>
  </div>
</template>

<script>
  
  import navbar from './navbar'
  export default {
    name: 'shiyan',
    components:{
      navbar,
    },
    data() {
      return {

      }
    }
  }

</script>

<style lang="" scoped>

</style>

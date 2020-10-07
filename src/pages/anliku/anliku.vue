<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
 import navbar from './navbar'
//  import Maintabbar from "../../components/Main-tabbar";
  export default {
    name: 'anliku',
    components:{
      navbar,
      // Maintabbar
    },
    data() {
      return {

      }
    }
  }

</script>

<style lang="" scoped>

</style>

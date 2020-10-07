<template>
  <div id="app">
   <!-- <Maintabbar></Maintabbar> -->
   <router-view />
  </div>
</template>

<script>
  import Maintabbar from './components/Main-tabbar'
  export default {
 
  name: 'App',
  components:{
    Maintabbar,
  },
  data(){
    return {}
  }
}
</script>

<style>
     @import "./assets/css/1.css";
</style>

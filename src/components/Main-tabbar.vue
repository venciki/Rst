<template>
  <div id="app">
    <div class="container">
      <div class="nav">
        <tabbarleft></tabbarleft>
        <tabbarcenter></tabbarcenter>
        <tabbarright></tabbarright>
  </div>
</div>
</div>
</template>

<script>
  import tabbarleft from './tabbar/tabbar-left.vue'
  import tabbarcenter from './tabbar/tabbar-center.vue'
  import tabbarright from './tabbar/tabbar-right.vue'
  
  export default {
    name: 'Maintabbar',
    components:{
      tabbarleft,
      tabbarcenter,
      tabbarright
    },
    data() {
      return {

      }
    }
  }

</script>

<style lang="" scoped>

 .nav {
   display: flex;
    width: 100%;
    height: 50px;
    background: #333333;
}

</style>

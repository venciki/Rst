<template>
    <div id="app">
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  
    import navbar from './navbar.vue'
   
    export default {
      name: 'shebei',
      components:{
        navbar,
        
      },
      data() {
        return {
          path:'/shebei',
        }
      }
    }
  
  </script>
  
  <style lang="" scoped>
  
  </style>
  
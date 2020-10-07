<template>
  <div id="app">

  </div>
</template>

<script>
export default {
  name: 'empty',
   data(){
      return {
        path:'/shebei/dianchangguanli/xinzeng',
      }
    },
    activated(){
      this.$router.push(this.path);   //处理默认现实的路由
    },
    beforeRouteLeave(to, from, next){
      this.path = this.$route.path;
      next();
    },
 }
</script>

<style lang="" scoped>
  
</style>
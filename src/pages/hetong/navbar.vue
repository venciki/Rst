<template>
  <div id="app">
    <div class="navbar">
           
        <router-link to="/hetong/Addfile"><div class="item">新增合同</div></router-link>
        <router-link to="/hetong/Filelist"><div class="item">合同列表</div></router-link>
        <router-link to="/hetong/Lookfile"><div class="item">查看合同</div></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {
        path:'/hetong/Addfile',
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
.navbar{
    width: 100%;
    height: 20px;
    line-height: 20px;
    padding: 8px;
    display: flex;
}

.item{
    margin-left: 20px;
    width: 70px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    background:#409EFF;
    color: white;
    font-size: 14px;
    border-radius: 4px;
}

</style>

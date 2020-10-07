<template>
  <div id="app">
    <div class="navbar">
           
        <router-link to="/shebei/dianchang" ><div class="item active"  >电厂管理</div></router-link>
        <router-link to="/shebei/shebeilibie" ><div class="item" >设备类别</div></router-link>
        <router-link to="/shebei/shebeiguanli" ><div class="item" >设备管理</div></router-link>
    </div>
   
  </div>
</template>

<script>
  export default {
    name: '',
    data(){
      return {
        path:'/shebei/dianchang',
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
    /* margin-left: 1.5%; */
    height: 30px;
    line-height: 25px;
    display: flex;
    /* border: 2px solid red; */
    background: #F0F2F5;
}

.item.active{
 background:#409EFF;
color: white;
}

.item{
    margin-right: 10px;
    width: 70px;
    height: 25px;
    padding: 2.5px;
    text-align: center;
    line-height: 25px;
   
    color:black;
    font-size: 14px;
}

</style>

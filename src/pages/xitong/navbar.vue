<template>
    <div id="app">
      <div class="navbar">
             
          <router-link to="/xitong/xinzeng"><div class="item">新增角色</div></router-link>
          <router-link to="/xitong/user"><div class="item">用户管理</div></router-link>
      </div>
      
    </div>
  </template>
  
  <script>
    export default {
      name: '',
      data(){
        return {
          path:'/xitong/xinzeng',
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
  
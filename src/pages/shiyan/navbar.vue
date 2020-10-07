<template>
        <div id="app">
          <div class="navbar">
              <router-link to="/shiyan/zuoye"><div class="item">作业指导书</div></router-link>
              <router-link to="/shiyan/baojia"><div class="item">报价管理</div></router-link>
              <router-link to="/shiyan/moban"><div class="item">报告模板</div></router-link>
              <router-link to="/shiyan/guanli"><div class="item">报告管理</div></router-link>
              <router-link to="/shiyan/shiyanren"><div class="item">试验人员资料</div></router-link>
          </div>
          
          <router-view></router-view>
        </div>
      </template>
      
      <script>
        export default {
          name: '',
          data(){
            return {
            //   path:'/anliku/Addanni',
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
          width: 85px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          background:#409EFF;
          color: white;
          font-size: 14px;
          border-radius: 4px;
      }
      
      </style>
      
<template>
  <div id="app">
    <Maintabbar></Maintabbar>
    <div class="content2" v-show='isshow'>
        <div class="add">
            <div class="header" style="width:100%; height:30px;  border-bottom:1px solid rgba(232,232,232,1);">
                <span style="float: left;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;" >新增案例库</span>
                <span style="float: right; cursor: pointer;"  @click='show'>X</span>
            </div>
            <div class="zhong" style="margin-top: 50px; margin-left: 100px; text-align: left;  width: 500px;">
              <el-form :inline="true" :model="form" class="demo-form-inline">
                <el-form-item  label="案例名称" >
                  <el-input style="width: 350px;" v-model="form.keyword" placeholder="案例名称" id="btn1"></el-input>
                </el-form-item>
              </el-form>
              <el-form :inline="true" :model="form" class="demo-form-inline">
                <el-form-item  label="上传附件：" >
                  <div class="uploading">
                      <img class="upload-icon" src="../../assets/img/upload.png">
                      <p>上传附件</p>
                      <a class="tijiao">
                        <input type="file" name="submit" id="btn0">
                      </a>
                  </div>
                </el-form-item>
              </el-form>
            </div>
            <div class="bottom">
               <el-row>
                <el-button type="primary" @click="update()">保存</el-button>
              </el-row>
            </div>
             
            <!-- </div> -->
        </div>
    </div>
    <div class='content'>
        <div class="center">
            <div class="img">
                <img src="../../../src/assets/img/img2.jpg" alt="" width="80px" height="80px">
                <el-row>
                        <el-button type="primary" @click='show'>新增案例库</el-button>
                </el-row>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Maintabbar from "../../components/Main-tabbar";
  export default {
    name: 'Addanli',
    components:{
      Maintabbar
    },
    data() {
      return {
        isshow:false,
        form:{
            keyword:''
        },
      }
    },
    methods: {
      // 控制弹出框显示隐藏
      show() {
        this.isshow = !this.isshow
      },
      // 上传
      update() {
        var formData = new window.FormData();
        alert(this.keyword);
        formData.append('file', document.getElementById('btn0').files[0]);
        formData.append('keyword', document.getElementById('btn1').value);
        var options = {  // 设置axios的参数
          url: 'http://localhost:8084/caseLibrary/add',
          data: formData,
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        axios(options).then((res) => {
          console.log(res);
          alert('文件 is ok');
          this.$router.push({
            path: './Afteradd',
          })
        })

      },
      },
      //处理默认现实的路由
      activated() {
        this.$router.push(this.path);   
      },
      beforeRouteLeave(to, from, next) {
        this.path = this.$route.path;
        next();
      },
    }

</script>

<style lang="" scoped>
 html,body{
  width: 100%;
  height: 100%;
}
  /* #app{
    margin-top: 10px;
    width: 97%;
    height: 90%;
    margin-left: 1.5%;
    background: white;
    position: absolute;
    box-shadow: 0px 0px  1px black;
  } */
  .center{
      position: absolute;
      width: 150px;
      height: 150px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      /* border: 2px solid red; */
      text-align: center;
  }

  .center .el-button{
      padding: 0;
      width:102px;
      height:32px;
      background:rgba(45,132,239,1);
      border-radius:4px;
      /* text-align: center; */
      line-height: 32px;
  }
  .bottom .el-button {
    width:68px;
    height:32px;
    background:rgba(45,132,239,1);
    border-radius:4px;
    padding: 0;
    line-height: 32px;
  }
  .content2{
      position: absolute;
      width: 100%;
      height: 100%;
      /* background: black; */
      background-color:rgba(0,0,0,0.5);
      z-index: 2;
      text-align: center;
      
  }

  .add{
    position: absolute;
      width: 650px;
      height: 260px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      padding: 15px;
      background: white;
  }

  /* 上传按钮 */
  .uploading{                   /*上传框*/  /*上传后*/
			height: 32px;
			width: 106px;
			border-radius: 10px;            
			position: relative;
      background-color:#2D84EF;
      border-radius:4px;
		}
    .uploading img {
      float: left;
      position: absolute;
      top: 50%;
      margin-top: -8px;
      margin-left: 12px;
    }
    .uploading p{
			font-size: 14px;
      color: white;
			text-align: center;
      margin-left: 12px;
      line-height: 32px;
		}
    .tijiao{
			height: 32px;
			width: 106px;
			position: absolute;
			top: 0;
			left: 0;
		}
		.tijiao input{
			height: 32px;
			width: 106px;
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0;
			cursor: pointer;
			z-index: 1;
		}
</style>

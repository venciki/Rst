<template>
  <div id="app">
     <div class="content2" v-show="isshow">
          <div id="section_addElement_box" style="text-align:center">
            <!-- <div id="section_addElement_box_title" style="text-align:left">
              <span>新增人员</span>
              <div id="section_addElement_box_title_close" @click="show">X</div>
            </div> -->
              <div
          class="header"
          style=" padding:0 20px; width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >新增人员</span>
          <span
            @click="show"
            style="cursor: pointer; display:block;width:20px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
         
        </div>
            <div id="section_addElement_box_name" style="text-align:left">
              <span>资料名称：</span>
              <input :v-model="materialName" type="text" id="btn1" placeholder="请输入" />
            </div>
            <div id="section_addElement_box_file" style="text-align:left">
              <span style="float:left;color:#1D233F;font-size:14px;">上传附件:</span>
              <div class="uploading" style="float:left">
                <img class="upload-icon" src="../../assets/img/upload.png" />
                <p>上传附件</p>
                <a class="tijiao">
                  <input type="file" name="submit" id="btn0" />
                </a>
              </div>
            </div>
            <el-row>
              <el-button type="primary" @click="update()">保存</el-button>
            </el-row>
          </div>
        </div>
    <Maintabbar></Maintabbar>
    <div class="mainBox">
      <div class="headbox">
        <div class="navbar">
          <router-link to="/shiyan/zuoye">
            <div class="item active">作业指导书</div>
          </router-link>
          <router-link to="/shiyan/baojia">
            <div class="item">报价管理</div>
          </router-link>
          <router-link to="/shiyan/moban">
            <div class="item">报告模板</div>
          </router-link>
          <router-link to="/shiyan/reportGuanli">
            <div class="item">报告管理</div>
          </router-link>
          <router-link to="/shiyan/shiyanren">
            <div class="item">试验人员资料</div>
          </router-link>
        </div>
      </div>
      <div class="bottombox">
       
        <div class="content">
          <div class="center">
            <div class="img">
              <img src="../../../src/assets/img/img2.jpg" alt width="80px" height="80px" />
              <el-row>
                <el-button type="primary" @click="show">新增资料</el-button>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Maintabbar from "../../components/Main-tabbar";
export default {
  name: "Addanli",
  components: {
    Maintabbar
  },
  data() {
    return {
      isshow: false,
      guidingBookName: ""
    };
  },
  methods: {
    update() {
      var formData = new FormData(); // 声明一个FormData对象
      var formData = new window.FormData(); // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
      alert(this.guidingBookName);
      formData.append("file", document.getElementById("btn0").files[0]);
      formData.append("guidingBookName", document.getElementById("btn1").value);
      var options = {
        // 设置axios的参数
        url: "http://localhost:8084/guidingbook/fileUpload",
        data: formData,
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      axios(options).then(res => {
        console.log(res);
        alert("文件 is ok");
        this.$router.push({
          path: "/shiyan/Afterzuoye"
        });
      });
    },

    show() {
      this.isshow = !this.isshow;
    }
  },
  activated() {
    this.$router.push(this.path); //处理默认现实的路由
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  }
};
</script>

<style lang="" scoped>
.content {
  position: absolute;
  width: 97%;
  height: 85%;
  left: 1.5%;
  background: white;
}

.center {
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

.el-button {
  padding: 3px;
  width: 80px;
  height: 30px;
}

.center .el-button {
  width: 90px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
}

.content2 {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.add {
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;
}
#body {
  width: 1440px;
  height: 800px;
  background: rgba(240, 242, 245, 1);
  margin: 0 auto;
}
#header {
  width: 1440px;
  height: 54px;
  background: rgba(51, 51, 51, 1);
}

/*内容部分*/
#section {
  width: 1392px;
  height: 710px;
  margin-left: 24px;
  margin-top: 12px;
  margin-right: 66px;
  position: relative;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
}
/*li标签部分            */
#section_header {
  overflow: hidden;
  background: #f0f2f5;
}
.section_li {
  width: 102px;
  height: 32px;
  padding: 16px 6px 16px 6px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  font-size: 14px;
  float: left;
  cursor: pointer;
  border-radius: 2px 2px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#section_header > ul > li:hover {
  font-family: PingFangSC-Semibold, PingFang SC;
  background: rgba(45, 132, 239, 1);
  color: rgba(255, 255, 255, 1);
}
/*新增文档部分         */
#section_img > img {
  width: 88px;
  height: 64px;
  background: rgba(187, 187, 187, 1);
  position: absolute;
  left: 652px;
  top: 326px;
}
#section_addElement {
  width: 90px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
  position: absolute;
  left: 651px;
  top: 410px;
  cursor: pointer;
}
#section_addElement > div {
  width: 56px;
  height: 22px;
  font-size: 14px;
  text-align: center;
  margin: 5px auto;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
}

/*点击新增文档后上传文件页面*/
#section_addElement_box {
  width: 700px;
  height: 268px;
  margin: 0 auto;

  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0px 2px 2px 2px;
  margin-top: 60px;
}
#section_addElement_box_title {
  width: 700px;
  height: 46px;
  border-bottom: 1px solid #e8e8e8;
}
#section_addElement_box_title > span {
  width: 64px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  line-height: 22px;
  display: inline-block;
  margin-top: 12px;
  margin-left: 16px;
}
#section_addElement_box_title_close {
  width: 30px;
  height: 30px;
  /*background-color: red;*/
  float: right;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
#section_addElement_box_name {
  margin-left: 81px;
  margin-top: 33px;
}
#section_addElement_box_name > span {
  width: 70px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
#section_addElement_box_name > input {
  width: 468px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}
#section_addElement_box_file {
  margin-left: 80px;
  margin-top: 32px;
  width: 100%;
  height: 70px;
}
.upload {
  width: 106px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
}
.upload > img {
  width: 16px;
  height: 16px;
  vertical-align: center;
  margin-left: 12px;
  margin-top: 8px;
}
.upload > span {
  width: 56px;
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(244, 244, 244, 1);
  line-height: 22px;
  display: inline-block;
  position: absolute;
  margin-left: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
}
#section_addElement_box_hold {
  width: 68px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
  margin-left: 316px;
  margin-top: 40px;
  margin-right: 316px;
  text-align: center;
  cursor: pointer;
}
#section_addElement_box_hold > span {
  width: 28px;
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
  display: inline-block;
  margin: 5px 20px;
}

.item.active {
  background: rgba(45, 132, 239, 1);
  color: white;
}

.item {
  margin-right: 10px;
  width: 100px;
  height: 32px;
  padding: 2.5px;
  text-align: center;
  line-height: 25px;
  border-radius: 2px 2px 0px 0px;
  color: black;
  font-size: 14px;
}

html,
body {
  width: 100%;
  height: 100%;
}

.mainBox {
  margin-top: 10px;
  width: 97%;
  height: 90%;
  margin-left: 1.5%;
  background: white;
  position: absolute;
  /* box-shadow: 0px 0px 1px black; */
}

.bottombox {
  position: absolute;
  width: 100%;
  height: 100%;
  /* border: 2px solid red; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
}
.navbar {
  width: 100%;
  /* margin-left: 1.5%; */
  height: 30px;

  display: flex;
  /* border: 2px solid red; */
  background: #f0f2f5;
}


/* 上传按钮 */
.uploading {
  /*上传框*/ /*上传后*/
  height: 32px;
  width: 106px;
  border-radius: 10px;
  position: relative;
  background-color: #2d84ef;
  border-radius: 4px;
  margin-left: 17px;
  margin-top: -5px;
}
.uploading img {
  float: left;
  position: absolute;
  top: 50%;
  margin-top: -8px;
  margin-left: 12px;
}
.uploading p {
  font-size: 14px;
  color: white;
  text-align: center;
  margin-left: 12px;
  line-height: 32px;
}
.tijiao {
  height: 32px;
  width: 106px;
  position: absolute;
  top: 0;
  left: 0;
}
.tijiao input {
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

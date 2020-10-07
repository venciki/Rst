<template>
<div id="app">
     <!-- first alert -->
       <div class="content2" v-show='isshow1'>
        <div class="add">
          <div class="header">
            <span style="float: left;">新增实验报告模板</span>
            <span style="float: right; cursor: pointer;"  @click='show1'>X</span>
          </div>
          <div class="zhong" style="margin-top: 50px; margin-left: 50px; text-align: left;  width: 500px;">
            <el-form :model="form">
              <el-form-item label="模板名称：" :label-width="formLabelWidth">
                <el-input v-model="templateName" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="实验数据：" :label-width="formLabelWidth">
                <el-input v-model="basis" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="适用设备：" :label-width="formLabelWidth">
                <el-checkbox-group v-model="form.type" id="testEquipment">
                  <el-checkbox label="变压器" name="1" class="checkboxs"></el-checkbox>
                  <el-checkbox label="避雷针" name="2" class="checkboxs"></el-checkbox>
                  <el-checkbox label="母线" name="3" class="checkboxs"></el-checkbox>
                  <el-checkbox label="电流互感器" name="4" class="checkboxs"></el-checkbox>
                  <el-checkbox label="电压互感器" name="5" class="checkboxs"></el-checkbox>
                  <el-checkbox label="进线柜" name="6" class="checkboxs"></el-checkbox>
                  <el-checkbox label="出线柜" name="7" class="checkboxs"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </div>
          <div class="bottom" style="text-align: center; margin-top: 30px;" >
            <el-row>
              <el-button type="primary" @click="nextStep(),show1(),show2()">下一步</el-button>
            </el-row>
          </div>
        </div>
      </div>

      <!-- second alert -->
      <div class="content2" v-show='isshow2'>
        <div class="add" style="height:230px">
          <div class="header">
            <span style="float: left;">新增试验项</span>
            <span style="float: right; cursor: pointer;"  @click='show2'>X</span>
          </div>
          <div class="zhong" style="margin-top: 50px; margin-left: 50px; text-align: left;  width: 468px;">
            <el-form :model="form">
              <el-form-item label="实验项名称：" :label-width="formLabelWidth">
                <el-input v-model="itemsName" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="显示顺序：" :label-width="formLabelWidth">
                <el-input v-model="sort" placeholder="请输入"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="bottom" style="text-align: center; margin-top: 30px;" >
            <el-row>
              <el-button type="info" style="float:left">新增试验项</el-button>
              <div style="float:right">
              <el-button plain @click="show2(),show1()">上一步</el-button>
              <el-button type="primary" @click="show2(),save()">保存</el-button>
              </div>
            </el-row>
          </div>
        </div>
      </div>
   <Maintabbar></Maintabbar>
    <div class="mainBox">
      <div class="headbox">
        <div class="navbar">
          <router-link to="/shiyan/zuoye">
            <div class="item">作业指导书</div>
          </router-link>
          <router-link to="/shiyan/baojia">
            <div class="item">报价管理</div>
          </router-link>
          <router-link to="/shiyan/moban">
            <div class="item active">报告模板</div>
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
              <el-button type="primary" @click="show1()">新增模板</el-button>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




</template>

<script>
import axios from 'axios'
import Maintabbar from "../../components/Main-tabbar";
export default {
  name: "Addanli",
  components:{
    Maintabbar
  },
  data() {
    return {
      isshow1: false,
      isshow2: false,
      form: {
        value: "",
        name: "",
        record: "",
        type: []
      },
      dialogTableVisible: false,
      dialogFormVisible: true,
      centerDialogVisible: false,
      formLabelWidth: "120px",

      //input message
      templateName: '',
      basis: '',
      equipmentTypeId: '',
      itemsName: '',
      sort: '',
      templateId: ''
    };
  },
  methods: {
    show1() {
      this.isshow1 = !this.isshow1;
    },
    show2() {
      this.isshow2 = !this.isshow2;
    },
    nextStep() {
      var testEquipment = document.getElementById('testEquipment')
      // var checkboxs = document.getElementsByClassName('checkboxs')
      var inputs = testEquipment.getElementsByTagName('input')
      var arr = []
      for(var i = 0;i < inputs.length; i ++) {
        if (inputs[i].checked == true) {
          arr.push(inputs[i].value)
          this.equipmentTypeId = arr.toString()
        }
      }
      axios.post('http://localhost:8084/template/add',{
        templateName: this.templateName,
        basis: this.basis,
        equipmentTypeId: this.equipmentTypeId,
      })
      .then(res=>{
        console.log(res)
        this.templateId = res.data.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    save() {
      // axios.get('http://192.168.1.223:8084/template/findall')
      // .then(res=>{
      //   console.log(res)
      //   this.templateId = res.data.data.templateId
      //   console.log(this.templateId)
      // })
      // .catch(error=>{
      //   console.log(error)
      // })
        this.$router.push({
          path: '/shiyan/Aftermoban'
        })
      axios.post('http://localhost:8084/items/add',{
        templateId: this.templateId,
        itemsName: this.itemsName,
        sort: this.sort
      })
      .then(res=>{
        console.log(res)
      })
      .catch(error=>{
        console.log(error)
      })
    },

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
  width:90px;
  height:32px;
  padding: 0;
  line-height: 32px;
  border-radius:4px;
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
  height: 360px;
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
  margin-top: 50px;
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
  margin-left: 109px;
  margin-top: 32px;
}
#section_addElement_box_file > input {
  float: right;
  opacity: 0;
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



.navbar {
  width: 100%;
  /* margin-left: 1.5%; */
  height: 30px;

  display: flex;
  /* border: 2px solid red; */
  background: #f0f2f5;
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
.center .el-button {
  width:90px;
  height:32px;
  background:rgba(45,132,239,1);
  border-radius:4px;
  padding: 0;
  line-height: 32px;
}
.el-checkbox {
  margin-left: 10px;
}
</style>

<template>
  <div id="app">
    <Maintabbar></Maintabbar>
    <div class="content2" v-show="isshow">
      <div class="add">
        <div class="header" style=" padding:0 20px; width:95%; height:30px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);">
          <span style="float: left;">新增参数</span>
          <span style="float: right; cursor: pointer;" @click="show">X</span>
        </div>
        <div
          class="zhong"
          style="margin-top: 50px; margin-left: 100px; text-align: left;  width: 500px;" 
        >
          <el-form :model="form">
            <el-form-item label="参数名称：" :label-width="formLabelWidth">
              <el-input v-model="paramsName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="参数类型：" :label-width="formLabelWidth">
                <div @click="dingxing1" style="display:inline-block"><el-radio v-model="radio" label="1" id="radio1">定性</el-radio></div>
                <div @click="dingxing2" style="display:inline-block; margin-left:10px"><el-radio v-model="radio" label="2" id="radio2">定量</el-radio></div>
            </el-form-item>
            <div style="display:flex;" v-show="iptIsshow1">
                  <el-input v-model="quaOptionOne" placeholder="正常" style=" width:250px"></el-input>
                  <el-input v-model="quaOptionTwo" placeholder="异常" style=" width:250px;"></el-input>
            </div>
            <div style="" v-show="iptIsshow2">
              <el-form-item label="单位：" :label-width="formLabelWidth" >
                <el-input v-model="quaUnit" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="上限：" :label-width="formLabelWidth">
                <el-input v-model="quaUpperLim" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="下线：" :label-width="formLabelWidth">
                <el-input v-model="quaLowerLim" placeholder="请输入"></el-input>
              </el-form-item>
            </div>
          </el-form>
          <div slot="footer" class="dialog-footer" style="position:absolute; bottom:10px; left:16px;">
            <el-button type="info">新增参数</el-button>
          </div>
            <el-button type="primary" @click="saveParam" style="position:absolute; right:16px; bottom:10px">保存</el-button>
        </div>
      </div>
    </div>

    <div class="header">
      <div class="header_con" style="">
                <el-breadcrumb separator="/" style="font-size:16px;">
                    <el-breadcrumb-item>报告管理</el-breadcrumb-item>
                    <el-breadcrumb-item><label for="" style="color:black;">参数配置</label> </el-breadcrumb-item>
                </el-breadcrumb>
                <button @click="goBack" style="height:32px; width:65px; color:white;">返回</button>
            </div>
    </div>
    <div class="section">
      <div class="section_con">
        <div class="section_con_main">
          <div class="img">
            <img src="../../../src/assets/img/img2.jpg" alt />
          </div>
          <button @click="show">新增参数</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Maintabbar from "../../components/Main-tabbar";
import axios from 'axios'
export default {
  name: "canshuKong",
  components: {
    Maintabbar
  },
  data() {
    return {
      isshow: false,
      iptIsshow1: true,
      iptIsshow2:false,
      goBack() {
        history.back();
      },
      dialogTableVisible: false,
      dialogFormVisible: true,
      centerDialogVisible: false,
      form: {
        name: "",
        radio: "",
        input: "",

        /**/
        dingxing1: "",
        dingxing2: ""
      },
      formLabelWidth: "120px",




      radio: '1',
      // main message
      paramsName: '',
      paramsType: '',
      quaUnit: '',
      quaUpperLim: '',
      quaLowerLim: '',
      quaOptionOne: '',
      quaOptionTwo: '',
      itemsId: '',
    };
  },
  created() {
    this.itemsId = this.$route.query.data
  },
  methods: {
    show() {
      this.isshow = !this.isshow;
    },
    dingxing1() {
      this.iptIsshow1 = true;
      this.iptIsshow2 = false;
      var add = document.getElementsByClassName('add')[0];
      add.style.height = '300px'
    },
    dingxing2() {
      this.iptIsshow2 = true;
      this.iptIsshow1 = false;
      var add = document.getElementsByClassName('add')[0];
      add.style.height = '390px'
    },
    saveParam() {
      var radio1 = document.getElementById('radio1');
      var radio2 = document.getElementById('radio2');
      var inputs1 = radio1.getElementsByTagName('input')[0];
      var inputs2 = radio2.getElementsByTagName('input')[0];
      var btn1 = radio1.getElementsByClassName('el-radio__label')[0]
      var btn2 = radio2.getElementsByClassName('el-radio__label')[0]
      if(inputs1.checked == true) {
        this.paramsType = btn1.innerText
        if(!(this.paramsName && this.quaOptionOne && this.quaOptionTwo)) {
          alert('数据不能为空')
        } else {
          this.$router.push({
            path:'./canshuAfteradd',
            query: {
              data: this.itemsId
            }
          })
          console.log(this.itemsId)
          console.log(this.paramsType)
          axios.post('http://localhost:8084/params/add',{
            itemsId: this.itemsId,
            paramsType: this.paramsType,
            paramsName: this.paramsName,
            quaOptionOne: this.quaOptionOne,
            quaOptionTwo: this.quaOptionTwo
          })
          .then(res=>{
            console.log(res)
          })
          .catch(error=>{
            console.log(error)
          })
        }
      } else {
        this.paramsType = btn2.innerText
        if(!(this.paramsName && this.quaUnit && this.quaUpperLim && this.quaLowerLim)) {
          alert('数据不能为空')
        } else {
          this.$router.push({
            path:'./canshuAfteradd',
            query: {
              data: this.itemsId
            }
          })
          axios.post('http://localhost:8084/params/add',{
            itemsId: this.itemsId,
            paramsName: this.paramsName,
            paramsType: this.paramsType,
            quaUnit: this.quaUnit,
            quaUpperLim: this.quaUpperLim,
            quaLowerLim: this.quaLowerLim
          })
          .then(res=>{
            console.log(res)
          })
          .catch(error=>{
            console.log(error)
          })
        }
      }
    }
  }
};
</script>

<style lang="" scoped>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: rgba(240, 242, 245, 1);
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  color: #ffffff;
  cursor: pointer;
}

img {
  width: 100%;
  height: 100%;
}

.header .header_con {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 54px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  padding: 0 24px;
  text-align: center;
  line-height: 54px;
}

.header .header_con .el-breadcrumb {
  display: flex;
  justify-content: flex-start;
}

.header .header_con .el-breadcrumb__item {
  text-align: center;
  line-height: 54px;
}

.header .header_con .el-breadcrumb__item:nth-child(2) .el-breadcrumb__inner {
  font-weight: 900;
}

.header .header_con button {
  display: block;
  width: 65px;
  height: 32px;
  background: rgba(24, 144, 255, 1);
  border-radius: 4px;
  /* margin: 11px 0 11px 1450px; */
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
}

.section .section_con {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97%;
  top: 120px;
  position: absolute;
  height: 85%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
}
.section .section_con .section_con_main {
  width: 90px;
  height: 120px;
}
.section .section_con .img {
  /* margin: 280px 0 0 652px; */
  width: 88px;
  height: 64px;
}

.section .section_con button {
  display: inline-block;
  width: 90px;
  height: 32px;
  margin-top: 10px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
}
.content2 {
  position: absolute;
  width: 100%;
  height: 100%;
  /* top: 120px; */
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.add {
  position: absolute;
  width: 650px;
  height: 300px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 15px;
  background: white;
}
.content2 .el-button {
  padding: 3px;
  width: 80px;
  height: 30px;
  /* text-align: center; */
  /* line-height: px; */
}

    .header .bread-header {
  width: 100%;
  height: 54px;
  background: rgba(255, 255, 255, 1);
  /* border: 1px solid #000; */
}

.header .el-button{
  height: 30px;
  width: 50px;
  font-size: 13px;
  line-height: 30px;
  float: left;
}
</style>

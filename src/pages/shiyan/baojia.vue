<template>
  <div id="app">
     <Maintabbar></Maintabbar>
    <div class="content2" v-show="isshow">
      <div id="section_addPrice_box">
        
          <!-- <span>新增报价</span>
          <div id="section_addPrice_box_close" @click="show">X</div> -->
          <div
          class="header"
          style=" padding:0 20px; width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >新增报价</span>
          <span
            @click="show"
            style="cursor: pointer; display:block;width:20px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
         
        </div>
        <div id="section_addPrice_box_content">
          <div id="section_addPrice_box_content_radio">
            <span>分类：</span>
            <input
              type="radio"
              name="0"
              id="table0"
              v-model="projectType"
              value="火电及水电按机组容量"
              @click="show_1"
            />火电及水电按机组容量
            <input
              type="radio"
              name="0"
              id="table1"
              v-model="projectType"
              value="火电及水电按电压等级"
              @click="show_2"
            />火电及水电按电压等级
            <input
              type="radio"
              name="0"
              id="tabel2"
              v-model="projectType"
              value="新能源组按机组容量"
              @click="show_3"
            />新能源组按机组容量
          </div>
          <div id="section_addPrice_box_content_table" v-show="show_one">
            <ul>
              <li>
                <span>分组：</span>
                <select v-model="projectGroup">
                  <option value disabled selected style="display:none;">请选择</option>
                  <option>变压器试验</option>
                  <option>互感器试验</option>
                  <option>真空断路层</option>
                  <option>接地试验</option>
                  <option>系统试验</option>
                  <option>其他项目</option>
                  <option>继电保护及自动化专业</option>
                  <option>其他项目</option>
                </select>
              </li>
              <li>
                <span>项目名称：</span>
                <input v-model="projectName" type="text" placeholder="请输入" />
              </li>
              <li>
                <span>单位：</span>
                <input v-model="unit" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>100MW：</span>
                <input v-model="s100MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>100MW以上：</span>
                <input v-model="s100MWOverPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>300MW：</span>
                <input v-model="h300MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>600MW：</span>
                <input v-model="h600MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>1000MW：</span>
                <input v-model="h1000MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
            </ul>
          </div>

          <div id="section_addPrice_box_content_table1" v-show="show_two">
            <ul>
              <li>
                <span>分组：</span>
                <select v-model="projectGroup">
                  <option value disabled selected style="display:none;">请选择</option>
                  <option>高压电容器试验</option>
                  <option>高压套管试验</option>
                  <option>GIS断路器试验</option>
                  <option>避雷器试验</option>
                </select>
              </li>
              <li>
                <span>项目名称：</span>
                <input type="text" v-model="projectName" placeholder="请输入" />
              </li>
              <li>
                <span>单位：</span>
                <input type="text" v-model="unit" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>220kV等级及以下：</span>
                <input type="text" v-model="d220KVPrice" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>500kV等级及以下：</span>
                <input type="text" v-model="d500KVPrice" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>750kV等级及以下：</span>
                <input type="text" v-model="d750KVPrice" placeholder="请输入价格（万元）" />
              </li>
            </ul>
          </div>

          <div id="section_addPrice_box_content_table2" v-show="show_three">
            <ul>
              <li>
                <span>分组：</span>
                <select v-model="projectGroup">
                  <option value disabled selected style="display:none;">请选择</option>
                  <option>变压器试验</option>
                  <option>互感器试验</option>
                  <option>主变低压侧共箱母线</option>
                  <option>35kV母线</option>
                  <option>35kV断路器</option>
                  <option>接地变压器及电阻柜</option>
                  <option>SVG（控制柜）</option>
                  <option>箱式变压器</option>
                  <option>35kV集电线路</option>
                  <option>高压断路器试验（含SF6组合电器）</option>
                  <option>三相组合式过电压保护器测试</option>
                  <option>接地试验</option>
                  <option>继电保护及自动化专业（全检）</option>
                  <option>其他项目</option>
                </select>
              </li>
              <li>
                <span>项目名称：</span>
                <input type="text" placeholder="请输入" v-model="projectName" />
              </li>
              <li>
                <span>单位：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="unit" />
              </li>
              <li>
                <span>50MW及以下价格：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="d50MWBelowPrice" />
              </li>
              <li>
                <span>100MW及以下价格：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="d100MWBelowPrice" />
              </li>
              <li>
                <span>100MW及以上价格：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="d50MWOverPrice" />
              </li>
            </ul>
          </div>
        </div>
        <el-row style="text-align:center;margin-top:20px;">
            <el-button type="primary" @click="dataPush()">保存</el-button>
        </el-row>
      </div>
    </div>
    <div class="mainBox">
      <div class="headbox">
        <div class="navbar">
          <router-link to="/shiyan/zuoye">
            <div class="item">作业指导书</div>
          </router-link>
          <router-link to="/shiyan/baojia">
            <div class="item active">报价管理</div>
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
      <div class="bottombox"></div>
      <div class="content">
        <div class="center">
          <div class="img">
            <img src="../../../src/assets/img/img2.jpg" alt width="80px" height="80px" />
            <el-row>
              <el-button type="primary" @click="show">新增报价</el-button>
            </el-row>
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
 components:{
   Maintabbar
 },
  data() {
    return {
      show_one: true,
      show_two: false,
      show_three: false,
      isshow: false,

      projectType: "",
      projectGroup: "",
      projectName: "",
      unit: "",

      //first
      s100MWPrice: "",
      s100MWOverPrice: "",
      h300MWPrice: "",
      h600MWPrice: "",
      h1000MWPrice: "",

      // second
      d220KVPrice: "",
      d500KVPrice: "",
      d750KVPrice: "",

      //third
      d50MWBelowPrice: "",
      d100MWBelowPrice: "",
      d50MWOverPrice: ""
    };
  },
  methods: {
    show_1() {
      this.show_one = true;
      this.show_two = false;
      this.show_three = false;
    },
    show_2() {
      this.show_one = false;
      this.show_two = true;
      this.show_three = false;
    },
    show_3() {
      this.show_one = false;
      this.show_two = false;
      this.show_three = true;
    },
    show() {
      this.isshow = !this.isshow;
    },
    data() {
      console.log(
        this.projectType,
        this.projectGroup,
        this.projectName,
        this.unit,
        this.s100MWPrice,
        this.s100MWOverPrice,
        this.h300MWPrice,
        this.h600MWPrice,
        this.h1000MWPrice
      );
    },
    dataPush() {
      if (
        !(
          (this.projectType == "火电及水电按机组容量" &&
            this.projectGroup &&
            this.projectName &&
            this.unit &&
            this.s100MWPrice &&
            this.s100MWOverPrice &&
            this.h300MWPrice &&
            this.h600MWPrice &&
            this.h1000MWPrice) ||
          (this.projectType == "火电及水电按电压等级" &&
            this.projectGroup &&
            this.projectName &&
            this.unit &&
            this.d220KVPrice &&
            this.d500KVPrice &&
            this.d750KVPrice) ||
          (this.projectType == "新能源组按机组容量" &&
            this.projectGroup &&
            this.projectName &&
            this.unit &&
            this.d50MWBelowPrice &&
            this.d100MWBelowPrice &&
            this.d50MWOverPrice)
        )
      ) {
        alert("请检查你输入的数据！");
      } else {
        alert("数据输入成功！");
        var data = {
          projectType: this.projectType,
          projectName: this.projectName,
          projectGroup: this.projectGroup,
          unit: this.unit,
          d220KVPrice: this.d220KVPrice,
          d500KVPrice: this.d500KVPrice,
          d750KVPrice: this.d750KVPrice,
          s100MWPrice: this.s100MWPrice,
          s100MWOverPrice: this.s100MWOverPrice,
          h300MWPrice: this.h300MWPrice,
          h600MWPrice: this.h600MWPrice,
          h1000MWPrice: this.h1000MWPrice,
          d50MWBelowPrice: this.d50MWBelowPrice,
          d100MWBelowPrice: this.d100MWBelowPrice,
          d50MWOverPrice: this.d50MWOverPrice
        };
       
        axios
          .post("//localhost:8084/project/add", {
            projectType: this.projectType,
            projectName: this.projectName,
            projectGroup: this.projectGroup,
            unit: this.unit,
            d220KVPrice: this.d220KVPrice,
            d500KVPrice: this.d500KVPrice,
            d750KVPrice: this.d750KVPrice,
            s100MWPrice: this.s100MWPrice,
            s100MWOverPrice: this.s100MWOverPrice,
            h300MWPrice: this.h300MWPrice,
            h600MWPrice: this.h600MWPrice,
            h1000MWPrice: this.h1000MWPrice,
            d50MWBelowPrice: this.d50MWBelowPrice,
            d100MWBelowPrice: this.d100MWBelowPrice,
            d50MWOverPrice: this.d50MWOverPrice
          })
          .then(function(response) {
            console.log(response);
            
          })

          .catch(function(error) {
            console.log(error);
          });
      } this.$router.push({
          path: "/shiyan/Afterbaojia"
        });
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
body {
  overflow-y: hidden;
}
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
  /* text-align: center; */
  /* line-height: px; */
}

.content2 {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  /* border: 2px solid red; */
  /* top: -50px; */
}

.add {
  position: absolute;
  width: 650px;
  height: 260px;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 15px;
  background: white;
  bottom: 2px solid red;;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;
}
#section_addPrice_box {
  width: 750px;
  height: 530px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  margin: 10px auto;
  /* position: relative; */
  /* border: 2px solid red;; */
}
#section_addPrice_box_title {
  width: 700px;
  height: 46px;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
}
#section_addPrice_box_title > span {
  width: 64px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  line-height: 22px;
  display: inline-block;
  margin-left: 16px;
  margin-top: 12px;
}
#section_addPrice_box_content_radio {
  width: 650px;
  height: 20px;
  margin-left: 85px;
  margin-top: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
#section_addPrice_box_content_radio > input {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(24, 144, 255, 1);
  vertical-align: text-bottom;
  margin-bottom: 2px;
  margin-right: 8px;
}
#section_addPrice_box_content_radio > span {
  display: inline-block;
  margin-right: 14px;
}
/*    按机组容量内容样式*/
#section_addPrice_box_content_table > ul > li {
  margin-top: 15px;
  margin-right: 70px;
  float: right;
}
#section_addPrice_box_content_table > ul > li > span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
#section_addPrice_box_content_table > ul > li > input {
  width: 468px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}
/*    下拉框样式*/
#section_addPrice_box_content_table > ul > li > select {
  width: 468px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}
#section_addPrice_box_holdBtn {
  width: 68px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
  /* position: absolute; */
  margin-left: 316px;
  margin-top: 20px;
  /* bottom: 20px; */
  cursor: pointer;
}
#section_addPrice_box_holdBtn > span {
  width: 28px;
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
  display: inline-block;
  margin-left: 20px;
  margin-top: 5px;
}
#section_addPrice_box_close {
  width: 12px;
  height: 12px;
  /*background-color: red;*/
  float: right;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  margin-top: 8px;
  margin-right: 9px;
}
#section_addPrice_box_content_table {
  width: 700px;
  /* margin-left: -40px; */
  /* border: 2px solid green; */
  overflow: hidden;
  zoom: 1;
  margin: auto;
}

#section_addPrice_box_content_table1 {
  width: 700px;
  /* margin-left: -20px; */
  /* border: 2px solid green; */
  overflow: hidden;
  zoom: 1;
  margin: auto;
}

#section_addPrice_box_content_table2 {
  width: 700px;
  /* margin-left: 60px; */
  /* border: 2px solid green; */
  overflow: hidden;
  zoom: 1;
  margin: auto;
}
/*    按电压等级选项*/
#section_addPrice_box_content_table1 > ul > li > select {
  width: 408px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table1 > ul > li {
  margin-top: 24px;
  margin-right: 101px;
  float: right;
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table1 > ul > li > span {
  width: 50px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  white-space: pre-wrap;
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table1 > ul > li > input {
  width: 408px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* padding-left: 12px; */
  /* padding-top: 6px;
  padding-bottom: 6px; */
  /* border: 2px solid green; */
}

#section_addPrice_box_content_table2 > ul > li > select {
  width: 408px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table2 > ul > li {
  margin-top: 24px;
  margin-right: 101px;
  float: right;
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table2 > ul > li > span {
  width: 50px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  white-space: pre-wrap;
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table2 > ul > li > input {
  width: 408px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* padding-left: 12px; */
  /* padding-top: 6px;
  padding-bottom: 6px; */
  /* border: 2px solid green; */
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
</style>

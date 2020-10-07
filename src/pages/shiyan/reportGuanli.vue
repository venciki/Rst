<template>
  <div id="app">
    <Maintabbar></Maintabbar>
    <div class="content2" v-show="isshow">
      <div class="add">
        <div class="header">
          <span style="float: left;">新增报告</span>
          <span style="float: right; cursor: pointer;" @click="show">X</span>
        </div>
        <div
          class="zhong"
          style="margin-top: 50px; margin-left: 50px; text-align: left;  width: 500px;"
        >
          <el-form>
            <el-form-item label="报告编号：" :label-width="formLabelWidth">
              <el-input v-model="reportNumber" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="报告名称：" :label-width="formLabelWidth">
              <el-input v-model="reportName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="关联合同：" :label-width="formLabelWidth">
              <el-select v-model="contractId" placeholder="请选择">
               <el-option :label="s1" value="1"></el-option>
                <el-option :label="s2" value="2"></el-option>
                <el-option :label="s3" value="3"></el-option>
                <el-option :label="s4" value="4"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="项目负责单位：" :label-width="formLabelWidth">
              <el-input v-model="responsibleUnit" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="项目承担部门：" :label-width="formLabelWidth">
              <el-input v-model="undertakeDept" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="项目起讫日期：" :label-width="formLabelWidth">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="请选择开始日期"
                  v-model="startDate"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="请选择结束日期"
                  v-model="endDate"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="项目负责人：" :label-width="formLabelWidth">
              <el-input placeholder="请输入" v-model="responsiblePerson"></el-input>
            </el-form-item>
            <el-form-item label="报告编写人：" :label-width="formLabelWidth">
              <el-input placeholder="请输入" v-model="workers"></el-input>
            </el-form-item>
            <el-form-item label="报告审阅人：" :label-width="formLabelWidth">
              <el-input placeholder="请输入" v-model="editor"></el-input>
            </el-form-item>
            <el-form-item label="审核人：" :label-width="formLabelWidth">
              <el-input placeholder="请输入" v-model="reviewer"></el-input>
            </el-form-item>
            <el-form-item label="批准人：" :label-width="formLabelWidth">
              <el-input placeholder="请输入" v-model="approver"></el-input>
            </el-form-item>
          </el-form>

          <span
            slot="footer"
            class="dialog-footer"
            style="display:block;text-align:center;margin-top:15px;"
          >
            <el-button type="primary" @click='dataPush'>保存</el-button>
            <el-button style="width:128px" @click="dataPush2">录入实验数据</el-button>
          </span>
        </div>
      </div>
    </div>
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
            <div class="item">报告模板</div>
          </router-link>
          <router-link to="/shiyan/reportGuanli">
            <div class="item active">报告管理</div>
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
                <el-button type="primary" @click="show">新增报告</el-button>
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
  components: {
    Maintabbar
  },
  name: "reportGuanli",
  data() {
    return {
      isshow: false,
      dialogTableVisible: false,
      dialogFormVisible: true,
      centerDialogVisible: false,
      formLabelWidth: "150px",

      //信息：
      reportNumber: "",
      reportName: "",
      contractId: "",
      responsibleUnit: "",
      undertakeDept: "",
      startDate: "",
      endDate: "",
      responsiblePerson: "",
      workers: "",
      editor: "",
      reviewer: "",
      approver: "",
      
      
      
      reportId:'',


       s1:'',
      s2:'',
      s3:'',
      s4:'',

      id:'',
    };
  },
  methods: {
    show() {
      this.isshow = !this.isshow;
    },
     dataPush() {
     if( ! (this.reportNumber&&this.reportNumber&&this.reportName&&this.contractId&&this.responsibleUnit&&this.undertakeDept&&this.startDate&&this.endDate&&this.responsiblePerson&&this.workers&&this.editor&&this.reviewer&&this.approver)){
       alert('请检查你输入的数据！')
     }else{
      let that = this;
       alert('数据发送成功！')
            axios
          .post("http://localhost:8084/report/add", {
            reportNumber: this.reportNumber,
            reportName: this.reportName,
            contractId: this.contractId,
            responsibleUnit: this.responsibleUnit,
            undertakeDept: this.undertakeDept,
            startDate: this.startDate,
            endDate: this.endDate,
            responsiblePerson: this.responsiblePerson,
            workers: this.workers,
            editor: this.editor,
            reviewer: this.reviewer,
            approver: this.approver,
          })
          .then(function(response) {
            console.log(response);
            that.$router.push({
            path: "/shiyan/reportAfteradd"
        });
            
          })

          .catch(function(error) {
            console.log(error);
          });
          
      } 
      
     },
      dataPush2() {
       
     if( ! (this.reportNumber&&this.reportNumber&&this.reportName&&this.contractId&&this.responsibleUnit&&this.undertakeDept&&this.startDate&&this.endDate&&this.responsiblePerson&&this.workers&&this.editor&&this.reviewer&&this.approver)){
       alert('请检查你输入的数据！')
     }else{
       let that = this;
        
        
       alert('数据发送成功！')
            axios
          .post("http://localhost:8084/report/add", {
            reportNumber: this.reportNumber,
            reportName: this.reportName,
            contractId: this.contractId,
            responsibleUnit: this.responsibleUnit,
            undertakeDept: this.undertakeDept,
            startDate: this.startDate,
            endDate: this.endDate,
            responsiblePerson: this.responsiblePerson,
            workers: this.workers,
            editor: this.editor,
            reviewer: this.reviewer,
            approver: this.approver,
          })
          .then(function(response) {
             that.$router.push({
          path: "/shiyan/reportTestKong",
           query: {
                    reportId:response.data.data
                  }
        });
            
          })

          .catch(function(error) {
            console.log(error);
          });
          
      } 
      
     },
     
     
     
  },
  activated() {
    this.$router.push(this.path); //处理默认现实的路由
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  },
  
    //   if (
    //     !(
    //       (this.projectType == "火电及水电按机组容量" &&
    //         this.projectGroup &&
    //         this.projectName &&
    //         this.unit &&
    //         this.s100MWPrice &&
    //         this.s100MWOverPrice &&
    //         this.h300MWPrice &&
    //         this.h600MWPrice &&
    //         this.h1000MWPrice) ||
    //       (this.projectType == "火电及水电按电压等级" &&
    //         this.projectGroup &&
    //         this.projectName &&
    //         this.unit &&
    //         this.d220KVPrice &&
    //         this.d500KVPrice &&
    //         this.d750KVPrice) ||
    //       (this.projectType == "新能源组按机组容量" &&
    //         this.projectGroup &&
    //         this.projectName &&
    //         this.unit &&
    //         this.d50MWBelowPrice &&
    //         this.d100MWBelowPrice &&
    //         this.d50MWOverPrice)
    //     )
    //   ) {
    //     alert("请检查你输入的数据！");
    //   } else {
    //     alert("数据输入成功！");
    //     var data = {
    //       projectType: this.projectType,
    //       projectName: this.projectName,
    //       projectGroup: this.projectGroup,
    //       unit: this.unit,
    //       d220KVPrice: this.d220KVPrice,
    //       d500KVPrice: this.d500KVPrice,
    //       d750KVPrice: this.d750KVPrice,
    //       s100MWPrice: this.s100MWPrice,
    //       s100MWOverPrice: this.s100MWOverPrice,
    //       h300MWPrice: this.h300MWPrice,
    //       h600MWPrice: this.h600MWPrice,
    //       h1000MWPrice: this.h1000MWPrice,
    //       d50MWBelowPrice: this.d50MWBelowPrice,
    //       d100MWBelowPrice: this.d100MWBelowPrice,
    //       d50MWOverPrice: this.d50MWOverPrice
    //     };
       
    //     axios
    //       .post("http://localhost:8084/project/add", {
    //         projectType: this.projectType,
    //         projectName: this.projectName,
    //         projectGroup: this.projectGroup,
    //         unit: this.unit,
    //         d220KVPrice: this.d220KVPrice,
    //         d500KVPrice: this.d500KVPrice,
    //         d750KVPrice: this.d750KVPrice,
    //         s100MWPrice: this.s100MWPrice,
    //         s100MWOverPrice: this.s100MWOverPrice,
    //         h300MWPrice: this.h300MWPrice,
    //         h600MWPrice: this.h600MWPrice,
    //         h1000MWPrice: this.h1000MWPrice,
    //         d50MWBelowPrice: this.d50MWBelowPrice,
    //         d100MWBelowPrice: this.d100MWBelowPrice,
    //         d50MWOverPrice: this.d50MWOverPrice
    //       })
    //       .then(function(response) {
    //         console.log(response);
            
    //       })

    //       .catch(function(error) {
    //         console.log(error);
    //       });
    //   } this.$router.push({
    //       path: "/shiyan/Afterbaojia"
    //     });
    // }
}

</script>

<style lang="" scoped>
* {
  margin: 0;
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

.center .el-button {
  width:90px;
  height:32px;
  background:rgba(45,132,239,1);
  border-radius:4px;
}
.el-button {
  padding: 3px;
  width: 80px;
  height: 30px;
  /* text-align: center; */
  /* line-height: px; */
}

.el-select {
  width: 100%;
}
.el-col {
  width: 100%;
}

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

/* .InnerSection_con_main button {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  color: #fff;
  cursor: pointer;
}

.InnerSection {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
}

.InnerSection .InnerSection_con {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96.6%;
  height: 550px;
}
.InnerSection .InnerSection_con .InnerSection_con_main {
  width: 90px;
  height: 120px;
}
.InnerSection .InnerSection_con .img {
  width: 88px;
  height: 64px;
}

.InnerSection .InnerSection_con button {
  display: inline-block;
  width: 90px;
  height: 32px;
  margin-top: 10px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
} */
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
  height: 650px;
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
}

.zhong .el-form-item {
  margin: 5px auto;
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

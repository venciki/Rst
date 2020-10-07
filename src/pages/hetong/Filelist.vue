<template>
  <div id="app">
    <!-- 修改合同 -->
    <div class="back" v-show="isShow">
        <div class="card1">
          <div
          class="header"
          style="width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >修改合同</span>
          <span
            @click="Show()"
            style="cursor: pointer; display:block;width:100px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
        </div>
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="合同名称">
              <el-input v-model="contractName"></el-input>
            </el-form-item>
            <el-form-item label="合同金额(元)">
              <el-input v-model="contractAmount"></el-input>
            </el-form-item>
            <el-form-item label="签订日期">
              <el-input v-model="signDate"></el-input>
            </el-form-item>
            <el-form-item label="业务员">
              <el-input v-model="salesMan"></el-input>
            </el-form-item>
            <el-form-item label="甲方合同">
              <el-input v-model="partyA"></el-input>
            </el-form-item>
            <el-form-item label="乙方合同">
              <el-input v-model="partyB"></el-input>
            </el-form-item>
            <el-form-item label="执行开始日期">
              <el-input v-model="executiveStartDate"></el-input>
            </el-form-item>
            <el-form-item label="合同状态">
              <el-input v-model="infoState"></el-input>
            </el-form-item>
            <el-button type="primary" @click="Show(),refrashData()">修改</el-button>
          </el-form>
        </div>
      </div>
      <!-- 修改合同完 -->


      <!-- 新增合同 -->
    <div class="back" v-show="isShow3">
        <div class="card1">
          <div
          class="header"
          style="width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >新增合同</span>
          <span
            @click="Show3()"
            style="cursor: pointer; display:block;width:100px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
        </div>
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="合同名称">
              <el-input v-model="contractName"></el-input>
            </el-form-item>
            <el-form-item label="合同金额(元)">
              <el-input v-model="contractAmount"></el-input>
            </el-form-item>
            <el-form-item label="签订日期">
              <el-input v-model="signDate"></el-input>
            </el-form-item>
            <el-form-item label="业务员">
              <el-input v-model="salesMan"></el-input>
            </el-form-item>
            <el-form-item label="甲方合同">
              <el-input v-model="partyA"></el-input>
            </el-form-item>
            <el-form-item label="乙方合同">
              <el-input v-model="partyB"></el-input>
            </el-form-item>
            <el-form-item label="执行开始日期">
              <el-input v-model="executiveStartDate"></el-input>
            </el-form-item>
            <el-form-item label="合同状态">
              <el-input v-model="infoState"></el-input>
            </el-form-item>
            <el-button type="primary" @click="Show3(),refrashData2()">保存</el-button>
          </el-form>
        </div>
      </div>
      <!-- 新增合同完 -->
    <Maintabbar></Maintabbar>
    <div class="content">
      
      <div class="addAfter">
        <div id="app_addAfter">
          <div class="addAfter_content">
            <!-- 合同输入框 -->
            <div class="contract_input">
              <el-form label-width="120px">
                <el-form-item label="合同名称：">
                  <el-input v-model="contractName" id="btn1"></el-input>
                </el-form-item>
              </el-form>
              <el-form ref="form" :model="sizeForm" label-width="120px">
                <el-form-item label="合同状态：">
                  <el-select v-model="infoState" placeholder="请选择活动区域" id="btn2">
                    <el-option label="区域一" value="t1"></el-option>
                    <el-option label="区域二" value="t2"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <el-form ref="form" :model="sizeForm" label-width="120px" style="margin-left:30px;">
                <el-form-item label="合同业务类型：">
                  <el-select v-model="businessType" placeholder="请选择活动区域" id="btn3">
                    <el-option label="区域一" value="x1"></el-option>
                    <el-option label="区域二" value="x2"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <div style="display: flex; flex-wrap: wrap;" v-show="istrue">
                <el-form ref="form" :model="sizeForm" label-width="120px">
                  <el-form-item label="合同甲方：">
                    <el-select v-model="partyA" placeholder="请选择活动区域" id="btn4">
                      <el-option label="区域一" value="j1"></el-option>
                      <el-option label="区域二" value="j2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <el-form ref="form" :model="sizeForm" label-width="120px">
                  <el-form-item label="合同乙方：">
                    <el-select v-model="partyB" placeholder="请选择活动区域" id="btn5">
                      <el-option label="区域一" value="y1"></el-option>
                      <el-option label="区域二" value="y2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <el-form ref="form" :model="sizeForm" label-width="120px">
                  <el-form-item label="项目负责人：">
                    <el-select v-model="projectManager" placeholder="请选择活动区域" id="btn6">
                      <el-option label="区域一" value="r1"></el-option>
                      <el-option label="区域二" value="r2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <el-form ref="form" :model="sizeForm" label-width="120px">
                  <el-form-item label="业务员：">
                    <el-select v-model="salesMan" placeholder="请选择活动区域" id="btn7">
                      <el-option label="4" value="4"></el-option>
                      <el-option label="区域二" value="w2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <el-form
                  :label-position="labelPosition_addAfter"
                  label-width="120px"
                  :model="formLabelAlign_addAfter"
                >
                  <el-form-item label="签订日期：">
                    <el-col :span="11">
                      <el-date-picker type="date" placeholder="选择日期" v-model="signDate" id="btn8"></el-date-picker>
                    </el-col>
                  </el-form-item>
                </el-form>
                <el-form
                  :label-position="labelPosition_addAfter"
                  label-width="120px"
                  :model="formLabelAlign_addAfter"
                >
                  <el-form-item label="执行开始日期：">
                    <el-col :span="11">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="executiveStartDate"
                        id="btn9"
                      ></el-date-picker>
                    </el-col>
                  </el-form-item>
                </el-form>
                <el-form
                  :label-position="labelPosition_addAfter"
                  label-width="120px"
                  :model="formLabelAlign_addAfter"
                >
                  <el-form-item label="执行截止日期：">
                    <el-col :span="11">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="executiveEndDate"
                        id="btn10"
                      ></el-date-picker>
                    </el-col>
                  </el-form-item>
                </el-form>
              </div>
            </div>

            <!-- 合同输入右边按钮 -->

            <div class="button">
              <el-row>
                <el-button type="primary" @click="search()">查询</el-button>
                <el-button @click="reback">重置</el-button>
                <el-button type="primary" id="span" @click="change" style="color: white;">{{floder}}</el-button>
                
                  <el-button type="success" @click="Show3">+新增</el-button>
                
              </el-row>
            </div>
            <div class="card2">
              <div id="card2_bottom">
                <el-table
                  :data="list.slice((currpage - 1) * pagesize, currpage * pagesize)"
                  style="width: 100%"
                  @selection-change="handleSelectionChange"
                >
                  <el-table-column prop="contractName" label="合同名称"></el-table-column>
                  <el-table-column prop="contractAmount" label="合同金额(元)"></el-table-column>
                  <el-table-column prop="signDate" label="签订日期"></el-table-column>
                  <el-table-column prop="salesMan" label="业务员"></el-table-column>
                  <el-table-column prop="partyA" label="合同甲方"></el-table-column>
                  <el-table-column prop="partyB" label="乙方合同"></el-table-column>
                  <el-table-column prop="executiveStartDate" label="执行开始日期"></el-table-column>
                  <el-table-column prop="infoState" label="合同状态"></el-table-column>
                  <el-table-column label="操作" width="250">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text" size="small">预览</el-button>
                      <el-button @click="Show(),handleClick3(scope.row)" type="text" size="small" >修改</el-button>
                      <el-button
                        @click="handleClick2(scope.row)"
                        type="text"
                        size="small"
                        :data="list.id"
                        style="color:#FF1818"
                      >删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination
                  background
                  layout="prev, pager, next, sizes, total, jumper"
                  :page-sizes="[5, 10, 15, 20]"
                  :page-size="pagesize"
                  :total="list.length"
                  @current-change="handleCurrentChange"
                  @size-change="handleSizeChange"
                ></el-pagination>
              </div>
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
  name: "Filelist",
  components: {
    Maintabbar
  },
  data() {
    return {
      istrue: false,
      isShow: false,
      isShow3:false,
      floder: "展开v",
      labelPosition_addAfter: "right",
      formLabelAlign_addAfter: {
        region: ""
      },
      sizeForm: {
        region: ""
      },
      activeName: "first",
      form: {
        name: "",
        region: "",
        date1: ""
      },
      formInline: {
        user: "",
        region: ""
      },
      msg: 8888,

      /******* main message *******/

      contractName: "",
      contractNames: "",
      infoState: "",
      businessType: "",
      contractAmount: "",
      partyA: "",
      partyB: "",
      projectManager: "",
      salesMan: "",
      signDate: "",
      executiveStartDate: "",
      executiveEndDate: "",
      contractId: "",

      list: [
        {
          contractName: "123",
          contractNames: "123",
          infoState: "123",
          contractAmount: "123",
          partyA: "123",
          partyB: "123",
          projectManager: "123",
          salesMan: "123",
          signDate: "123",
          executiveStartDate: "123",
          executiveEndDate: "123",
        },
        {
          contractName: "123",
          contractNames: "123",
          infoState: "123",
          contractAmount: "123",
          partyA: "123",
          partyB: "123",
          projectManager: "123",
          salesMan: "123",
          signDate: "123",
          executiveStartDate: "123",
          executiveEndDate: "123",
        },
        {
          contractName: "123",
          contractNames: "123",
          infoState: "123",
          contractAmount: "123",
          partyA: "123",
          partyB: "123",
          projectManager: "123",
          salesMan: "123",
          signDate: "123",
          executiveStartDate: "123",
          executiveEndDate: "123",
        }
      ],
      list2: [],
      list3: [],
      list4: [],
      pagesize: 5,
      currpage: 1,
      count: 0
    };
  },

  //获取数据库原始数据
  created() {
    axios
      .get("http://localhost:8084/role/findAll")
      .then(res => {
        // console.log(res);
        this.list = res.data.data.filter(item => {
          return item.infoState == 0;
        });
        this.list2 = this.list;
      })
      //获取失败
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },

  methods: {
    //vue 分页函数
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    handleSelectionChange(val) {
      console.log(val);
    },
    
    
    // 展开 或 收起功能
    change() {
      this.istrue = !this.istrue;
      if (this.count % 2 == 0) {
        this.floder = "收起^";
      } else {
        this.floder = "展开v";
      }
      this.count++;
    },


    // 组合查询功能
    search() {
      var obtn1 = document.getElementById("btn1").value;
      var obtn2 = document.getElementById("btn2").value;
      var obtn3 = document.getElementById("btn3").value;
      var obtn4 = document.getElementById("btn4").value;
      var obtn5 = document.getElementById("btn5").value;
      var obtn6 = document.getElementById("btn6").value;
      var obtn7 = document.getElementById("btn7").value;
      var obtn8 = document.getElementById("btn8").value;
      var obtn9 = document.getElementById("btn9").value;
      var obtn10 = document.getElementById("btn10").value;
      axios
        .get(
          `http://localhost:8084/contract/findcondition?contractName=${obtn1}&infoState=${obtn2}&businessType=${obtn3}&partyA=${obtn4}&partyB=${obtn5}&projectManager=${obtn6}&salesMan=${obtn7}&signDate=${obtn8}&executiveStartDate=${obtn9}&executiveEndDate=${obtn10}`
        )
        .then(result => {
          this.list3 = this.list;
          this.list = result.data.data.filter(item => {
            return item.infoState == 0;
          });
        })
        .catch(error => {
          console.log(error);
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      console.log(obtn1);
    },


    // 重置功能
    reback() {
      this.list = this.list2;
    },


    // 删除功能
    handleClick2(a) {
      axios
        .get(`http://localhost:8084/contract/delete?contractId=${a.contractId}`)
        .then(result => {
        })
        .catch(error => {
          console.log(error);
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      alert("确认删除？");
      window.location.reload();
    },


    // 预览功能
    handleClick(e) {
      axios
        .get(
          `http://localhost:8084/contract/findbyid?contractId=${e.contractId}`
        )
        .then(response => {
          this.list4 = response.data.data;
          console.log(this.list4);
          this.$router.push({
            name: "Lookfile",
            params: {
              data: this.list4
            }
          });
        })
        //获取失败
        .catch(error => {
          console.log(error);
          alert("网络错误，不能访问");
        });
    },
    
    
    // 控制弹出空隐藏
    Show() {
      this.isShow = !this.isShow;
    },


    //控制新增弹出框
    Show3() {
      this.isShow3 = !this.isShow3;
    },


    // 修改功能
    refrashData() {
      axios
        .post("http://localhost:8084/contract/update", {
          contractName: this.contractName,
          contractAmount: this.contractAmount,
          signDate: this.signDate,
          salesMan: this.salesMan,
          partyA: this.partyA,
          partyB: this.partyB,
          executiveStartDate: this.executiveStartDate,
          infoState: this.infoState,
          contractId: this.contractId
        })
        .then(function(response) {
          console.log(response);
          window.location.reload();
          alert("修改成功!");
        })
        .catch(function(error) {
          console.log(error);
        });
    },


    //新增功能
    refrashData2() {
      axios
        .post("http://localhost:8084/contract/update", {
          contractName: this.contractName,
          contractAmount: this.contractAmount,
          signDate: this.signDate,
          salesMan: this.salesMan,
          partyA: this.partyA,
          partyB: this.partyB,
          executiveStartDate: this.executiveStartDate,
          infoState: this.infoState,
          contractId: this.contractId
        })
        .then(function(response) {
          console.log(response);
          window.location.reload();
          alert("修改成功!");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    
    
    // 修改前提   获取修改前的原始数据
    handleClick3(e) {
      var obj = {};
      obj = e;
      this.contractName = obj.contractName;
      this.contractAmount = obj.contractAmount;
      this.signDate = obj.signDate;
      this.salesMan = obj.salesMan;
      this.partyA = obj.partyA;
      this.partyB = obj.partyB;
      this.executiveStartDate = obj.executiveStartDate;
      this.infoState = obj.infoState;
      this.contractId = obj.contractId;
    }
  }
};
</script>

<style lang="" scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  overflow-x: hidden;
  background: rgba(240, 242, 245, 1);
}

html,
body {
  width: 100%;
  height: 100%;
}
#app .content {
  margin-top: 10px;
  width: 97%;
  height: 90%;
  margin-left: 1.5%;
  background: white;
  position: absolute;
  box-shadow: 0px 0px 1px black;
}
.nav {
  width: 100%;
  height: 50px;
  background: #333333;
}

.nav .left {
  float: left;
  margin-left: 30px;
}

.nav .left span {
  color: #f4f4f4;
  line-height: 50px;
  font-size: 14px;
}

.nav .right {
  float: right;
  margin-right: 150px;
}

.nav .right li {
  height: 30px;
  margin-top: 10px;
  float: left;
  color: #f4f4f4;
  line-height: 30px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-align: center;
}

.nav .right li:hover {
  border-bottom: 3px solid #f4f4f4;
}

.nav .user {
  width: 150px;
  height: 40px;
  margin-top: 5px;
  float: right;
  line-height: 40px;
}

.nav .user .user_img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  float: left;
}

.nav .user .user_img img {
  width: 100%;
  height: 100%;
}

.nav .user .user_id {
  float: right;
  margin-right: 40px;
}

.nav .user .user_id span {
  color: #f4f4f4;
  font-size: 14px;
}

.addAfter_content {
  width: 100%;
  height: 97.5%;
  position: relative;
  margin: auto;
  margin-top: 20px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
}

.addAfter .contract_input {
  width: 77%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
}

.el-form-item {
  height: 60px;
}

.el-select {
  width: 200px;
}

.el-input {
  width: 200px;
}

.el-button {
   width: 65px;
  height: 32px;
  /* background:rgba(24,144,255,1); */
  border-radius: 4px;
  padding: 0;
}

/* 右边按钮 */

.addAfter .button {
  width: 345px;
  position: absolute;
  right: 32px;
  top: 24px;
}

#app_addAfter #span {
  color: rgba(24, 144, 255, 1);
  font-size: 15px;
  margin-left: 10px;
}

#app_addAfter .el-button--success {
  margin-left: 50px;
}

#app_addAfter .el-button {
  height: 30px;
  font-size: 13px;
  line-height: 0;
}
#app_addAfter .el-select {
  width: 160px;
}
#app_addAfter .el-date-editor.el-input {
  width: 160px;
}
#app_addAfter a {
  color: #409eff;
  text-decoration: none;
}

#app_addAfter .card2 {
  text-align: center;
  width: 95%;
  margin: auto;
  background: white;
}

#app_addAfter .el-table td {
  padding: 0;
}

#app_addAfter .el-pagination {
  text-align: center;
}

/* tanchukuang */
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.card1 {
  width: 700px;
  padding-bottom: 10px;
  margin: 0 auto;
  margin-top: 60px;
  text-align: center;
  background: white;
}
/* .el-form-item__label {
  width: 100px !important;
  padding: 0 !important;
} */
.card1 .el-input {
  width: 468px;
  height: 30px;
}

.card1 .el-select {
  width: 468px;
  height: 25px;
}

.card1 .el-button {
  padding: 8px 16px;
}
</style>
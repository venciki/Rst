<template>
<div id="app">
  <Maintabbar></Maintabbar>
  <!-- //新增 -->
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
           
              <el-button type="primary" @click="show(),dataPush()">保存</el-button>
            
            <el-button style="width:128px">录入实验数据</el-button>
          </span>
        </div>
      </div>
    </div>


    <!-- //修改 -->
    <div class="content3" v-show="isshow2">
      <div class="add">
        <div class="header">
          <span style="float: left;">修改报告</span>
          <span style="float: right; cursor: pointer;" @click="show2">X</span>
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
           
              <el-button type="primary" @click="show2(),refrashData()">修改</el-button>
            
            <el-button style="width:128px">录入实验数据</el-button>
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
           <div class="card2">
               <div class="card2_top">
               </div>
               <div id="card2_bottom">
                 <div class="card2">
      <!-- <h2>{{ $route.query }}</h2> -->
      <div class="card2_top">
        <div class="section_con_header" style="float: left; margin-left:10px; margin-top: 20px;" >
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="报告编号：">
              <el-input v-model="formInline.reportNumber" placeholder="请输入" id="btn0"></el-input>
            </el-form-item>
            <el-form-item label="关联合同：">
              <el-select v-model="form.contractId" placeholder="请选择" id="btn1">
                <el-option :label="s1" value="1"></el-option>
                <el-option :label="s2" value="2"></el-option>
                <el-option :label="s3" value="3"></el-option>
                <el-option :label="s4" value="4"></el-option>
              </el-select>
            </el-form-item>
             <el-form-item label="报告名称：">
              <el-input v-model="formInline.reportName" placeholder="请输入" id="btn2"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button @click="reback">重置</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="show">+ 新增</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div id="card2_bottom">
        <el-table
          :data="list.slice((currpage - 1) * pagesize, currpage * pagesize)"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column prop="reportNumber" label="报告编号"></el-table-column>
          <el-table-column prop="contractId" label="关联合同"></el-table-column>
          <el-table-column prop="reportName" label="报告名称"></el-table-column>
          <el-table-column prop="startDate" label="创建时间"></el-table-column>
          <el-table-column prop="workers" label="报告编写人"></el-table-column>
          <el-table-column label="操作" width="290">
            <template slot-scope="scope">
              <el-button  @click="handleClick3(scope.row)" type="text" size="small">详情</el-button>
              <el-button @click="handleClick2(scope.row),show2()" type="text" size="small">修改</el-button>
              <el-button @click="handleClick(scope.row)" type="text" size="small" :data="list.id" style="color:#FF1818">删除</el-button>
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
import axios from 'axios'
import Maintabbar from "../../components/Main-tabbar";
export default {
  components: {
    Maintabbar
  },
  name: "",
   created() {
    axios
      .get("http://localhost:8084/report/returnall")

      .then(response => {
        console.log(response);
        this.list = response.data.data;
       
        this.list2 = this.list;
      })

      .catch(error => {
        console.log(error);

        alert("网络错误，不能访问");
      });
  },
  data() {
    return {
      isshow: false,
      isshow2: false,
      dialogTableVisible: false,
      dialogFormVisible: true,
      centerDialogVisible: false,
      formLabelWidth: "150px",

      form: {
        name: "",
        region: "",
        
      },
      formInline: {
        user: "",
        region: "",
        reportNumber: "",
      reportName: "",
      contractId: "",
      },
      s1:'',
      s2:'',
      s3:'',
      s4:'',
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
      list3: [],
      list2: [],
      list: [
        {
          reportNumber: '1234567',
          contractId: '123455',
          reportName: 'dfadfaf',
          startDate: 'asddffg',
          workers: 'savdvb'
        }
      ],
      pagesize: 5,
      currpage: 1
    };
  },
  methods:{
    //新增
     dataPush() {
       
     if( ! (this.reportNumber&&this.reportNumber&&this.reportName&&this.contractId&&this.responsibleUnit&&this.undertakeDept&&this.startDate&&this.endDate&&this.responsiblePerson&&this.workers&&this.editor&&this.reviewer&&this.approver)){
       alert('请检查你输入的数据！')
     }else{
        this.$router.push({
          path: "/shiyan/reportAfteradd"
        });
       alert('数据发送成功！')
            axios
          .post("//localhost:8084/report/add", {
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
             window.location.reload();
            
          })

          .catch(function(error) {
            console.log(error);
          });
      } 
      
     },
    show(){
      this.isshow = !this.isshow;
    },
    show2(){
      this.isshow2 = !this.isshow2;
    },
    handleClick2(){

    },
    newadd(){
       this.$router.push({
            path: './reportAfteradd',
          })
    },
     handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    handleSelectionChange(val) {
      console.log(val);
    },
     //查询
    search() {
      var obtn0 = document.getElementById("btn0").value;
      var obtn1 = document.getElementById("btn1").value;
      var obtn2 = document.getElementById("btn2").value;
      console.log(obtn0, obtn1, obtn2);
      axios
        .get(`http://localhost:8084/report/findCondition?reportNumber=${obtn0}&&contractId=${obtn1}&&reportName=${obtn2}`)
        .then(result => {
          console.log(result);
          // this.list = result.data.data.filter(item => {
          //   return item.infoState == 0;
          // });
          this.list = result.data.data
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
    },

    //重置
    reback() {
      document.getElementById("btn0").value = "";
      document.getElementById("btn1").value = '';
      document.getElementById("btn2").value = '';
      console.log(btn0.btn1,btn2)
      this.list = this.list2;
    },

     //删除
     //handleClick() 函数实现发送id，后台实现删除功能
      handleClick(a){
       console.log(a);
       
        axios.get(`http://localhost:8084/report/delete?reportId=${a.reportId}`).then( result => {
        
               alert('确认删除？')
             window.location.reload();
        } ).catch( ( error ) => {
          
            console.log(error);
            if (error.response) {
               
                console.log( error.response.data );
                console.log( error.response.status );
                console.log( error.response.headers );
            } else {
              
                console.log( "Error", error.message );
            }
            console.log( error.config );
        } );
         
      
      },
        //修改

            
    handleClick2(a) {
      console.log(a);
      this.reportNumber = a.reportNumber;
      this.reportName = a.reportName;
      this.responsibleUnit = a.responsibleUnit;
      this.responsiblePerson = a.responsiblePerson;
      this.reviewer = a.reviewer;                                              
      this.contractId = a.contractId;
      this.undertakeDept = a.undertakeDept;
      this.startDate = a.startDate;
      this.endDate = a.endDate;
      this.workers = a.workers;
      this.editor = a.editor;
      this.approver = a.approver;
      this.infoState = a.infoState;
      this.reportId = a.reportId;
      // alert(a.responsibleUnit);
    },
     refrashData(){
        // console.log(this.guidingBookId, this.form.name)
            axios.post('http://localhost:8084/report/update', {
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
            reportId:this.reportId,
          infoState : this.infoState
          })
            .then(function (response) {
            window.location.reload();
           alert('修改成功!')
              
            })
            .catch(function (error) {
              console.log(error);
            });
       },
         //详情
        handleClick3(a){
          alert(a.reportId)
           this.$router.push({
          path: "/shiyan/reportTestKong",
           query: {
                    reportId: a.reportId
                  }
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
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.el-button {
  padding: 3px;
  width: 80px;
  height: 30px;
}

.el-select {
  width: 100%;
}
.el-col {
  width: 100%;
}

.zhong .el-form-item {
  margin: 5px auto;
}

.el-button {
  height: 32px;
  line-height: 0;
}

.card2 {
  text-align: center;
  width: 97%;
  margin: auto;
  background: white;
}

.card1 {
  width: 550px;
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  background: white;
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


.content3 {
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

/* .content2 .el-button {
  padding: 3px;
  width: 80px;
  height: 30px;
 
} */


</style>
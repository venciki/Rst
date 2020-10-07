<template>
  <div id="app">

    <!-- 修改框 -->
    <div class="back" v-show="isshow">
        <!-- <dianchangxiugai></dianchangxiugai> -->
        
        <div class="card1">
          <div class="header">
          <span style="float: left;">修改参数</span>
          <span style="float: right; cursor: pointer;" @click="show">X</span>
        </div>
        <div class="zhong"
          style="margin-top: 50px;  width: 650px; text-align:left;" >
          <el-form ref="form" v-model="form.region" label-width="100px">
            <el-form-item label="电厂名称：">
              <el-input v-model="form.materialName"></el-input>
            </el-form-item>
            <div class="box2" style="text-align:center;margin-top:20px;">
              
              <el-button type="primary" @click="refrashData(),show1()">修改</el-button>
            
            </div>
          </el-form>
          </div>
        </div>
      </div>

      <!-- 修改框完 -->

    <!-- 新增狂 -->
      <div class="back" v-show="isshow1">
        <!-- <dianchangxiugai></dianchangxiugai> -->
        
        <div class="card1">
          <div class="header">
          <span style="float: left;">新增参数</span>
          <span style="float: right; cursor: pointer;" @click="show1">X</span>
        </div>
        <div class="zhong"
          style="margin-top: 50px; text-align: left;  width: 650px;" >
          <el-form ref="form" v-model="form.region" label-width="100px">
            <div></div>
            <el-form-item label="电厂名称：">
              <el-input v-model="form.materialName"></el-input>
            </el-form-item>
            <!-- <div id="section_addElement_box_file" style="text-align:left"> -->
               <el-form-item label="上传附件：">
              <div class="uploading" style="float:left">
                <img class="upload-icon" src="../../assets/img/upload.png" />
                <p>上传附件</p>
                <a class="tijiao">
                  <input type="file" name="submit" id="btn0" />
                </a>
              </div>
            </el-form-item>
            <div class="box2" style="text-align:center;margin-top:20px;">
             
              <el-button type="primary" @click="refrashData(),show1()">修改</el-button>
            </div>
          </el-form>
          
          </div>
        </div>
      </div>

      <!-- 新增框完 -->
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
            <div class="item">报告模板</div>
          </router-link>
          <router-link to="/shiyan/reportGuanli">
            <div class="item">报告管理</div>
          </router-link>
          <router-link to="/shiyan/shiyanren">
            <div class="item active">试验人员资料</div>
          </router-link>
        </div>
      </div>
      

      


      <div class="bottombox">
        <div class="card2">
          <div class="card2_top">
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <div style="float: left; margin-left:10px; margin-top: 20px;">
                <el-form-item label="关键字">
                  <el-input v-model="form.powerPlantName" placeholder="请输入关键字" id="btn0"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="search()">查询</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="info" @click="reback">重置</el-button>
                </el-form-item>
              </div>
              <div style="float: right; margin-right:10%; margin-top: 20px;">
                <el-form-item>
                  <el-button type="success" @click="show1()">+新增</el-button>
                </el-form-item>
              </div>
            </el-form>
          </div>
          <div id="card2_bottom">
            <el-table
              :data="list.slice((currpage - 1) * pagesize, currpage * pagesize)"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column prop="materialName" label="资料名称"></el-table-column>
              <el-table-column prop="materialUrl" label="附件"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClick2(scope.row),show()" type="text" size="small">修改</el-button>
                  <el-button @click="handleClick(scope.row)" type="text" size="small" style="color:#FF1818">删除</el-button>
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
</template>

<script>
import axios from "axios";
import Maintabbar from "../../components/Main-tabbar";
export default {
  components: {
    Maintabbar
  },
  name: "",
  //获取数据
  created() {
    axios
      .get("http://localhost:8084/material/findAll")

      .then(response => {
        console.log(response);
        this.list = response.data.data.filter(item => {
          return item.infoState == 0;
        });

        // this.list = response.data.data;
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
      isshow1: false,
      form: {
        name: "",
        region: "",
        materialName: ""
      },
      formInline: {
        user: "",
        region: ""
      },
      materialName: "",
      materialUrl: "",
      infoState: "",
      materialID: "",

      msg: 8888,
      list3: [],
      list2: [],
      list: [
        {
          materialName: 'asf',
          materialUrl: 'lkh'
        }
      ],
      pagesize: 5,
      currpage: 1
    };
  },
  methods: {
    // 新增
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    handleSelectionChange(val) {
      console.log(val);
    },
    //重置
    reback() {
      document.getElementById("btn0").value = "";
      this.list = this.list2;
    },

    //查询
    search() {
      var obtn1 = document.getElementById("btn0").value;
      alert(obtn1);
      axios
        .get(`http://localhost:8084/material/findByName?materialName=${obtn1}`)
        .then(result => {
          console.log(result);
          this.list = result.data.data.filter(item => {
            return item.infoState == 0;
          });
          // this.list = result.data.data;
          // this.list3 = this.list;
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
    //修改

    show() {
      this.isshow = !this.isshow;
    },
    show1() {
      this.isshow1 = !this.isshow1
    },
    //handleClick2()  函数实现修改数据记录变化后的数据
    handleClick2(a) {
      alert(a.materialName);
      this.form.materialName = a.materialName;
      this.materialUrl = a.materialUrl;
      this.materialID = a.materialID;
      this.infoState = a.infoState;
    },

    refrashData() {
      // console.log(this.guidingBookId, this.form.name)
      axios
        .post("http://localhost:8084/material/update", {
          materialName: this.form.materialName,
          materialUrl: this.materialUrl,
          materialID: this.materialID,
          infoState: this.infoState
        })
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });

      window.location.reload();
      alert("修改成功!");
    },
    //删除
    //handleClick() 函数实现发送id，后台实现删除功能
    handleClick(a) {
      alert(a.materialID);

      axios
        .get(`http://localhost:8084/material/delete?materialID=${a.materialID}`)
        .then(result => {
          alert("确认删除？");
          window.location.reload();
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
.el-input {
  width: 150px;
  height: 25px;
}

.el-select {
  width: 150px;
  height: 25px;
}

.el-form-item {
  margin-bottom: 10px;
}

.el-button {
  padding: 10px 20px;
}

.card2 {
  text-align: center;
  width: 97%;
  margin: auto;
  background: white;
}

.card1 {
  /* width: 550px; */
  padding: 10px;
  margin: 100px auto;
  /* text-align: center; */
  background: white;
  width: 650px;
  height: 200px;
}

.card1 .el-input {
  width: 400px;
  height: 30px;
}

.card1 .el-select {
  width: 400px;
  height: 25px;
}

/* .card1 .el-button {
  padding: 8px 16px;
} */

.element.style {
  width: 120px;
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


*{
  padding: 0;
  margin: 0;
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

.zhong .el-button {
  width:68px;
  height:32px;
  background:rgba(45,132,239,1);
  border-radius:4px;
  /* margin-top: 40px; */
}
.card2_top .el-button {
  width:65px;
  height:32px;
  border-radius:4px;
  padding: 0;
  line-height: 32px;
}
/* 上传按钮 */
  .uploading{                   /*上传框*/  /*上传后*/
			height: 32px;
			width: 106px;
			border-radius: 10px;            
			position: relative;
      background-color:#2D84EF;
      border-radius:4px;
      left: 20px;
      top: 3px;
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
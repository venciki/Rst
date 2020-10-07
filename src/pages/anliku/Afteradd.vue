<template>
  <div id="app">
     <Maintabbar></Maintabbar>
   

    <!--    修改框-->
    <div class="content3" v-show="isshow2">
      <div class="add">
        <div class="header" style="width:100%; height:30px;  border-bottom:1px solid rgba(232,232,232,1);">
          <span style="float: left;">修改案例库</span>
          <span style="float: right; cursor: pointer;" @click="xiugai2">X</span>
        </div>
        <div
          class="zhong"
          style="margin-top: 50px; margin-left: 100px; text-align: left;  width: 500px;"
        >
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="关键字">
              <el-input style="width: 350px;" v-model="form.keyword2" placeholder="请输入"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="bottom" style="text-align: center; margin-top: 30px;">
          <el-row>
            <el-button type="primary" @click="xiugai2(),refrashData()">修改</el-button>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 修改框完 -->

     <!--    新增框-->
    <div class="content3" v-show="isshow3">
      <div class="add">
        <div class="header" style="width:100%; height:30px;  border-bottom:1px solid rgba(232,232,232,1);">
          <span style="float: left;">新增案例库</span>
          <span style="float: right; cursor: pointer;" @click="xiugai3">X</span>
        </div>
        <div
          class="zhong"
          style="margin-top: 50px; margin-left: 100px; text-align: left;  width: 500px;"
        >
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="关键字">
              <el-input style="width: 350px;" v-model="form.keyword2" placeholder="请输入"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="bottom" style="text-align: center; margin-top: 30px;">
          <el-row>
            <el-button type="primary" @click="xiugai3(),refrashData2()">保存</el-button>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 新增框完 -->

    <!--表格-->
    <div class="bottombox">
      <div class="card2_top">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <div style="float: left; margin-left:20px; margin-top: 20px;">
            <el-form-item label="关键字">
              <el-input v-model="form.keyword" placeholder="请输入关键字" id="btn0"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search()">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="info" @click="reback">重置</el-button>
            </el-form-item>
          </div>
          <div style="float: right; margin-right:20px; margin-top: 20px;">
            <el-form-item>
              <el-button type="success" @click="xiugai3">
                +新增
              </el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    <div id="card2_bottom" style="text-align:center;">
      <el-table
        :data="list.slice((currpage - 1) * pagesize, currpage * pagesize)"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="keyword" label="关键字"></el-table-column>
        <el-table-column prop="materialUrl" label="附件" id="fileName"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row),xiugai2()"
              type="text"
              size="small"
              :data="list.id"
            >修改</el-button>
            <el-button
              @click="handleClick2(scope.row),Show()"
              type="text"
              size="small"
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
</template>

<script>
import axios from "axios";
import Maintabbar from "../../components/Main-tabbar";
export default {
  name: "",
  components:{
    Maintabbar
  },
  data() {
    return {
      isShow: false,
      isshow2: false,
      isshow3:false,
      form: {
        name: "",
        region: "",
        keyword: "",
        keyword2: "",
        address: "",
        phone: "",
        postcode: ""
      },
      formInline: {
        user: "",
        region: ""
      },
      powerPlantType: "",
      generatorCapacity: "",
      voltageLevel: "",
      province: "",
      caseLibraryID: "",
      keyword: "",
      materialUrl: "",
      // 表格
      list3: [],
      list2: [],
      list: [
        {
          keyword: "主变、温度过高、解体、松动",
          materialUrl: "123.doc"
        }
      ],
      msg: 8888,
      pagesize: 5,
      currpage: 1
    };
  },
  created() {
    axios
      .get("http://localhost:8084/caseLibrary/findall")
      .then(response => {
        console.log(response);
        this.list = response.data.data;
        this.list3 = response.data.data;
        this.list2 = this.list;
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  methods: {
    // 查找
    search() {
      var obtn1 = document.getElementById("btn0").value;
      axios
        .get(
          `http://localhost:8084/caseLibrary/findByKeywordLike?keyword=${obtn1}`
        )
        .then(response => {
          this.list = response.data.data;
          this.list2 = this.list;
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

    //修改前提
    handleClick(a) {
      alert(a.keyword);
      this.form.keyword2 = a.keyword;
      this.caseLibraryID = a.caseLibraryID;
      this.materialUrl = a.materialUrl;
    },
    // 修改2
    refrashData() {
      axios
        .post("http://localhost:8084/caseLibrary/update", {
          caseLibraryID: this.caseLibraryID,
          keyword: this.form.keyword2,
          materialUrl: this.materialUrl
        })
        .then(function(response) {
         
        })
        .catch(function(error) {
          console.log(error);
        });
         window.location.reload();
          alert("修改成功!");
    },

    // 修改2
    refrashData2() {
      axios
        .post("http://localhost:8084/caseLibrary/update", {
          caseLibraryID: this.caseLibraryID,
          keyword: this.form.keyword2,
          materialUrl: this.materialUrl
        })
        .then(function(response) {
         
        })
        .catch(function(error) {
          console.log(error);
        });
         window.location.reload();
          alert("新增成功!");
    },
    // 控制修改弹出框
    xiugai2() {
      this.isshow2 = !this.isshow2;
    },

    xiugai3() {
      this.isshow3 = !this.isshow3;
    },
    // 删除
    handleClick2(a) {
      axios
        .get(
          `http://localhost:8084/caseLibrary/delete?caseLibraryID=${a.caseLibraryID}`
        )
        .then(result => {
        })
        .catch(error => {
          console.log(error);
          if (error.response) {
            alert("a");
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
    // 重置
    reback() {
      document.getElementById("btn0").value = "";
      this.list = this.list3;
    }
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

/* 按钮样式 */
.el-button {
  width: 65px;
  height: 32px;
  border-radius: 4px;
  padding: 0;
  line-height: 32px;
}

.el-form-item {
  margin-bottom: 10px;
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

.el-form-item__label {
  width: 100px !important;
  padding: 0 !important;
}

.card1 .el-input {
  width: 400px;
  height: 30px;
}

.card1 .el-select {
  width: 400px;
  height: 25px;
}

html,
body {
  width: 100%;
  height: 100%;
}

/* #app {
  margin-top: 10px;
  width: 97%;
  height: 90%;
  margin-left: 1.5%;
  background: white;
  position: absolute;
  box-shadow: 0px 0px 1px black;
} */
.bottombox {
  position: absolute;
  width: 97%;
  left:1.5%;
  height: calc(100% - 50px);
  padding: 10px 0 0 0;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  /* border:2px solid red; */
}


.card1 .el-button {
  padding: 8px 16px;
}

.element.style {
  width: 120px;
}

.content3 {
  position: absolute;
  width: 100%;
  height: 97%;
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.add {
  /* position: absolute; */
  width: 650px;
  height: 260px;
  
  margin: 0 auto;
  padding: 15px;
  margin-top: 60px;
  background: white;
}
</style>

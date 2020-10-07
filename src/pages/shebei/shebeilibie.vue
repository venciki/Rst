<template>
  <div id="app">
    <!-- 新增弹框 -->
    <div class="content2" v-show="isshow">
      <div class="add">
        <div
          class="header"
          style="width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >新增设备</span>
          <span
            @click="show()"
            style="cursor: pointer; display:block;width:100px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
        </div>
        <div
          class="zhong"
          style="margin-top: 50px; margin-left: 100px; text-align: left;  width: 500px;"
        >
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="设备类型名称">
              <el-input style="width: 350px;" v-model="equipmentTypeName" placeholder="请输入"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <el-button
          type="primary"
          @click="add"
          style="width:68px;height:32px;padding:0;background:rgba(45,132,239,1);border-radius:4px;"
        >保存</el-button>
      </div>
    </div>

    <!-- 新增弹框完 -->

    <!-- 修改弹框 -->
    <div class="content2" v-show="isshow2">
      <div class="add">
        <div
          class="header"
          style="width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >修改设备</span>
          <span
            @click="xiugai2()"
            style="cursor: pointer; display:block;width:100px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
        </div>
        <div
          class="zhong"
          style="margin-top: 50px; margin-left: 100px; text-align: left;  width: 500px;"
        >
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="设备类型名称">
              <el-input style="width: 350px;" v-model="equipmentTypeName" placeholder="请输入"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <el-button
          type="primary"
          @click="refrashData"
          style="width:68px;height:32px;padding:0;background:rgba(45,132,239,1);border-radius:4px;"
        >修改</el-button>
      </div>
    </div>

    <!-- 修改弹框完 -->

    <Maintabbar></Maintabbar>
    <div class="mainBox">
      <div class="headbox">
        <div class="navbar">
          <router-link to="/shebei/dianchang">
            <div class="item">电厂管理</div>
          </router-link>
          <router-link to="/shebei/shebeilibie">
            <div class="item active">设备类别</div>
          </router-link>
          <router-link to="/shebei/shebeiguanli">
            <div class="item">设备管理</div>
          </router-link>
        </div>
      </div>
      <div class="bottombox">
        <div class="card2">
          <div class="card2_top" style="padding: 10px 20px 10px 20px;">
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <div class="left" style="float: left;">
                <el-form-item label="设备类型名称">
                  <el-input v-model="equipmentTypeNames" placeholder="设备类型名称" id="btn0"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="info" @click="reback">重置</el-button>
                </el-form-item>
              </div>
              <div class="right" style="float: right;">
                <el-form-item>
                  <el-button type="success" @click="show()">+新增</el-button>
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
              <el-table-column prop="equipmentTypeName" label="设备类型名称"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClick1(scope.row),xiugai2()" type="text" size="small">修改</el-button>
                  <el-button
                    style="color:rgba(255,24,24,1);"
                    @click="handleClick2(scope.row)"
                    type="text"
                    size="small"
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
</template>
  
  <script>
import axios from "axios";
import Vue from "vue";
import navbar from "./navbar";
import Maintabbar from "../../components/Main-tabbar";
import { Editable, EditableColumn } from "vue-element-extends";
import "vue-element-extends/lib/index.css";

Vue.use(Editable);
Vue.use(EditableColumn);
export default {
  components: {
    navbar,
    Maintabbar
  },
  
  //获取到所有的设备
  created() {
    axios
      .get("http://localhost:8084/equipmentType/getAll")
     
      .then(response => {
        console.log(response);
        // alert(response);

        this.list = response.data.data.filter(item => {
          return item.infoState == 0;
        });
        // this.list = response.data.data;
        this.list2 = this.list;
      })

      //获取失败

      .catch(error => {
        console.log(error);

        alert("网络错误，不能访问");
      });
  },
  data() {
    return {
      path: "/shebei/dianchang",
      isshow: false,
      isshow2: false,
      pagesize: 5,
      currpage: 1,
      form: {
        name: ""
      },
      list2: [],
      list3: [],
      equipmentTypeName: "",
      equipmentTypeNames: "",
      list: [{ equipmentTypeName: "123" }]
    };
  },
  methods: {

    //vue分页函数
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    handleSelectionChange(val) {
      console.log(val);
    },

    // add()新增函数  实现新增功能
    add() {
      axios
        .post("http://localhost:8084/equipmentType/add", {
          equipmentTypeName: this.equipmentTypeName
        })
        .then(function(response) {
          window.location.reload();
          alert("新增成功!");
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    //refrashData() 修改函数  实现修改功能
    refrashData() {
      axios
        .post("http://localhost:8084/equipmentType/update", {
          equipmentTypeID: this.equipmentTypeID,
          equipmentTypeName: this.equipmentTypeName
        })
        .then(function(response) {
          window.location.reload();
          alert("修改成功!");
        })
        .catch(function(error) {
          console.log(error);
        });
    },


    //重置按钮实现数据的重置，以及查询条件赋值为空
    reback() {
      document.getElementById("btn0").value = "";
      // console.log(this.list2);
      this.list = this.list2;
    },


    //handleClick1()  在对数据进行修改前保存原始数据
    handleClick1(a) {
      var obj = {};
      obj = a;
      (this.equipmentTypeID = obj.equipmentTypeID),
        (this.equipmentTypeName = obj.equipmentTypeName);
      // alert(obj.equipmentTypeID)
    },


    //handleClick2() 函数实现发送id，后台实现删除功能
    handleClick2(a) {
      axios
        .get(
          `http://localhost:8084/equipmentType/delete?equipmentTypeID=${a.equipmentTypeID}`
        )
        .then(result => {
          // 只有状态码为200,才能返回true,说明注册成功,其他状态码全部失败！
        })
        .catch(error => {
          console.log(error);
          if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            alert("a");
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      alert("确认删除？");
      window.location.reload();
    },

    //控制新增框的显示
    show() {
      this.isshow = !this.isshow;
    },


    //控制修改框的显示
    xiugai2() {
      this.isshow2 = !this.isshow2;
    },


    //search()  组合查询
    search() {
      var obtn1 = document.getElementById("btn0").value;
      // alert(obtn1);
      //  console.log(obtn1, obtn2, obtn3, obtn4)
      axios
        .get(
          `http://localhost:8084/equipmentType/findbyName?equipmentTypeNames=${obtn1}`
        )
        .then(result => {
          //  alert('ok')
          //  console.log(result)
          //  this.list3 = this.list;
          this.list = result.data.data.filter(item => {
            return item.infoState == 0;
          });
        })
        .catch(error => {
          // 【务必注意】这里的error输出的不是一个对象【error.response才是一个对象】
          console.log(error);
          if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            // Something happened in setting up the request that triggered an Error
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
  /* box-shadow: 0px 0px  1px black; */
}

.bottombox {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
}

.content2 {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
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
  margin-top: 100px;
  padding-bottom: 10px;
  background: white;
  text-align: center;
}

.card2 .el-input__inner {
  width: 170px;
  height: 30px;
}

.card2 .el-form-item {
  margin-bottom: 10px;
}

.card2 .el-button {
  width: 65px;
  height: 32px;

  border-radius: 4px;
  padding: 0;
}

.card2 {
  text-align: center;
  width: 95%;
  margin: auto;
  background: white;
}

.card2 .bottom {
  text-align: center;
  padding: 20px;
}

.navbar {
  width: 100%;
  /* margin-left: 1.5%; */
  height: 30px;
  line-height: 25px;
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
  width: 88px;
  height: 32px;
  padding: 2.5px;
  text-align: center;
  line-height: 25px;
  border-radius: 2px 2px 0px 0px;
  color: black;
  font-size: 14px;
}
</style>
  
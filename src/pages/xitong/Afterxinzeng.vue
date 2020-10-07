<template>
  <div id="app">
    <Maintabbar></Maintabbar>
    <!-- 修改角色 -->
    <div class="content2" v-show="isshow">
      <div id="section_addRole_box">
        <div id="section_addRole_box_title">
          <span>修改角色</span>
          <div id="section_addRole_box_CloseBtn" @click="show">X</div>
        </div>
        <div id="section_addRole_box_content">
          <!--                 角色名称输入框-->
          <div id="section_addRole_box_content_RoleName">
            <span>角色名称：</span>
            <input type="text" placeholder="请输入" v-model="roleName" />
          </div>
          <!--                权限选择选择框-->
          <div id="section_addRole_box_content_ChooseArea">
            <span>权限选择：</span>
            <input type="radio" name="1" id="ChooseAll" @click="ChooseAll" />
            <span>全选</span>
            <input type="radio" name="1" id="UnChooseAll" @click="UnChooseAll" />
            <span>全不选</span>
            <br />
            <div id="section_addRole_box_content_ChooseArea_radio">
              <input type="checkbox" name="1" />
              <span>电厂管理</span>
              <input type="checkbox" name="2" />
              <span>设备类型管理</span>
              <input type="checkbox" name="3" />
              <span>设备管理</span>
              <input type="checkbox" name="4" />
              <span>合同管理</span>
              <br />
              <input type="checkbox" name="5" />
              <span>试验报价管理</span>
              <input type="checkbox" name="6" />
              <span>实验报告模板管理</span>
              <input type="checkbox" name="7" />
              <span>试验报告管理</span>
              <input type="checkbox" name="8" />
              <span>作业指导书管理</span>
              <br />
              <input type="checkbox" name="9" />
              <span>用户管理</span>
              <input type="checkbox" name="10" />
              <span>角色管理</span>
              <br />
              <input type="checkbox" name="11" />
              <span>合同(APP)</span>
              <input type="checkbox" name="12" />
              <span>设备(APP)</span>
              <input type="checkbox" name="13" />
              <span>指导书(APP)</span>
              <input type="checkbox" name="14" />
              <span>报价(APP)</span>
            </div>
          </div>

          <!--                    备注框-->
          <div id="section_addRole_box_content_remarks">
            <span>备注:</span>
            <textarea name id cols="30" rows="10" placeholder="请输入" v-model="roleNote"></textarea>
          </div>

          <!--                保存按钮-->
          <div id="section_addRole_box_HoldBtn">
            <span @click="show(),refrashData()">修改</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 修改角色完 -->

    <!-- 新增角色 -->
    <div class="content2" v-show="isshow2">
      <div id="section_addRole_box">
        <div id="section_addRole_box_title">
          <span>新增角色</span>
          <div id="section_addRole_box_CloseBtn" @click="show2">X</div>
        </div>
        <div id="section_addRole_box_content">
          <!--                 角色名称输入框-->
          <div id="section_addRole_box_content_RoleName">
            <span>角色名称：</span>
            <input type="text" placeholder="请输入" v-model="roleName" />
          </div>
          <!--                权限选择选择框-->
          <div id="section_addRole_box_content_ChooseArea">
            <span>权限选择：</span>
            <input type="radio" name="1" id="ChooseAll" @click="ChooseAll" />
            <span>全选</span>
            <input type="radio" name="1" id="UnChooseAll" @click="UnChooseAll" />
            <span>全不选</span>
            <br />
            <div id="section_addRole_box_content_ChooseArea_radio">
              <input type="checkbox" name="1" />
              <span>电厂管理</span>
              <input type="checkbox" name="2" />
              <span>设备类型管理</span>
              <input type="checkbox" name="3" />
              <span>设备管理</span>
              <input type="checkbox" name="4" />
              <span>合同管理</span>
              <br />
              <input type="checkbox" name="5" />
              <span>试验报价管理</span>
              <input type="checkbox" name="6" />
              <span>实验报告模板管理</span>
              <input type="checkbox" name="7" />
              <span>试验报告管理</span>
              <input type="checkbox" name="8" />
              <span>作业指导书管理</span>
              <br />
              <input type="checkbox" name="9" />
              <span>用户管理</span>
              <input type="checkbox" name="10" />
              <span>角色管理</span>
              <br />
              <input type="checkbox" name="11" />
              <span>合同(APP)</span>
              <input type="checkbox" name="12" />
              <span>设备(APP)</span>
              <input type="checkbox" name="13" />
              <span>指导书(APP)</span>
              <input type="checkbox" name="14" />
              <span>报价(APP)</span>
            </div>
          </div>

          <!--                    备注框-->
          <div id="section_addRole_box_content_remarks">
            <span>备注:</span>
            <textarea name id cols="30" rows="10" placeholder="请输入" v-model="roleNote"></textarea>
          </div>

          <!--                保存按钮-->
          <div id="section_addRole_box_HoldBtn">
            <span @click="show2(),refrashData2()">保存</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 新增角色完 -->

    <div class="mainBox">
      <div class="headbox">
        <div class="navbar">
          <router-link to="/xitong/xinzeng">
            <div class="item active">用户管理</div>
          </router-link>
          <router-link to="/xitong/user">
            <div class="item">角色管理</div>
          </router-link>
        </div>
      </div>
      <div class="bottombox">
        <div class="card2">
          <!-- <h2>{{ $route.query }}</h2> -->
          <div class="card2_top">
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <div style="float: left; margin-left:10px; margin-top: 20px;">
                <el-form-item label="真实姓名">
                  <el-input v-model="name" placeholder="请输入" id="btn0"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="info" @click="reback">重置</el-button>
                </el-form-item>
              </div>
              <div style="float: right; margin-right:10%; margin-top: 20px;">
                <el-form-item>
                  <el-button type="success" @click="show2">+新增</el-button>
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
              <el-table-column prop="roleName" label="角色名称"></el-table-column>
              <el-table-column prop="authorities" label="权限"></el-table-column>
              <el-table-column prop="roleNote" label="备注"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  
                  <el-button @click="handleClick2(scope.row),show()" type="text" size="small">修改</el-button>
                <el-button
                    @click="handleClick(scope.row)"
                    type="text"
                    style="color:rgba(255,24,24,1);"
                    size="small"
                    :data="list.id"
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
import Maintabbar from "../../components/Main-tabbar";
import axios from "axios";
export default {
  data() {
    return {
      isshow: false,
      isshow2: false,
      form: {
        name: "",
        region: ""
      },
      formInline: {
        user: "",
        region: ""
      },
      name: "",
      authorities: "",
      roleId: "",
      generatorCapacity: "",
      voltageLevel: "",
      province: "",
      roleNote: "",
      roleName: "",
      address: "",
      phone: "",
      postcode: "",
      msg: 8888,
      list3: [],
      list2: [],
      list: [
        {
          roleName: "业务员",
          authorities: "合同管理，合同报价等等",
          roleNote: "---"
        }
        // {
        //     roleName: '管理员',
        //     authorities: '关于火电厂重建的合同.docx',
        //     roleNote:'---'
        // }
      ],
      pagesize: 5,
      currpage: 1
    };
  },
  components: {
    Maintabbar
  },
  methods: {

    //控制修改框显示
    show() {
      this.isshow = !this.isshow;
    },

    //控制新增框显示
    show2() {
      this.isshow2 = !this.isshow2;
    },

    //vue分页
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    handleSelectionChange(val) {
      console.log(val);
    },


    //获取id删除功能
    handleClick(a) {
      axios
        .get(`http://localhost:8084/role/delete?roleId=${a.roleId}`)
        .then(result => {
          // 只有状态码为200,才能返回true,说明注册成功,其他状态码全部失败！
        })
        .catch(error => {
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
      alert("确认删除？");
      window.location.reload();
    },

    //查询功能
    search() {
      var obtn0 = document.getElementById("btn0").value;
      // console.log(obtn0)
      axios
        .get(`http://localhost:8084/role/findByName?roleName=${obtn0}`)
        .then(result => {
          this.list3 = this.list;
          console.log(result);
          this.list = result.data.data.filter(item => {
            return item.infoState == 0;
          });
        })
        .catch(error => {
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
    },

    //重置功能
    reback() {
      this.list = this.list2;
    },


    // 提交数据，修改
    refrashData() {
      var all = document.getElementById(
        "section_addRole_box_content_ChooseArea_radio"
      );
      var inputs = all.getElementsByTagName("input");
      var arr = [];
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked == true) {
          // arr = str + inputs[i].name
          arr.push(inputs[i].name);
        }
      }
      this.authorities = arr.toString();
      axios
        .post("http://localhost:8084/role/update", {
          roleName: this.roleName,
          roleNote: this.roleNote,
          authorities: this.authorities,
          roleId: this.roleId
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      window.location.reload();
      alert("修改成功!");
    },


    // 提交数据，新增
    refrashData2() {
      var all = document.getElementById(
        "section_addRole_box_content_ChooseArea_radio"
      );
      var inputs = all.getElementsByTagName("input");
      var arr = [];
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked == true) {
          // arr = str + inputs[i].name
          arr.push(inputs[i].name);
        }
      }
      this.authorities = arr.toString();
      axios
        .post("http://localhost:8084/role/update", {
          roleName: this.roleName,
          roleNote: this.roleNote,
          authorities: this.authorities,
          roleId: this.roleId
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      window.location.reload();
      alert("新增成功!");
    },

    //修改数据前保存原始数据
    handleClick2(e) {
      var obj = {};
      obj = e;
      (this.roleName = obj.roleName),
        (this.roleNote = obj.roleNote),
        (this.authorities = obj.authorities),
        (this.roleId = obj.roleId);
    },


    // 选择所有
    ChooseAll() {
      var all = document.getElementById(
        "section_addRole_box_content_ChooseArea_radio"
      );
      var inputs = all.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = true;
      }
    },

    //反选所有
    UnChooseAll() {
      var all = document.getElementById(
        "section_addRole_box_content_ChooseArea_radio"
      );
      var inputs = all.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
      }
    }
  },
  activated() {
      this.$router.push(this.path); //处理默认现实的路由
    },
    beforeRouteLeave(to, from, next) {
      this.path = this.$route.path;
      next();
    },


    //获取到所有的数据，渲染
  created() {
    axios
      .get("http://localhost:8084/role/findall")
      .then(res => {
        console.log(res);
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
  width: 300px;
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
  width: 65px;
  height: 32px;
  /* background: rgba(24, 144, 255, 1); */
  border-radius: 4px;
  padding: 0;
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

.card1 .el-button {
  width: 65px;
  height: 32px;
  background: rgba(24, 144, 255, 1);
  border-radius: 4px;
  padding: 0;
}

.element.style {
  width: 120px;
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
  /* box-shadow: 0px 0px  1px black; */
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

.item.active {
  background: rgba(45, 132, 239, 1);
  color: white;
}

.item {
  margin-right: 10px;
  width: 88px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: black;
  font-size: 14px;
  border-radius: 2px 2px 0px 0px;
  color: black;
  font-size: 14px;
}

.item.active {
  background: rgba(45, 132, 239, 1);
  color: white;
}

/* tanchukuang */
.content2 {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
#section_addRole_box {
  width: 700px;
  height: 497px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0 2px 2px 2px;
  margin: 50px auto;
  position: relative;
}
#section_addRole_box_title {
  width: 700px;
  height: 46px;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
}
#section_addRole_box_title > span {
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
  font-family: PingFangSC-Medium, PingFang SC;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 900;
}
#section_addRole_box_CloseBtn {
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
/*    新增角色——内容部分*/
#section_addRole_box_content_RoleName {
  width: 600px;
  height: 32px;
  margin-left: 40px;
  margin-top: 32px;
}
#section_addRole_box_content_RoleName > span {
  width: 70px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
  display: inline-block;
  margin-top: 6px;
  margin-bottom: 6px;
}
#section_addRole_box_content_RoleName > input {
  width: 468px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}

/*单选框部分*/
#section_addRole_box_content_ChooseArea {
  margin-top: 32px;
  margin-left: 40px;
}
#section_addRole_box_content_ChooseArea > input {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 1);
  border-radius: 0 0;
  border: 1px solid rgba(217, 217, 217, 1);
  vertical-align: text-bottom;
}
#section_addRole_box_content_ChooseArea > span {
  width: 70px;
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(29, 35, 63, 1);
  line-height: 22px;
  padding-left: 3px;
}
#section_addRole_box_content_ChooseArea_radio {
  margin-left: 78px;
  margin-top: 13px;
}
#section_addRole_box_content_ChooseArea_radio > input {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 1);
  border-radius: 0 0;
  border: 1px solid rgba(217, 217, 217, 1);
  vertical-align: text-bottom;
}
#section_addRole_box_content_ChooseArea_radio > span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
  display: inline-block;
  margin-right: 20px;
  margin-top: 10px;
  padding-left: 3px;
}

/*备注部分*/
#section_addRole_box_content_remarks {
  margin-left: 68px;
  margin-top: 32px;
  /*border: 1px solid #000;*/
}
#section_addRole_box_content_remarks > span {
  width: 42px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  line-height: 20px;
  display: inline-block;
  margin-top: 6px;
  margin-left: 5px;
}
#section_addRole_box_content_remarks > textarea {
  width: 468px;
  height: 88px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(217, 217, 217, 1);
  resize: none;
  padding-left: 12px;
  padding-top: 6px;
  vertical-align: text-top;
}

/*保存按钮*/
#section_addRole_box_HoldBtn {
  width: 68px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
  position: absolute;
  left: 316px;
  bottom: 20px;
  cursor: pointer;
}
#section_addRole_box_HoldBtn > span {
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
</style>
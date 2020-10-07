<template>
  <div id="app">
    <!-- 弹出框 -->
    <div class="content2" v-show="isshow">
      <div id="section_addRole_box">
        <div id="section_addRole_box_title">
          <span>新增角色</span>
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
          <div id="section_addRole_box_HoldBtn" @click="next">
            <el-row>
                              <el-button type="primary" @click='next()'>保存</el-button>
                      </el-row>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹出框完 -->
    <Maintabbar></Maintabbar>
    <div class="mainBox">
      <div class="headbox">
        <div class="navbar">
          <router-link to="/xitong/xinzeng">
            <div class="item active">角色管理</div>
          </router-link>
          <router-link to="/xitong/user">
            <div class="item">用户管理</div>
          </router-link>
        </div>
      </div>
      <div class="bottombox">
        <div class="content">
          <div class="center">
            <div class="img">
              <img src="../../../src/assets/img/img2.jpg" alt width="80px" height="80px" />
              <el-row>
                <el-button type="primary" @click="show">新增角色</el-button>
              </el-row>
            </div>
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
  name: "Addanli",
  data() {
    return {
      roleName: "",
      roleNote: "",
      authorities: "",
      isshow: false,
      form: {
        value: ""
      }
    };
  },
  components: {
    Maintabbar
  },
  methods: {
    show() {
      this.isshow = !this.isshow;
    },
    Save() {
      var all = document.getElementById(
        "section_addRole_box_content_ChooseArea_radio"
      );
      var inputs = all.getElementsByTagName("input");
      var arr = [];
      var str = "";
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked == true) {
          // arr = str + inputs[i].name
          arr.push(inputs[i].name);
        }
      }
      str = arr.toString();
    },
    next() {
      // if(!(1==2)) {
      //   alert('请检查数据')
      // }
      // else {
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
      var data = {
        roleName: this.roleName,
        roleNote: this.roleNote,
        authorities: this.authorities
      };
      this.$router.push({
        path: "./Afteradd"
      });
      axios
        .post("http://localhost:8084/role/add", {
          roleNote: this.roleNote,
          roleName: this.roleName,
          authorities: this.authorities
        })
        .then(function(response) {
          console.log(response);
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });

      console.log(this.roleName);
      console.log(this.roleNote);
      console.log(this.authorities);
      // }
    },
    ChooseAll() {
      var all = document.getElementById(
        "section_addRole_box_content_ChooseArea_radio"
      );
      var inputs = all.getElementsByTagName("input");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = true;
      }
    },
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
  }
};
// 192.168.1.221
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
/* background:rgba(45,132,239,1); */
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
  height: 460px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 15px;
  background: white;
  /* border: 2px solid red; */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;
}
#section_addRole_box {
  width: 700px;
  height: 497px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0 2px 2px 2px;
  margin: 0 auto;
  margin-top: 70px;
  position: relative;
}

/*    新增角色——标题部分*/
#section_addRole_box_title {
  width: 700px;
  height: 46px;
  margin-top: 10px;
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
  font-size: 16px;
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

html,
body {
  width: 100%;
  height: 100%;
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
      
<template>
  <div id="app">
    <div class="content2" v-show="isshow">
      <div id="section_addUser_box">
        <!--            标题部分-->
        <div id="section_addUser_box_title">
          <span>新增用户</span>
          <div id="section_addUser_box_CloseBtn" @click="show">X</div>
        </div>
        <!--            内容部分-->
        <div id="section_addUser_box_Content">
          <ul>
            <li>
              <span>用户名：</span>
              <input type="text" placeholder="请输入" v-model="username" />
            </li>
            <li>
              <span>真实姓名：</span>
              <input type="text" placeholder="请输入" v-model="realName" />
            </li>
            <li>
              <span>密码：</span>
              <input type="password" placeholder="请输入" v-model="password" />
            </li>
            <li>
              <span>确认密码：</span>
              <input type="password" placeholder="请输入" v-model="secondKey" />
            </li>
            <li>
              <span>联系方式：</span>
              <input type="text" placeholder="请输入" v-model="phone" />
            </li>
            <li>
              <span>角色名称：</span>
              <select name id="select" placeholder="请选择"></select>
            </li>
          </ul>
        </div>
        <!--                保存按钮-->
        <div id="section_addUser_box_HoldBtn">
          <el-row>
            <el-button type="primary" @click="save()">保存</el-button>
          </el-row>
        </div>
      </div>
    </div>
    <Maintabbar></Maintabbar>
    <div class="mainBox">
      <div class="headbox">
        <div class="navbar">
          <router-link to="/xitong/xinzeng">
            <div class="item">角色管理</div>
          </router-link>
          <router-link to="/xitong/user">
            <div class="item active">用户管理</div>
          </router-link>
        </div>
      </div>
      <div class="bottombox">
        <div class="content">
          <div class="center">
            <div class="img">
              <img src="../../../src/assets/img/img2.jpg" alt width="80px" height="80px" />
              <el-row>
                <el-button type="primary" @click="show()">新增用户</el-button>
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
  components: {
    Maintabbar
  },
  data() {
    return {
      isshow: false,
      form: {
        value: "",
        region: ""
      },
      username: "",
      realName: "",
      password: "",
      secondKey: "",
      phone: "",
      roleId: "",
      list: [],
      list2: [],
      list3: []
    };
  },
  created() {
    axios.get("http://localhost:8084/role/findall").then(res => {
      console.log(res);
      this.list = res.data.data.filter(item => {
        return item.infoState == 0;
      });
      for (var i = 0; i < this.list.length; i++) {
        this.list2.push(this.list[i]);
      }
      for (var j = 0; j < this.list2.length; j++) {
        var option = document.createElement("option");
        var select = document.getElementById("select");
        option.value = this.list2[j].roleId;
        option.innerText = this.list2[j].roleName;
        select.appendChild(option);
      }
    });
  },
  methods: {
    show() {
      this.isshow = !this.isshow;
    },
    // getData() {
    //   axios.get('http://localhost:8084/role/findall')
    //   .then(res=>{
    //     console.log(res);
    //     this.list = res.data.data.filter(item => {
    //       return item.infoState == 0;
    //     })
    //     for(var i = 0; i < this.list.length; i ++) {
    //       this.list2.push(this.list[i])
    //     }
    //     for(var j = 0; j < this.list2.length; j ++){
    //           var option = document.createElement('option')
    //           var select = document.getElementById('select')
    //           option.value = this.list2[j].roleId
    //           option.innerText = this.list2[j].roleName
    //           select.appendChild(option)
    //       }
    //   })

    // },
    save() {
      if (this.password != this.secondKey) {
        alert("输入的两次密码不同");
      } else {
        // var data = {
        //   username: this.username,
        //   realName: this.realName,
        //   password: this.password,
        //   phone: this.phone,
        //   roleId: this.roleId
        // }
        var myselect = document.getElementById("select");
        var index = myselect.selectedIndex;
        this.roleId = myselect.options[index].value;
        this.$router.push({
          path: "./Afteruser"
        });
        axios
          .post("http://localhost:8084/user/add", {
            username: this.username,
            realName: this.realName,
            password: this.password,
            phone: this.phone,
            roleId: this.roleId
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
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
</script>
      
      <style lang="" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;
}
#section_addUser_box {
  width: 700px;
  height: 500px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0 2px 2px 2px;
  margin: 0 auto;
  margin-top: 70px;
  position: relative;
}
/*新增用户-标题部分*/
#section_addUser_box_title {
  width: 700px;
  height: 46px;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
}
#section_addUser_box_title > span {
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
#section_addUser_box_CloseBtn {
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
/*新增用户——内容部分*/
#section_addUser_box_Content {
  overflow: hidden;
}
#section_addUser_box_Content > ul > li {
  float: right;
  margin-right: 81px;
  margin-top: 32px;
}
#section_addUser_box_Content > ul > li > span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
#section_addUser_box_Content > ul > li > input {
  width: 468px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}
/*保存按钮*/
#section_addUser_box_HoldBtn {
  width: 68px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
  position: absolute;
  left: 316px;
  bottom: 20px;
  cursor: pointer;
}
#section_addUser_box_HoldBtn > span {
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
  width: 90px;
  height: 32px;
  border-radius: 4px;
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
  height: 260px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 15px;
  background: white;
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
  /* height:497px; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border-radius: 0 2px 2px 2px;
  /* margin: 60px auto; */
  position: relative;
}

/*    新增角色——标题部分*/
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
#select {
  width: 468px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}

/* #btn5{
    width:90px;
height:32px;
background:rgba(45,132,239,1);
border-radius:4px;
} */
</style>
      
<template>
  <div id="app">
    <Maintabbar></Maintabbar>
    <div class="content2" v-show="isshow">
      <div class="add">
        <div class="header">
          <span style="float: left;">新增参数</span>
          <!-- <button @click="submit">tijiao</button> -->
          <span style="float: right; cursor: pointer;" @click="show">X</span>
        </div>
        <div class="zhong" style="margin-top: 50px;  text-align: left;  width: 100%; ">
          <el-form :model="form">
            <el-form-item label="试验电厂" :label-width="formLabelWidth" id="btn0">
              <el-select
                class="fl"
                v-model="ProductActive0"
                placeholder="请选择"
                @change="changeOption"
                style="width:486px;height:32px;"
              >
                <el-option
                  v-for="(item,index) in productList"
                  :key="index"
                  :value="item.powerPlantName"
                >{{item.powerPlantName}}</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="试验设备" :label-width="formLabelWidth">
              <el-select
                class="f2"
                v-model="ProductActive1"
                placeholder="请选择"
                @change="changeOption3"
                style="width:486px;height:32px;"
              >
                <el-option
                  v-for="(item,index) in productList2"
                  :key="index"
                  :value="item.equipmentName"
                >{{item.equipmentName}}</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="报告模板" :label-width="formLabelWidth">
              <el-select
                class="f3"
                v-model="ProductActive2"
                placeholder="请选择"
                @change="changeOption2"
                style="width:486px;height:32px;"
              >
                <el-option
                  v-for="(item,index) in productList3"
                  :key="index"
                  :value="item.templateName"
                >{{item.templateName}}</el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <span
            slot="footer"
            class="dialog-footer"
            style="display:block; text-align:center; margin-top:40px;"
          >
            <div class="canshu" v-bind:key="item.index" v-for="item in finallList">
              <div class="header">{{ item.item.itemsName }}</div>
              <div class="bottom" v-bind:key="row.index" v-for="row in item.params">
                <span>
                  {{row.paramsName}}
                  <input class="canshubtn" placeholder="请输入" />
                  {{row.quaUnit}}
                </span>
              </div>
            </div>
            <router-link to="./testMessageList">
              <el-button type="primary" @click="centerDialogVisible = false">保存</el-button>
            </router-link>
          </span>
        </div>
      </div>
    </div>

    <div class="header">
      <div class="header_con">
        <el-breadcrumb separator="/" style="font-size:16px;">
          <el-breadcrumb-item>报告管理</el-breadcrumb-item>
          <el-breadcrumb-item>
            <label for style="color:black;">实验数据列表</label>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <router-link to="./reportAfteradd">
          <button @click="goBack">返回</button>
        </router-link>
      </div>
    </div>
    <div class="section">
      <div class="section_con">
        <div class="section_con_main">
          <div class="img">
            <img src="../../../src/assets/img/img2.jpg" alt />
            <button @click="show">录入实验数据{{ this.$route.query.reportId }}</button>
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
  name: "canshuKong",
  //在vue组建创建好的第一个生命周期，获取到后台数据
  created() {
    this.form.reportId = this.$route.query.reportId;
    console.log(this.form.reportId);
    new Promise((resolve, reject) => {
      resolve();
    }).then(() => {
      axios
        .get("http://localhost:8084/power/findall")

        .then(response => {
          console.log(response);
          this.productList = response.data.data.filter(item => {
            return item.infoState == 0;
          });
          return new Promise((resolve, reject) => {
            resolve();
          }).then(() => {
            axios
              .get("http://localhost:8084/template/findall2")

              .then(response => {
                console.log(response);
                this.productList3 = response.data.data.filter(item => {
                  return item.infoState == 0;
                });
                return new Promise((resolve, reject) => {
                  resolve();
                }).then(() => {
                  axios
                    .get("http://localhost:8084/equipment/findall")

                    .then(response => {})

                    .catch(error => {
                      console.log(error);

                      alert("网络错误，不能访问");
                    });
                });
              })

              .catch(error => {
                console.log(error);

                alert("网络错误，不能访问");
              });
          });
        })

        .catch(error => {
          console.log(error);

          alert("网络错误，不能访问");
        });
    });
  },
  data() {
    return {
      productList: [],
      productList2: [],
      productList3: [],
      finallList: [],
      ProductActive0: "", //获取被选中的value值 默认选中的是1(北京)
      ProductActive1: "", //获取被选中的value值 默认选中的是1(北京)
      ProductActive2: "", //获取被选中的value值 默认选中的是1(北京)

      isshow: false,
      iptIsshow1: false,
      iptIsshow2: false,
      goBack() {
        history.back();
      },
      dialogTableVisible: false,
      dialogFormVisible: true,
      centerDialogVisible: false,
      powerPlantID: "",
      canshu_list: [],
      form: {
        name: "",
        radio: "",
        input: "",

        /**/
        dingxing1: "",
        dingxing2: "",
        factory: "",
        equipment: "",
        module: ""
      },
      formLabelWidth: "120px",

      //我要发送的数据

      form: {
        reportId: "", //报告id
        powerPlantName: "", //电厂名字
        equipmentId: "", //设备id
        templateId: "", //模板id
        paramsId: "", // 参数id
        Datasvalue: ""
      }
    };
  },
  methods: {
    changeOption() {
      console.log(this.ProductActive0);
      let obj = {};
      obj = this.productList.find(item => {
        return item.powerPlantName == this.ProductActive0; //筛选出对应数据
      });
      var obtn = obj.powerPlantID;
      axios
        .get(
          `http://localhost:8084/equipment/findByPowerPlantId?powerPlantID=${obtn}`
        )

        .then(response => {
          console.log(response);

          this.productList2 = response.data.data.filter(item => {
            return item.infoState == 0;
          });
        })

        .catch(error => {
          console.log(error);

          alert("网络错误，不能访问");
        });
    },
    changeOption2() {
      console.log(this.ProductActive2);
      let obj = {};
      obj = this.productList3.find(item => {
        return item.templateName == this.ProductActive2; //筛选出对应数据
      });
      this.form.templateId = obj.templateId;
      // console.log(obtn1)
      axios
        .get(
          `http://localhost:8084/template/findByTemplateId?templateId=${this.form.templateId}`
        )

        .then(response => {
          // console.log(response.data.data[0].params)
          this.finallList = response.data.data;
          console.log(this.finallList);

          for (var i = 0; i < this.finallList.length; i++) {
            var new_arr = [];
            new_arr.push(this.finallList[0].pamars.paramsId);
          }
          console.log(new_arr);
          // var items = {};
          // var params = {};
          // var new_obj = {};
          // // console.log(response.data.data[0])
          // var {items , params} = response.data.data[0];
          // // console.log(items);
          // // console.log(params);
          // Object.assign(new_obj,items,params)
          // console.log(new_obj)
          // for(var i = 0 ; i < response.data.data.length; i++){
          //   console.log(response.data.data[i]);
          // }
        })

        .catch(error => {
          console.log(error);

          alert("网络错误，不能访问");
        });
    },
    changeOption3() {
      console.log(this.ProductActive1);
      let obj = {};
      obj = this.productList2.find(item => {
        return item.equipmentName == this.ProductActive1; //筛选出对应数据
      });
      this.form.equipmentId = obj.equipmentId;
      console.log(this.form.equipmentId);
    },

    show() {
      this.isshow = !this.isshow;
    },
    dingxing1() {
      this.iptIsshow1 = true;
      this.iptIsshow2 = false;
    },
    dingxing2() {
      this.iptIsshow2 = true;
      this.iptIsshow1 = false;
    },
    adddiv() {
      var fatherdiv = document.getElementById("canshu");
      var odiv = document.createElement("div");
      odiv.style = `width:200px;height:100px;background:red;`;
      Fatherdiv.appendChild(odiv);
    },

    //数据提交
    submit() {
      console.log(this.form.reportId); //报告id

      console.log(this.ProductActive0); // 电厂名字

      console.log(this.form.equipmentId); //设备id

      console.log(this.form.templateId); //模板id
    }
  }
};
</script>

<style lang="" scoped>
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

button {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  color: #ffffff;
  cursor: pointer;
}

img {
  width: 60%;
  height: 60%;
}

.header .header_con {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 54px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  padding: 0 24px;
  text-align: center;
  line-height: 54px;
}

.header .header_con .el-breadcrumb {
  display: flex;
  justify-content: flex-start;
}

.header .header_con .el-breadcrumb__item {
  text-align: center;
  line-height: 54px;
}

.header .header_con .el-breadcrumb__item:nth-child(2) .el-breadcrumb__inner {
  font-weight: 900;
}

.header .header_con button {
  display: block;
  width: 65px;
  height: 32px;
  background: rgba(24, 144, 255, 1);
  border-radius: 4px;
  /* margin: 11px 0 11px 1450px; */
}
.dialog-footer .el-button {
  width:68px;
  height:32px;
  background:rgba(45,132,239,1);
  border-radius:4px;
}
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
}

.section .section_con {
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 97%;
  left:1.5%;
  top: 120px;
  height: 85%;
  text-align: center;
  position: absolute;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  /* border:2px solid red; */
}
.section .section_con .section_con_main {
  margin: auto;
  /* border: 2px solid red; */
}
/* .section .section_con .section_con_main .img {
  width: 100px;
  height: 100px;
  
  border: 2px solid red;
} */
/* .section_con_main button {
  
} */
.section .section_con .img {
  /* margin: 280px 0 0 652px; */
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin:auto;
  width: 150px;
  height: 150px;
  /* border: 2px solid red; */
}

.section .section_con button {
  display: inline-block;
  text-align: center;
  width: 124px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
}
.content2 {
  position: absolute;
  width: 100%;
  overflow: auto;
  /* top: -50px; */
  height: 100%;
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.add {
  position: absolute;
  width: 650px;
  height: 320px;
  /* min-height: 290px; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 15px;
  background: white;
  overflow: auto;
}

.box {
  position: absolute;
  width: 80%;
  /* height: 260px; */
  margin-top: 20px;
  margin-left: 10%;
  background: rgb(229, 241, 239);
}
.content2 .el-button {
  padding: 3px;
  width: 80px;
  height: 30px;
  /* text-align: center; */
  /* line-height: px; */
}

.canshu {
  width: 538px;
  margin: 0 auto;
  background: rgba(231, 245, 255, 1);
  padding: 5px;
  margin-bottom: 20px;
}

.canshu .header {
  width: 100%;
  height: 50px;
  text-align: left;
  text-indent: 2em;
  line-height: 50px;
  /* background: red; */
  font-size: 16px;
  font-weight: 600;
}

.canshu .bottom {
  width: 100%;
  /* height: 150px; */
  /* background: yellow */
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}

.canshu .bottom span {
  display: block;
  margin-bottom: 10px;
}

.canshubtn {
  width: 120px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  text-indent: 1em;
}
</style>

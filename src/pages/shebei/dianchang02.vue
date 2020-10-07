<template>
<!-- 修改框 -->
  <div id="app">
    <div class="back" v-show="isShow">
      <div class="card1">
        <div
          class="header"
          style="width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >修改电厂</span>
          <span
            @click="Show()"
            style="cursor: pointer; display:block;width:100px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
        </div>
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="电厂名称">
            <el-input v-model="form.powerPlantName"></el-input>
          </el-form-item>
          <el-form-item label="电厂类型">
            <el-select v-model="powerPlantType" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item lable-width="120px" label="发电机组容量" width="120">
            <el-select v-model="generatorCapacity" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="升压站电压等级">
            <el-select v-model="voltageLevel" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在省份">
            <el-select v-model="province" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电厂地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮编">
            <el-input v-model="form.postcode"></el-input>
          </el-form-item>
          <el-button type="primary" @click="Show(),refrashData()">修改</el-button>
        </el-form>
      </div>
    </div>
<!-- 修改框完 -->

<!-- 新增框 -->
    <div class="back" v-show="isShow2">
      <div class="card1">
        <div
          class="header"
          style="width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >新增电厂</span>
          <span
            @click="Show2()"
            style="cursor: pointer; display:block;width:100px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
        </div>
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="电厂名称">
            <el-input v-model="form.powerPlantName"></el-input>
          </el-form-item>
          <el-form-item label="电厂类型">
            <el-select v-model="powerPlantType" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item lable-width="120px" label="发电机组容量" width="120">
            <el-select v-model="generatorCapacity" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="升压站电压等级">
            <el-select v-model="voltageLevel" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在省份">
            <el-select v-model="province" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电厂地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮编">
            <el-input v-model="form.postcode"></el-input>
          </el-form-item>
          <el-button type="primary" @click="Show2(),refrashData2()">新增</el-button>
        </el-form>
      </div>
    </div>
<!-- 新增框完 -->


    <Maintabbar></Maintabbar>
    <div class="mainBox">
      <div class="headbox">
        <div class="navbar">
          <router-link to="/shebei/dianchang">
            <div class="item active">电厂管理</div>
          </router-link>
          <router-link to="/shebei/shebeilibie">
            <div class="item">设备类别</div>
          </router-link>
          <router-link to="/shebei/shebeiguanli">
            <div class="item">设备管理</div>
          </router-link>
        </div>
      </div>
      <div class="bottombox">
        <div class="card2">
          <!-- <h2>{{ $route.query }}</h2> -->
          <div class="card2_top">
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <div class="right2" style="float:left; margin-left:12px;">
                <el-form-item label="电厂名称">
                  <el-input v-model="form.powerPlantNames" placeholder="电厂名称" id="btn0"></el-input>
                </el-form-item>
                <el-form-item label="电厂类型">
                  <el-select v-model="powerPlantTypes" placeholder="电厂类型" id="btn1">
                    <el-option label="水电厂" value="t1"></el-option>
                    <el-option label="火电厂" value="t2"></el-option>
                    <el-option label="风电厂" value="t3"></el-option>
                    <el-option label="新能源" value="t4"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="机组容量">
                  <el-select v-model="generatorCapacitys" placeholder="活动区域" id="btn2">
                    <el-option label="100L" value="s1"></el-option>
                    <el-option label="200L" value="s2"></el-option>
                    <el-option label="300L" value="s3"></el-option>
                    <el-option label="400L" value="s4"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="电压等级">
                  <el-select v-model="voltageLevels" placeholder="活动区域" id="btn3">
                    <el-option label="110KV" value="l1"></el-option>
                    <el-option label="220KV" value="l2"></el-option>
                    <el-option label="500KV" value="l3"></el-option>
                    <el-option label="750KV" value="l4"></el-option>
                    <el-option label="1000KV" value="l4"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <el-form-item>
                <el-button type="primary" @click="search()">查询</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="info" @click="reback">重置</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="Show2">+新增</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div id="card2_bottom">
            <el-table
              :data="list.slice((currpage - 1) * pagesize, currpage * pagesize)"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column prop="powerPlantName" label="电厂名称"></el-table-column>
              <el-table-column prop="powerPlantType" label="电厂类型"></el-table-column>
              <el-table-column prop="generatorCapacity" label="发电组容量"></el-table-column>
              <el-table-column prop="voltageLevel" label="升压站电压等级"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">

                  <el-button @click="handleClick2(scope.row),Show()" type="text" size="small">修改</el-button>
                                    <el-button
                    style="color:rgba(255,24,24,1);"
                    @click="handleClick(scope.row)"
                    type="text"
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
import axios from "axios";
import Qs from "qs"; //引入qs
import dianchangxiugai from "./dianchangxiugai.vue";
import navbar from "./navbar";
import Maintabbar from "../../components/Main-tabbar";
export default {
  name: "xinjian",
  data() {
    return {
      path: "/shebei/dianchang",
      isShow: false,
      isShow2: false,
      form: {
        name: "",
        region: ""
      },
      formInline: {
        user: "",
        region: ""
      },
      options: [
        {
          value: "水电厂"
        },
        {
          value: "火电厂"
        },
        {
          value: "风电厂"
        },
        {
          value: "新能源"
        }
      ],
      options1: [
        {
          value: "100L"
        },
        {
          value: "200L"
        },
        {
          value: "300L"
        },
        {
          value: "400L"
        }
      ],
      options2: [
        {
          value: "110KV"
        },
        {
          value: "220KV"
        },
        {
          value: "500KV"
        },
        {
          value: "750KV"
        },
        {
          value: "1000KV"
        }
      ],
      options3: [
        {
          value: "陕西省"
        },
        {
          value: "山西省"
        },
        {
          value: "山东省"
        },
        {
          value: "湖北省"
        }
      ],
      powerPlantType: "",
      powerPlantTypes: "",
      generatorCapacity: "",
      generatorCapacitys: "",
      voltageLevel: "",
      voltageLevels: "",
      province: "",
      powerPlantID: "",
      form: {
        powerPlantName: "",
        powerPlantNames: "",
        address: "",
        phone: "",
        postcode: "",
        phone: ""
      },
      msg: 8888,
      list3: [],
      list2: [],
      list: [{ powerPlantName: "123" }],
      pagesize: 5,
      currpage: 1
    };
  },
  components: {
    dianchangxiugai,
    navbar,
    Maintabbar
  },
  computed: {
    add_pri() {
      return this.province + this.form.address;
    }
  },

  //在vue组建创建好的第一个生命周期，获取到后台传回来的电厂数据
  created() {
    axios
      .get("http://47.94.213.70:8084/power/findall")

      .then(response => {
        console.log(response);

        this.list = response.data.data.filter(item => {
          return item.infoState == 0;
        });

        this.list2 = this.list;
      })

      .catch(error => {
        console.log(error);

        alert("网络错误，不能访问");
      });
  },

  methods: {
   

    //refrashDate()  函数点击实现提交数据，实现修改数据
    refrashData() {
      axios
        .post("http://localhost:8084/power/add", {
          address: this.form.address,
          powerPlantName: this.form.powerPlantName,
          powerPlantType: this.powerPlantType,
          generatorCapacity: this.generatorCapacity,
          voltageLevel: this.voltageLevel,
          province: this.province,
          address: this.form.address,
          phone: this.form.phone,
          postcode: this.form.postcode,
          powerPlantID: this.powerPlantID
        })
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });

      window.location.reload();
      alert("修改成功!");
    },


    //refrashDate2()  函数点击实现提交数据，实现新增数据
    refrashData2() {
      axios
        .post("http://localhost:8084/power/add", {
          address: this.form.address,
          powerPlantName: this.form.powerPlantName,
          powerPlantType: this.powerPlantType,
          generatorCapacity: this.generatorCapacity,
          voltageLevel: this.voltageLevel,
          province: this.province,
          address: this.form.address,
          phone: this.form.phone,
          postcode: this.form.postcode,
          powerPlantID: this.powerPlantID
        })
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });

      window.location.reload();
      alert("新增成功!");
    },

    //handleClick() 函数实现发送id，后台实现删除功能
    handleClick(a) {
      axios
        .get(
          `http://localhost:8084/power/delete?powerPlantID=${a.powerPlantID}`
        )
        .then(result => {})
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

    //handleClick2()  在对数据进行修改前保存原始数据
    handleClick2(a) {
      var obj = {};
      obj = a;
      this.form.powerPlantName = obj.powerPlantName;
      this.powerPlantType = obj.powerPlantType;
      this.generatorCapacity = obj.generatorCapacity;
      this.voltageLevel = obj.voltageLevel;
      this.province = obj.province;
      this.form.powerPlantID = obj.powerPlantID;
      this.form.postcode = obj.postcode;
      this.form.province = obj.province;
      this.form.address = obj.address;
      this.form.phone = obj.phone;
      this.powerPlantID = obj.powerPlantID;
    },
    
    //重置按钮实现数据的重置，以及查询条件赋值为空

    reback() {
      document.getElementById("btn0").value = "";
      document.getElementById("btn1").value = "";
      document.getElementById("btn2").value = "";
      document.getElementById("btn3").value = "";
      this.list = this.list2;
    },

    //控制修改框的显示
    Show() {
      this.isShow = !this.isShow;
    },

    //控制新增框的显示
    Show2() {
      this.isShow2 = !this.isShow2;
    },


    //vue实现分页
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    handleSelectionChange(val) {
      console.log(val);
    },

    //search()  组合查询
    search() {
      var obtn1 = document.getElementById("btn0").value;
      var obtn2 = document.getElementById("btn1").value;
      var obtn3 = document.getElementById("btn2").value;
      var obtn4 = document.getElementById("btn3").value;

      axios
        .get(
          `http://localhost:8084/power/findcondition?powerPlantNames=${obtn1}&powerPlantTypes=${obtn2}&generatorCapacitys=${obtn3}&voltageLevels=${obtn4}`
        )
        .then(result => {
          console.log(obtn1, obtn2, obtn3, obtn4);

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
    },
    activated() {
      this.$router.push(this.path);
    },
    beforeRouteLeave(to, from, next) {
      this.path = this.$route.path;
      next();
    }
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
  height: 97%;
  padding: 10px 0 0 0;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
}

.back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.el-input {
  width: 200px;
  height: 32px;
}

.el-select {
  width: 200px;
  height: 32px;
}

.el-form-item {
  margin-bottom: 10px;
}

.el-button {
  width: 65px;
  height: 32px;
  /* background:rgba(24,144,255,1); */
  border-radius: 4px;
  padding: 0;
}

.card2 {
  text-align: center;
  width: 95%;
  margin: auto;
  background: white;
}

.card1 {
  width: 600px;
  /* padding: 10px; */
  margin: 0 auto;
  margin-top: 60px;
  text-align: center;
  box-sizing: border-box;
  padding-bottom: 10px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0px 2px 2px 2px;
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

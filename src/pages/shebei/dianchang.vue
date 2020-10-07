<template>
  <div id="app">
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
        <div class="card1">
          <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="电厂名称">
              <el-input v-model="form.powerPlantName"></el-input>
            </el-form-item>
            <el-form-item label="电厂类型" label-width="150px">
              <el-select v-model="powerPlantType" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label-width="150px" label="发电机组容量">
              <el-select v-model="generatorCapacity" placeholder="请选择">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="升压站电压等级(选填)" label-width="150px">
              <el-select v-model="voltageLevel" placeholder="请选择">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所在省份 (选填)" label-width="150px">
              <el-select v-model="province" placeholder="请选择">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="电厂地址 (选填)" label-width="150px">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="电话 (选填)" label-width="150px">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮编 (选填)" label-width="150px">
              <el-input v-model="form.postcode"></el-input>
            </el-form-item>
            <el-button type="primary" @click="dataPush">保存</el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import navbar from "./navbar";
import Maintabbar from "../../components/Main-tabbar";
export default {
  name: "xinjian",
  components: {
    navbar,
    Maintabbar
  },
  data() {
    return {
      path: "/shebei/dianchang",
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
      generatorCapacity: "",
      voltageLevel: "",
      province: "",
      form: {
        powerPlantName: "",
        address: "",
        phone: "",
        postcode: ""
      }
    };
  },
  methods: {
    //  dataPush()   实现数据验证以及提交数据跳转路由
    dataPush() {
      if (
        !(
          this.form.powerPlantName &&
          this.form.address &&
          this.form.phone &&
          this.form.postcode &&
          this.powerPlantType &&
          this.generatorCapacity &&
          this.voltageLevel &&
          this.province
        )
      ) {
        alert("请检查你输入的数据");
      } else {
        this.$router.push({
          path: "./dianchangguanli"
        });
        axios
          .post("http://47.94.213.70:8084/power/add", {
            address: this.form.address,
            powerPlantName: this.form.powerPlantName,
            powerPlantType: this.powerPlantType,
            generatorCapacity: this.generatorCapacity,
            voltageLevel: this.voltageLevel,
            province: this.province,

            address: this.form.address,
            phone: this.form.phone,
            postcode: this.form.postcode
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
.card1 {
  width: 600px;
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  background: white;
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
  /* padding: 8px 16px; */
  /* border: 2px solid red; */
  width: 68px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
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

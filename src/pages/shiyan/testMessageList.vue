<template>
  <div id="app">
    <Maintabbar></Maintabbar>
    <div class="header" style="position:relative; display:flex">
      <el-breadcrumb separator="/" style="line-height:54px; margin-left:32px; font-size:16px;">
        <el-breadcrumb-item>报告管理</el-breadcrumb-item>
        <el-breadcrumb-item><label for="" style="color:black">试验数据列表</label></el-breadcrumb-item>
      </el-breadcrumb>
      <el-row style="position:absolute; right:24px; top:11px">
        <router-link to="./reportTestKong"><el-button type="primary">返回</el-button></router-link>
      </el-row>
    </div>


    <div class="card2">
      <!-- <h2>{{ $route.query }}</h2> -->
      <div class="card2_top">
        <div class="section_con_header">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <div style="float:left">
              <el-form-item label="试验设备：">
                <el-select v-model="form.data1" placeholder="请选择">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="报告模板：">
                <el-select v-model="form.data2" placeholder="请选择">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="findResult">查询</el-button>
              </el-form-item>
              <el-form-item>
                <el-button @click="clearResult">重置</el-button>
              </el-form-item>
            </div>
            <el-form-item style="float:right">
              <el-button type="success" @click="clearResult">+ 新增</el-button>
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
          <el-table-column prop="powerPlantName" label="实验电厂"></el-table-column>
          <el-table-column prop="powerPlantMc" label="实验设备"></el-table-column>
          <el-table-column prop="powerPlantMod" label="报告模板"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick2(scope.row),Show()" type="text" size="small">修改</el-button>
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
</template>

<script>
import Maintabbar from "../../components/Main-tabbar";
export default {
  name: "",
  components: {
    Maintabbar
  },
  data() {
    return {
      isShow: false,

      form: {
        name: "",
        region: ""
      },
      formInline: {
        user: "",
        region: ""
      },
      powerPlantType: "",
      generatorCapacity: "",
      voltageLevel: "",
      province: "",
      form: {
        powerPlantName: "",
        address: "",
        phone: "",
        postcode: ""
      },
      msg: 8888,
      list3: [],
      list2: [],
      list: [
        {
          powerPlantMc: '1#主变',
          powerPlantName: "西安火电厂",
          powerPlantMod: "综合楼10kV照明1#变压器试验报告"
        },
        {
          powerPlantMc: '断路器',
          powerPlantName: "咸阳火电厂",
          powerPlantMod: "1#主变35kV进线柜断路器试验报告"
        }
      ],
      pagesize: 5,
      currpage: 1
    };
  }
};
</script>

<style lang="" scoped>

.header {
  width: 100%;
  height: 54px;
  background:rgba(255,255,255,1);
border-radius:2px;
  /* border:1px solid #000; */
}


.back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
/* .el-input {
  width: 150px;
  height: 25px;
}

.el-select {
  width: 150px;
  height: 25px;
} */
/* 
.el-form-item {
  margin-bottom: 10px;
} */

.el-button {
  height: 32px;
  line-height: 0;
}

.card2 {
  text-align: center;
  width: 97%;
  left: 1.5%;
  top:120px;
  height: 84%;
  position: absolute;
  margin: auto;
  margin-top: 14px;
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
  padding: 8px 16px;
}

.element.style {
  width: 120px;
}
.section_con_header {
  width: 95%;
  height: 72px;
  margin: 0 auto;
}
.section_con_header .find {
  display: inline-block;
  padding-top: 24px;
}
.section_con_header .find input {
  width: 200px;
  height: 32px;
  text-indent: 1em;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}
.section_con_header .el-form-item {
  margin-top: 20px;
}
.section_con_header .el-form-item .el-button--success {
  width: 82px;
  background: rgba(91, 209, 113, 1);
  border-radius: 4px;
}
</style>
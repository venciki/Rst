<template>
  <div id="app">
    <Maintabbar></Maintabbar>
    <div class="content2" v-show="isshow">
      <div class="add">
        <div class="header">
          <span style="float: left;">修改参数</span>
          <span style="float: right; cursor: pointer;" @click="show">X</span>
        </div>
        <div
          class="zhong"
          style="margin-top: 50px; margin-left: 100px; text-align: left;  width: 500px;" 
        >
          <el-form :model="form">
            <el-form-item label="参数名称：" :label-width="formLabelWidth">
              <el-input v-model="form.paramsName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="参数类型：" :label-width="formLabelWidth">
                <div @click="dingxing1" style="display:inline-block"><el-radio v-model="radio" label="1" id="radio1">定性</el-radio></div>
                <div @click="dingxing2" style="display:inline-block; margin-left:10px"><el-radio v-model="radio" label="2" id="radio2">定量</el-radio></div>
            </el-form-item>
            <div style="display:flex;" v-show="iptIsshow1">
                  <el-input v-model="form.quaOptionOne" placeholder="正常" style=" width:250px"></el-input>
                  <el-input v-model="form.quaOptionTwo" placeholder="异常" style=" width:250px;"></el-input>
            </div>
            <div style="" v-show="iptIsshow2">
              <el-form-item label="单位：" :label-width="formLabelWidth" >
                <el-input v-model="form.quaUnit" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="上限：" :label-width="formLabelWidth">
                <el-input v-model="form.quaUpperLim" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="下线：" :label-width="formLabelWidth">
                <el-input v-model="form.quaLowerLim" placeholder="请输入"></el-input>
              </el-form-item>
            </div>
          </el-form>
          <div slot="footer" class="dialog-footer" style="position:absolute; bottom:10px; left:16px;">
            <el-button type="info">修改参数</el-button>
          </div>
            <el-button type="primary" @click="refrashData(),show()" style="position:absolute; right:16px; bottom:10px">修改</el-button>
        </div>
      </div>
    </div>


    <div class="content2" v-show="isshow1">
      <div class="add">
        <div class="header">
          <span style="float: left;">新增参数</span>
          <span style="float: right; cursor: pointer;" @click="show1">X</span>
        </div>
        <div
          class="zhong"
          style="margin-top: 50px; margin-left: 100px; text-align: left;  width: 500px;" 
        >
          <el-form :model="form">
            <el-form-item label="参数名称：" :label-width="formLabelWidth">
              <el-input v-model="form.paramsName" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="参数类型：" :label-width="formLabelWidth">
                <div @click="dingxing1" style="display:inline-block"><el-radio v-model="radio" label="1" id="radio1">定性</el-radio></div>
                <div @click="dingxing2" style="display:inline-block; margin-left:10px"><el-radio v-model="radio" label="2" id="radio2">定量</el-radio></div>
            </el-form-item>
            <div style="display:flex;" v-show="iptIsshow1">
                  <el-input v-model="form.quaOptionOne" placeholder="正常" style=" width:250px"></el-input>
                  <el-input v-model="form.quaOptionTwo" placeholder="异常" style=" width:250px;"></el-input>
            </div>
            <div style="" v-show="iptIsshow2">
              <el-form-item label="单位：" :label-width="formLabelWidth" >
                <el-input v-model="form.quaUnit" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="上限：" :label-width="formLabelWidth">
                <el-input v-model="form.quaUpperLim" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="下线：" :label-width="formLabelWidth">
                <el-input v-model="form.quaLowerLim" placeholder="请输入"></el-input>
              </el-form-item>
            </div>
          </el-form>
          <div slot="footer" class="dialog-footer" style="position:absolute; bottom:10px; left:16px;">
            <el-button type="info">新增参数</el-button>
          </div>
            <el-button type="primary" @click="refrashData2(),show1()" style="position:absolute; right:16px; bottom:10px">保存</el-button>
        </div>
      </div>
    </div>

    <div id="breadApp">
      <!-- 主要内容 -->
      <div class="bread-header">
        <div class="left" style="float:left;margin-left:25px; line-height:54px">
          <span style="color:gray">
            报告管理 /
            <label for style="color:black">参数配置</label>
          </span>
        </div>

        <div class="right2" style="position:absolute;right:24px;top:60px;">
          <el-form ref="form" :model="form" label-width="80px">
            <el-button type="primary">
              <router-link to="./canshuKong">返回</router-link>
            </el-button>
          </el-form>
        </div>
      </div>
    </div>

    <div class="card2">
      <div class="card2_top">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <div style="float: left; margin-left:10px; margin-top: 20px;">
            <el-form-item label="参数名称">
              <el-input v-model="form.powerPlantName" placeholder="请输入" id="btn0"></el-input>
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
              <el-button type="success" @click="show1">
                +新增
              </el-button>
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
          <el-table-column prop="paramsName" label="参数名称"></el-table-column>
          <el-table-column prop="paramsType" label="参数类型"></el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick2(scope.row),show()" type="text" size="small">修改</el-button>
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
import axios from "axios";
import Maintabbar from "../../components/Main-tabbar";
export default {
  components: {
    Maintabbar
  },
  name: "canshuAfteradd",
  data() {
    return {
      path: './canshuAfteradd',
      isshow: false,
      isshow1:false,
      iptIsshow1: true,
      iptIsshow2:false,
      form: {
        name: "",
        region: "",
        paramsName: '',
        paramsType: '',
        quaOptionOne: '',
        quaOptionTwo: '',
        quaUnit: '',
        quaUpperLim: '',
        quaLowerLim: '',
        itemsId: '',
      },
      formInline: {
        user: "",
        region: ""
      },
      generatorCapacity: "",
      voltageLevel: "",
      province: "",
      form: {
        powerPlantName: "",
        address: "",
        phone: "",
        postcode: ""
      },

      // main message
      paramsType: '',
      paramsName: '',
      radio: '1',
      quaOptionOne: '',
      quaOptionTwo: '',
      quaUnit: '',
      quaUpperLim: '',
      quaLowerLim: '',
      formLabelWidth: '120px',
      itemsId: '',






      msg: 8888,
      list3: [],
      list2: [],
      list: [
        {
            paramsName: '高压对低压及绝缘电阻R15s',
        },
        {
            paramsName: '高压对低压及绝缘电阻R60s',
        }
      ],
      pagesize: 5,
      currpage: 1
    };
  },
  created() {
    this.itemsId = this.$route.query.data
    var id = this.itemsId
    // console.log(id)
    axios
      .get(`http://localhost:8084/params/findall?itemsId=${id}`)
      .then(res => {
        console.log(res);
        this.list = res.data.data.filter(item => {
          return item.infoState == 0;
        });
        this.list2 = this.list
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: 
  {

    // vue 分页
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    handleSelectionChange(val) {
      console.log(val);
    },

    // 定量
    dingxing1() {
      this.iptIsshow1 = true;
      this.iptIsshow2 = false;
      var add = document.getElementsByClassName('add')[0];
      add.style.height = '300px'
    },

    // 定性
    dingxing2() {
      this.iptIsshow2 = true;
      this.iptIsshow1 = false;
      var add = document.getElementsByClassName('add')[0];
      add.style.height = '390px'
    },

    // 修改显示
    show() {
      this.isshow = !this.isshow
    },

    //新增显示
    show1() {
      this.isshow1 = !this.isshow1
    },

    // 组合查询函数
    search() {
      var obtn0 = document.getElementById("btn0").value;
      // console.log(obtn0)
      var id = this.itemsId
      axios
        .get(`http://localhost:8084/params/findByName?paramsName=${obtn0}&itemsId=${id}`)
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
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },

    //重置函数
    reback() {
      this.list = this.list2;
    },


    // 删除功能
    handleClick(a) {
      axios
        .get(`http://localhost:8084/params/delete?paramsId=${a.paramsId}`)
        .then(result => {
          console.log(result);
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
      alert("确认删除？");
      window.location.reload();
    },

    // 保留修改前数据
    handleClick2(e) {
      var obj = {};
      obj = e;
      this.paramsName = obj.paramsName
      this.paramsType = obj.paramsType
      this.itemsId = obj.itemsId
      this.quaOptionOne = obj.quaOptionOne
      this.quaOptionTwo = obj.quaOptionTwo
      this.quaUnit=obj.quaUnit
      this.quaUpperLim=obj.quaUpperLim
      this.quaLowerLim=obj.quaLowerLim
      this.paramsId = obj.paramsId
    },


    //修改参数
    refrashData() {
      var radio1 = document.getElementById('radio1');
      var radio2 = document.getElementById('radio2');
      var inputs1 = radio1.getElementsByTagName('input')[0];
      var inputs2 = radio2.getElementsByTagName('input')[0];
      var btn1 = radio1.getElementsByClassName('el-radio__label')[0]
      var btn2 = radio2.getElementsByClassName('el-radio__label')[0]
      if(inputs1.checked == true) {
        this.paramsType = btn1.innerText
        if(!(this.paramsName && this.quaOptionOne && this.quaOptionTwo)) {
          alert('数据不能为空')
        } else {
          console.log(this.itemsId)
          console.log(this.paramsType)
          axios.post('http://localhost:8084/params/update',{
            itemsId: this.itemsId,
            paramsType: this.paramsType,
            paramsId: this.paramsId,
            paramsName: this.paramsName,
            quaOptionOne: this.quaOptionOne,
            quaOptionTwo: this.quaOptionTwo
          })
          .then(res=>{
            console.log(res)
            // window.location.reload();
          })
          .catch(error=>{
            console.log(error)
          })
        }
      } else {
        this.paramsType = btn2.innerText
        if(!(this.paramsName && this.quaUnit && this.quaUpperLim && this.quaLowerLim)) {
          alert('数据不能为空')
        } else {
          axios.post('http://localhost:8084/params/update',{
            itemsId: this.itemsId,
            paramsName: this.paramsName,
            paramsType: this.paramsType,
            paramsId: this.paramsId,
            quaUnit: this.quaUnit,
            quaUpperLim: this.quaUpperLim,
            quaLowerLim: this.quaLowerLim
          })
          .then(res=>{
            console.log(res)
            window.location.reload();
          })
          .catch(error=>{
            console.log(error)
          })
        }
      }
    },


    //新增参数
     refrashData2() {
      var radio1 = document.getElementById('radio1');
      var radio2 = document.getElementById('radio2');
      var inputs1 = radio1.getElementsByTagName('input')[0];
      var inputs2 = radio2.getElementsByTagName('input')[0];
      var btn1 = radio1.getElementsByClassName('el-radio__label')[0]
      var btn2 = radio2.getElementsByClassName('el-radio__label')[0]
      if(inputs1.checked == true) {
        this.paramsType = btn1.innerText
        if(!(this.paramsName && this.quaOptionOne && this.quaOptionTwo)) {
          alert('数据不能为空')
        } else {
          console.log(this.itemsId)
          console.log(this.paramsType)
          axios.post('http://localhost:8084/params/update',{
            itemsId: this.itemsId,
            paramsType: this.paramsType,
            paramsId: this.paramsId,
            paramsName: this.paramsName,
            quaOptionOne: this.quaOptionOne,
            quaOptionTwo: this.quaOptionTwo
          })
          .then(res=>{
            console.log(res)
            // window.location.reload();
          })
          .catch(error=>{
            console.log(error)
          })
        }
      } else {
        this.paramsType = btn2.innerText
        if(!(this.paramsName && this.quaUnit && this.quaUpperLim && this.quaLowerLim)) {
          alert('数据不能为空')
        } else {
          axios.post('http://localhost:8084/params/update',{
            itemsId: this.itemsId,
            paramsName: this.paramsName,
            paramsType: this.paramsType,
            paramsId: this.paramsId,
            quaUnit: this.quaUnit,
            quaUpperLim: this.quaUpperLim,
            quaLowerLim: this.quaLowerLim
          })
          .then(res=>{
            console.log(res)
            window.location.reload();
          })
          .catch(error=>{
            console.log(error)
          })
        }
      }
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

.el-form-item {
  margin-bottom: 10px;
}

.el-button {
  width:65px;
  height:32px;
  border-radius:4px;
  padding: 0;
  line-height: 32px;
}

.card2 {
  left: 1.5%;
  height: 85%;
  text-align: center;
  width: 97%;
  position: absolute;
  background: white;
  top: 120px;
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


.element.style {
  width: 120px;
}

#breadApp .bread-header {
  width: 100%;
  height: 54px;
  background: rgba(255, 255, 255, 1);
  /* border: 1px solid #000; */
}

#breadApp .mainContent {
  /* height: 815px; */
  width: 97.5%;
  background: rgba(255, 255, 255, 1);
  /* border: 1px solid #000; */
  margin-top: 14px;
  margin-left: 1.25%;
  border-radius: 2px;
}

#breadApp .el-breadcrumb {
  margin-left: 32px;
}

#breadApp .el-breadcrumb span {
  line-height: 54px;
}

#breadApp .el-breadcrumb__item:last-child .el-breadcrumb__inner {
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

#breadApp .el-breadcrumb__item:first-child {
  color: rgba(136, 136, 136, 1);
}


.content2 {
  position: absolute;
  width: 100%;
  
  height: 100%;
  /* top: 120px; */
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.add {
  position: relative;
  width: 650px;
  height: 300px;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  margin: auto;
  margin-top: 10px;
  padding: 15px;
  background: white;
}

    .header .bread-header {
  width: 100%;
  height: 54px;
  background: rgba(255, 255, 255, 1);
  /* border: 1px solid #000; */
}
</style>
<template>
  <div id="app">
    <Maintabbar></Maintabbar>
     <div class="content2" v-show="isshow">
          <div class="add">
            <div class="header">
              <span style="float: left;">新增试验项</span>
              <span style="float: right; cursor: pointer;" @click="show">X</span>
            </div>
            <div
              class="zhong"
              style="margin-top: 50px; margin-left: 100px; text-align: left;  width: 500px;"
            >
              <el-form :model="form">
                <el-form-item label="试验项名称：" :label-width="formLabelWidth" style="margin-top:32px">
                  <el-input v-model="form.name" placeholder="请输入" id="itemsName"></el-input>
                </el-form-item>
                <el-form-item label="显示排序：" :label-width="formLabelWidth" style="margin-top:32px">
                  <el-input v-model="form.record" autocomplete="off" placeholder="请输入" id="sort"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer" style="margin-top:32px">
                <div style="float:left;">
                  <el-button type="info">新增检测项</el-button>
                </div>
                <div style="float:right;">
                  <el-button type="primary" @click="additem(),show()">保存</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>

    <div class="content3" v-show='isshow2'>
        <div class="add">
          <div class="header">
            <span style="float: left;">修改实验报告模板</span>
            <span style="float: right; cursor: pointer;"  @click='show2'>X</span>
          </div>
          <div class="zhong" style="margin-top: 50px; margin-left: 50px; text-align: left;  width: 500px;">
            <el-form :model="form">
              <el-form-item label="模板名称：" :label-width="formLabelWidth">
                <el-input v-model="templateName" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="适用设备：" :label-width="formLabelWidth">
                <el-checkbox-group v-model="form.type" id="testEquipment">
                  <el-checkbox label="变压器" name="1" class="checkboxs"></el-checkbox>
                  <el-checkbox label="避雷针" name="2" class="checkboxs"></el-checkbox>
                  <el-checkbox label="母线" name="3" class="checkboxs"></el-checkbox>
                  <el-checkbox label="电流互感器" name="4" class="checkboxs"></el-checkbox>
                  <el-checkbox label="电压互感器" name="5" class="checkboxs"></el-checkbox>
                  <el-checkbox label="进线柜" name="6" class="checkboxs"></el-checkbox>
                  <el-checkbox label="出线柜" name="7" class="checkboxs"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-form>
          </div>
          <div class="bottom" style="text-align: center; margin-top: 30px;" >
            <el-row>
              <el-button type="primary" @click="show2(),refrashData()">下一步</el-button>
            </el-row>
          </div>
        </div>
      </div>


    <div class="mainBox">
      <div class="headbox">
        <div class="navbar">
          <router-link to="/shiyan/zuoye">
            <div class="item">作业指导书</div>
          </router-link>
          <router-link to="/shiyan/baojia">
            <div class="item">报价管理</div>
          </router-link>
          <router-link to="/shiyan/moban">
            <div class="item active">报告模板</div>
          </router-link>
          <router-link to="/shiyan/reportGuanli">
            <div class="item">报告管理</div>
          </router-link>
          <router-link to="/shiyan/shiyanren">
            <div class="item">试验人员资料</div>
          </router-link>
        </div>
      </div>

      <div class="bottombox">
       

        <div class="inner">
          <div class="inner_con">
            <div class="inner_con_header">
              <el-form
                id="el-form"
                :inline="true"
                :model="formInline"
                class="demo-form-inline"
                show-header="true"
              >
              
                <el-form-item label="模板名称：">
                  <el-input v-model="templateName1" placeholder="请输入" id="btn0"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button @click="clearResult">重置</el-button>
                </el-form-item>
                <el-form-item id="rt-btn">
                  <el-button type="success">
                    <router-link to="./moban">+新增</router-link>
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="inner_con_main">
              <div class="banner"  v-bind:key="item.templateId" v-for="item in list" style="margin-top:10px;">
                <div class="banner_top">
                  <div class="little_left">
                    <h4>{{item.template.templateName}}</h4>
                    <p>
                      <span class="gray">使用设备:</span>
                      <span>{{item.template.equipmentTypeId}}</span>
                    </p>
                    <p>
                      <span class="gray">编制人:</span>
                      <span>张三</span>
                    </p>
                    <p>
                      <span class="gray">编制时间：</span>
                      <span>{{item.template.editorDate}}</span>
                    </p>
                  </div>
                  <div class="little_right">
                    <ul>
                      <a href="#">
                        <li class="blue" @click="show(),getId1(item.template.templateId)">新增实验项</li>
                      </a>
                      <a href="#" @click="show2(),getId(item.template.templateId)">
                        <li class="blue">修改</li>
                      </a>
                      <a href="#" @click="update(item.template.templateId)" class="del">
                        <li class="red">删除</li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div class="line"></div>
                <div class="banner_bottom">
                    <span class="gray" style="float:left">实验项:</span>

                    <ul style="float:left; margin-left:10px;">
                      <li v-bind:key="item1.templateId" v-for="item1 in item.items">
                        <p class="close_rt">{{item1.itemsName}}</p>
                          <div class="right_span">
                            <span class="blue" @click="paramMain(item1.itemsId)">参数配置</span>
                            <span class="red" @click="delitem(item1.itemsId)">删除</span>
                          </div>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Maintabbar from "../../components/Main-tabbar";
export default {
  data() {
    return {
      path:'./Aftermoban',
      isshow: false,
      isshow2: false,
      formInline: {
        con: ""
      },
      dialogTableVisible: false,
      dialogFormVisible: true,
      centerDialogVisible: false,
      form: {
        name: "",
        record: "",
        type: []
      },
      formLabelWidth: "120px",


      templateName: '',
      templateName1: '',
      templateId: '',
      equipmentTypeId: '',
      idarr: [],
      list: [
        {
          template: {
            templateName: "主变中性点避雷试验模板",
            equipmentTypeId: "变压器1"
          },
          items: {
            itemsName: '我们去'
          }
          
        },
      ],
      list1:[],
      list2:[],
      arr_template: [],
      arr_items: [],
    };
  },
  components:{
    Maintabbar
  },
  methods: {
    show() {
      this.isshow = !this.isshow;
    },
    show2() {
      this.isshow2 = !this.isshow2;
    },
    delitem(id) {
      console.log(id)
      axios.get(`http://localhost:8084/items/delete?itemsId=${id}`)
      .then(res=>{
        console.log(res)
        window.location.reload();
      })
      .catch(error=>{
        console.log(error)
      })
    },
    additem() {
      var itemsName = document.getElementById('itemsName').value;
      var sort = document.getElementById('sort').value;
      axios.post('http://localhost:8084/items/add',{
        templateId: this.templateId1,
        itemsName: itemsName,
        sort: sort
      })
      .then(res=>{
        console.log(res)
        window.location.reload();
      })
      .catch(error=>{
        console.log(error)
      })
      
    },
    // 修改
    refrashData(){
      var testEquipment = document.getElementById('testEquipment')
      // var checkboxs = document.getElementsByClassName('checkboxs')
      var inputs = testEquipment.getElementsByTagName('input')
      var arr = []
      for(var i = 0;i < inputs.length; i ++) {
        if (inputs[i].checked == true) {
          arr.push(inputs[i].value)
          this.equipmentTypeId = arr.toString()
        }
      }
      console.log(this.equipmentTypeId)
      axios.post('http://localhost:8084/template/update',{
        templateId: this.templateId,
        templateName: this.templateName,
        equipmentTypeId: this.equipmentTypeId,
      })
      .then(function(response) {
          console.log(response);
          alert("修改成功!");
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getId(id) {
      this.templateId = id
    },
    getId1(id) {
      this.templateId1 = id
    },
    // 查询
    search() {
          var obtn0 = document.getElementById('btn0').value;
          // console.log(obtn0)
          axios.get(`http://localhost:8084/template/findByName?templateName=${obtn0}`)
          .then( result => {
            this.list3 = this.list;
            console.log(result)
            this.list = result.data.data.filter(item =>{
              return item.infoState == 0;
            })
          } ).catch( ( error ) => {
            console.log(error);
            if (error.response) {
                console.log( error.response.data );
                console.log( error.response.status );
                console.log( error.response.headers );
            } else {
                console.log( "Error", error.message );
            }
            console.log( error.config );
        } );
        },
        // 删除
        update(id) {
           axios.get(`http://localhost:8084/template/delete?templateId=${id}`)
          .then( result => {
            console.log(result)
          }).catch( ( error ) => {
            console.log(error);
            if (error.response) {
                console.log( error.response.data );
                console.log( error.response.status );
                console.log( error.response.headers );
            } else {
                console.log( "Error", error.message );
            }
            console.log( error.config );
          } );
          alert('确认删除？')
          window.location.reload();
        },
        clearResult() {
          this.list = this.list1;
        },
        // 参数配置
        paramMain(id) {
          this.$router.push({
                path: './canshuKong',
                query: {
                  data: id,
                }
              })
        }
  },
  created() {
    axios.get('http://localhost:8084/template/findall1')
    .then(res=>{
      console.log(res)
      this.list = res.data.data
      console.log(this.list2)
    })
    .catch(error=>{
      console.log(error)
    })
   
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
  padding: 0;
  margin: 0;
}

ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
span {
  font-size: 14px;
}
#app .banner {
  padding: 8px;
  width: 430px;
  height: 221px;
  margin-left: 19px;
  background: rgba(250, 250, 250, 1);
  float: left;
  /*border: 1px solid #000;*/
}

.inner {
  background: #ffffff;
  margin-top: 15px;
  margin-left: 1.25%;
  height: 500px;
  width: 97.5%;
}

.inner_con_header .el-button {
  width:65px;
  height:32px;
  border-radius:4px;
  padding: 0;
  line-height: 32px;
}

.banner_top {
  width: 100%;
  height: 135px;
  /*border: 1px solid #000;*/
}

.little_left {
  height: 100%;
  width: 59%;
  /*border: 1px solid #000;*/
  float: left;
}

.little_left p {
  margin-top: 10px;
}

.little_right {
  height: 100%;
  width: 41%;
  position: relative;
  float: left;
  /*border: 1px solid #000;*/
}

.little_right ul {
  position: absolute;
  right: 0px;
}

.little_right li {
  float: left;
  margin-left: 10px;
}

.banner_bottom {
  width: 100%;
  height: 84px;
  padding-top: 10px;
  /*border: 1px solid #000;*/
}

.right_span {
  float:left;
}
.right_span span {
  cursor: pointer;
}
.close_rt {
  float: left;
}
.gray {
  color: rgba(102, 102, 102, 1);
}

.blue {
  color: #1890ff;
}

.red {
  color: #ff1818;
}
#app .line {
  height: 1px;
  width: 95%;
  background-color: #dcdcdc;
  margin: auto;
}

.el-button {
  padding: 10px 20px;
}
.inner_con_header .el-input__inner {
  height: 32px;
  padding: 0;
}
.inner_con_main {
  margin-left: 30px;
}
.inner_con_header {
  padding: 20px 0;
  margin-left: 50px;
}

#el-form {
  position: relative;
}
#el-form #rt-btn {
  position: absolute;
  right: 32px;
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
  height: 100%;
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.content3 .add {
  height: 250px;
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

.content2 .el-button {
  height:32px;
  border-radius:4px;
}
.content2 .add{
  height: 230px;
}
.zhong {
  position: relative;
}

.newadd_btm_btn {
  position: absolute;
  left: 0;
}
.item.active {
  background: rgba(45, 132, 239, 1);
  color: white;
}

.item {
  margin-right: 10px;
  width: 100px;
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
.center .el-button {
  width:90px;
  height:32px;
  background:rgba(45,132,239,1);
  border-radius:4px;
  padding: 0;
  line-height: 32px;
}
.navbar {
  width: 100%;
  /* margin-left: 1.5%; */
  height: 30px;

  display: flex;
  /* border: 2px solid red; */
  background: #f0f2f5;
}


.content2 {
  position: absolute;
  width: 100%;
  height: 97%;
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.add {
  position: absolute;
  width: 650px;
  height: 360px;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  margin: 0 auto;
  margin-top:60px;
  padding: 15px;
  background: white;
}
</style>

<template>
  <div id="app">
    <!-- 修改框 -->
    <div class="content2" v-show="isshow">
      <div id="section_addElement_box" style="text-align:center">
        <!-- <div id="section_addElement_box_title" style="text-align:left">
              <span>新增人员</span>
              <div id="section_addElement_box_title_close" @click="show">X</div>
        </div>-->
        <div
          class="header"
          style=" padding:0 20px; width:92%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >修改资料</span>
          <span
            @click="show"
            style="cursor: pointer; display:block;width:20px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
        </div>
        <div id="section_addElement_box_name" style="text-align:left">
          <span>资料名称：</span>
          <input v-model="form.name" type="text" id="btn1" placeholder="请输入" />
        </div>
        <div id="section_addElement_box_file" style="text-align:left">
          <span style="float:left;color:#1D233F;font-size:14px;">上传附件:</span>
          <div class="uploading" style="float:left">
            <img class="upload-icon" src="../../assets/img/upload.png" />
            <p>上传附件</p>
            <a class="tijiao">
              <input type="file" name="submit" id="btn0" />
            </a>
          </div>
        </div>
        <el-row>
          <el-button type="primary" @click="refrashData(),show()">修改</el-button>
        </el-row>
      </div>
    </div>

    <!-- 修改框完 -->

    <!-- 新增框 -->
    <div class="content2" v-show="isshow2">
      <div id="section_addElement_box" style="text-align:center">
        <!-- <div id="section_addElement_box_title" style="text-align:left">
              <span>新增人员</span>
              <div id="section_addElement_box_title_close" @click="show">X</div>
        </div>-->
        <div
          class="header"
          style=" padding:0 20px; width:92%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >新增资料</span>
          <span
            @click="show2"
            style="cursor: pointer; display:block;width:20px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
        </div>
        <div id="section_addElement_box_name" style="text-align:left">
          <span>资料名称：</span>
          <input :v-model="materialName" type="text" id="btn1" placeholder="请输入" />
        </div>
        <div id="section_addElement_box_file" style="text-align:left">
          <span style="float:left;color:#1D233F;font-size:14px;">上传附件:</span>
          <div class="uploading" style="float:left">
            <img class="upload-icon" src="../../assets/img/upload.png" />
            <p>上传附件</p>
            <a class="tijiao">
              <input type="file" name="submit" id="btn0" />
            </a>
          </div>
        </div>
        <el-row>
          <el-button type="primary" @click="refrashData2(),show2()">保存</el-button>
        </el-row>
      </div>
    </div>

    <!-- 新增框完 -->
    <Maintabbar></Maintabbar>
    <div class="mainBox">
      <div class="headbox">
        <div class="navbar">
          <router-link to="/shiyan/zuoye">
            <div class="item active">作业指导书</div>
          </router-link>
          <router-link to="/shiyan/baojia">
            <div class="item">报价管理</div>
          </router-link>
          <router-link to="/shiyan/moban">
            <div class="item">报告模板</div>
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
        <div class="card2">
          <div class="card2_top">
            <el-form :inline="true" :model="form" class="demo-form-inline">
              <div style="float: left; margin-left:20px; margin-top: 20px;">
                <el-form-item label="关键字">
                  <el-input v-model="form.powerPlantName" placeholder="请输入关键字" id="btn0"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="search()">查询</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="info" @click="reback">重置</el-button>
                </el-form-item>
              </div>
              <div style="float: right; margin-right:20px; margin-top: 20px;">
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
              <el-table-column prop="guidingBookName" label="文档名称"></el-table-column>
              <el-table-column prop="guidingBookUrl" label="附件"></el-table-column>
              <el-table-column prop="uploadDate" label="上传时间"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                   <el-button
                    type="text"
                    size="small"
                    @click="show(),handleClick2(scope.row)"
                    
                  >修改</el-button>
                  <el-button @click="handleClick(scope.row)" type="text" size="small" style="color:#FF1818">删除</el-button>
                 
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
import Maintabbar from "../../components/Main-tabbar";
export default {
  name: "",
  components: {
    Maintabbar
  },
  created() {
    axios
      .get("http://localhost:8084/guidingbook/findall")

      .then(response => {
        // console.log(response)
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
      guidingBookName: "",
      guidingBookUrl: "",
      guidingBookId: "",
      uploadDate: "",
      infoState: "",
      msg: 8888,
      list3: [],
      list2: [],
      list: [
        {
          guidingBookName: "123456",
          guidingBookUrl: "sgsrg",
          uploadDate: "12321312"
        }
      ],
      pagesize: 5,
      currpage: 1
    };
  },
  methods: {
    // vue分页
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    handleSelectionChange(val) {
      console.log(val);
    },

    //查询功能
    search() {
      var obtn1 = document.getElementById("btn0").value;
      axios
        .get(
          `http://localhost:8084/guidingbook/findByName?guidingBookName=${obtn1}`
        )
        .then(result => {
          console.log(result);
          this.list = result.data.data.filter(item => {
            return item.infoState == 0;
          });
          this.list3 = this.list;
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

    //修改显示
    show() {
      this.isshow = !this.isshow;
    },

    //新增显示
    show2() {
      this.isshow2 = !this.isshow2;
    },

    //handleClick2()  函数实现修改数据记录变化后的数据
    handleClick2(a) {
      alert(a.guidingBookName);
      this.form.name = a.guidingBookName;
      this.guidingBookId = a.guidingBookId;
      this.guidingBookUrl = a.guidingBookUrl;
      this.infoState = a.infoState;
      this.uploadDate = a.uploadDate;
    },

    // 修改数据
    refrashData() {
      // console.log(this.guidingBookId, this.form.name)
      axios
        .post("http://localhost:8084/guidingbook/update", {
          guidingBookId: this.guidingBookId,
          guidingBookName: this.form.name,
          infoState: this.infoState,
          guidingBookUrl: this.guidingBookUrl,
          uploadDate: this.uploadDate
        })
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });

      window.location.reload();
      alert("修改成功!");
    },

    // 新增数据
    refrashData2() {
      // console.log(this.guidingBookId, this.form.name)
      axios
        .post("http://localhost:8084/guidingbook/update", {
          guidingBookId: this.guidingBookId,
          guidingBookName: this.form.name,
          infoState: this.infoState,
          guidingBookUrl: this.guidingBookUrl,
          uploadDate: this.uploadDate
        })
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });

      window.location.reload();
      alert("新增成功!");
    },

    //重置
    reback() {
      document.getElementById("btn0").value = "";
      this.list = this.list2;
    },

    //删除
    //handleClick() 函数实现发送id，后台实现删除功能
    handleClick(a) {
      alert(a.guidingBookId);

      axios
        .get(
          `http://localhost:8084/guidingbook/delete?guidingBookId=${a.guidingBookId}`
        )
        .then(result => {
          alert("确认删除？");
          window.location.reload();
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
  padding: 10px 20px;
}
.card2 .el-button {
  width: 65px;
  height: 32px;
  border-radius: 4px;
  padding: 0;
  line-height: 32px;
}
.card2 {
  text-align: center;
  width: 97%;
  margin: auto;
  background: white;
}

.card1 {
  width: 550px;
  height: 268px;
  padding: 10px;
  margin: 0px auto;
  margin-top: 60px;
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

.content2 {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
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
.navbar {
  width: 100%;
  /* margin-left: 1.5%; */
  height: 30px;

  display: flex;
  /* border: 2px solid red; */
  background: #f0f2f5;
}

/*点击新增文档后上传文件页面*/
#section_addElement_box {
  width: 700px;
  height: 268px;
  margin: 0 auto;
  /* border:2px solid red; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0px 2px 2px 2px;
  margin-top: 60px;
  padding-bottom: 10px;
}
#section_addElement_box_title {
  width: 700px;
  height: 46px;
  border-bottom: 1px solid #e8e8e8;
}
#section_addElement_box_title > span {
  width: 64px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  line-height: 22px;
  display: inline-block;
  margin-top: 12px;
  margin-left: 16px;
}
#section_addElement_box_title_close {
  width: 30px;
  height: 30px;
  /*background-color: red;*/
  float: right;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
}
#section_addElement_box_name {
  margin-left: 81px;
  margin-top: 33px;
}
#section_addElement_box_name > span {
  width: 70px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 20px;
}
#section_addElement_box_name > input {
  width: 468px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}
#section_addElement_box_file {
  margin-left: 80px;
  margin-top: 32px;
  width: 100%;
  height: 70px;
}
.upload {
  width: 106px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
}
.upload > img {
  width: 16px;
  height: 16px;
  vertical-align: center;
  margin-left: 12px;
  margin-top: 8px;
}
.upload > span {
  width: 56px;
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(244, 244, 244, 1);
  line-height: 22px;
  display: inline-block;
  position: absolute;
  margin-left: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
}
#section_addElement_box_hold {
  width: 68px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
  margin-left: 316px;
  margin-top: 40px;
  margin-right: 316px;
  text-align: center;
  cursor: pointer;
}
#section_addElement_box_hold > span {
  width: 28px;
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
  display: inline-block;
  margin: 5px 20px;
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
.navbar {
  width: 100%;
  /* margin-left: 1.5%; */
  height: 30px;

  display: flex;
  /* border: 2px solid red; */
  background: #f0f2f5;
}

/* 上传按钮 */
.uploading {
  /*上传框*/ /*上传后*/
  height: 32px;
  width: 106px;
  border-radius: 10px;
  position: relative;
  background-color: #2d84ef;
  border-radius: 4px;
  margin-left: 17px;
  margin-top: -5px;
}
.uploading img {
  float: left;
  position: absolute;
  top: 50%;
  margin-top: -8px;
  margin-left: 12px;
}
.uploading p {
  font-size: 14px;
  color: white;
  text-align: center;
  margin-left: 12px;
  line-height: 32px;
}
.tijiao {
  height: 32px;
  width: 106px;
  position: absolute;
  top: 0;
  left: 0;
}
.tijiao input {
  height: 32px;
  width: 106px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
}
</style>
<template>
  <div id="app">
    <Maintabbar></Maintabbar>


    <!-- 修改框 -->
    <div class="content3" v-show="xiugaishow">
      <div id="section_addPrice_box">
        <!-- <div id="section_addPrice_box_title">
          <span>修改报价</span>
          <div id="section_addPrice_box_close" @click="xiugai">X</div>
        </div> -->
         <div
          class="header"
          style=" padding:0 20px; width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >修改报价</span>
          <span
            @click="xiugai"
            style="cursor: pointer; display:block;width:20px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
         
        </div>
        <div id="section_addPrice_box_content">
          <div id="section_addPrice_box_content_radio">
            <span>分类：</span>
            <input
              type="radio"
              name="0"
              id="table0"
              v-model="projectType"
              value="火电及水电按机组容量"
              @click="show_1"
            />火电及水电按机组容量
            <input
              type="radio"
              name="0"
              id="table1"
              v-model="projectType"
              value="火电及水电按电压等级"
              @click="show_2"
            />火电及水电按电压等级
            <input
              type="radio"
              name="0"
              id="tabel2"
              v-model="projectType"
              value="新能源组按机组容量"
              @click="show_3"
            />新能源组按机组容量
          </div>
          <div id="section_addPrice_box_content_table" v-show="show_one">
            <ul>
              <li>
                <span>分组：</span>
                <select v-model="projectGroup">
                  <option value disabled selected style="display:none;">请选择</option>
                  <option>变压器试验</option>
                  <option>互感器试验</option>
                  <option>真空断路层</option>
                  <option>接地试验</option>
                  <option>系统试验</option>
                  <option>其他项目</option>
                  <option>继电保护及自动化专业</option>
                  <option>其他项目</option>
                </select>
              </li>
              <li>
                <span>项目名称：</span>
                <input v-model="projectName" type="text" placeholder="请输入" />
              </li>
              <li>
                <span>单位：</span>
                <input v-model="unit" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>100MW：</span>
                <input v-model="s100MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>100MW以上：</span>
                <input v-model="s100MWOverPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>300MW：</span>
                <input v-model="h300MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>600MW：</span>
                <input v-model="h600MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>1000MW：</span>
                <input v-model="h1000MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
            </ul>
          </div>

          <div id="section_addPrice_box_content_table1" v-show="show_two">
            <ul>
              <li>
                <span>分组：</span>
                <select v-model="projectGroup">
                  <option value disabled selected style="display:none;">请选择</option>
                  <option>高压电容器试验</option>
                  <option>高压套管试验</option>
                  <option>GIS断路器试验</option>
                  <option>避雷器试验</option>
                </select>
              </li>
              <li>
                <span>项目名称：</span>
                <input type="text" v-model="projectName" placeholder="请输入" />
              </li>
              <li>
                <span>单位：</span>
                <input type="text" v-model="unit" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>220kV等级及以下：</span>
                <input type="text" v-model="d220KVPrice" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>500kV等级及以下：</span>
                <input type="text" v-model="d500KVPrice" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>750kV等级及以下：</span>
                <input type="text" v-model="d750KVPrice" placeholder="请输入价格（万元）" />
              </li>
            </ul>
          </div>

          <div id="section_addPrice_box_content_table2" v-show="show_three">
            <ul>
              <li>
                <span>分组：</span>
                <select v-model="projectGroup">
                  <option value disabled selected style="display:none;">请选择</option>
                  <option>变压器试验</option>
                  <option>互感器试验</option>
                  <option>主变低压侧共箱母线</option>
                  <option>35kV母线</option>
                  <option>35kV断路器</option>
                  <option>接地变压器及电阻柜</option>
                  <option>SVG（控制柜）</option>
                  <option>箱式变压器</option>
                  <option>35kV集电线路</option>
                  <option>高压断路器试验（含SF6组合电器）</option>
                  <option>三相组合式过电压保护器测试</option>
                  <option>接地试验</option>
                  <option>继电保护及自动化专业（全检）</option>
                  <option>其他项目</option>
                </select>
              </li>
              <li>
                <span>项目名称：</span>
                <input type="text" placeholder="请输入" v-model="projectName" />
              </li>
              <li>
                <span>单位：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="unit" />
              </li>
              <li>
                <span>50MW及以下价格：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="d50MWBelowPrice" />
              </li>
              <li>
                <span>100MW及以下价格：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="d100MWBelowPrice" />
              </li>
              <li>
                <span>100MW及以上价格：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="d50MWOverPrice" />
              </li>
            </ul>
          </div>
        </div>
        <el-row style="text-align:center;margin-top:20px;">
            <el-button type="primary" @click="refrashData()">修改</el-button>
        </el-row>
      </div>
    </div>

    <!-- 修改完 -->


    <!-- 新增框 -->
    <div class="content2" v-show="isshow">
      <div id="section_addPrice_box">
        <!-- <div id="section_addPrice_box_title">
          <span>新增报价</span>
          <div id="section_addPrice_box_close" @click="show">X</div>
        </div> -->
         <div
          class="header"
          style=" padding:0 20px; width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >新增报价</span>
          <span
           @click="show"
            style="cursor: pointer; display:block;width:20px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
         
        </div>
        <div id="section_addPrice_box_content">
          <div id="section_addPrice_box_content_radio">
            <span>分类：</span>
            <input
              type="radio"
              name="0"
              id="table0"
              v-model="projectType"
              value="火电及水电按机组容量"
              @click="show_1"
            />火电及水电按机组容量
            <input
              type="radio"
              name="0"
              id="table1"
              v-model="projectType"
              value="火电及水电按电压等级"
              @click="show_2"
            />火电及水电按电压等级
            <input
              type="radio"
              name="0"
              id="tabel2"
              v-model="projectType"
              value="新能源组按机组容量"
              @click="show_3"
            />新能源组按机组容量
          </div>
          <div id="section_addPrice_box_content_table" v-show="show_one">
            <ul>
              <li>
                <span>分组：</span>
                <select v-model="projectGroup">
                  <option value disabled selected style="display:none;">请选择</option>
                  <option>变压器试验</option>
                  <option>互感器试验</option>
                  <option>真空断路层</option>
                  <option>接地试验</option>
                  <option>系统试验</option>
                  <option>其他项目</option>
                  <option>继电保护及自动化专业</option>
                  <option>其他项目</option>
                </select>
              </li>
              <li>
                <span>项目名称：</span>
                <input v-model="projectName" type="text" placeholder="请输入" />
              </li>
              <li>
                <span>单位：</span>
                <input v-model="unit" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>100MW：</span>
                <input v-model="s100MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>100MW以上：</span>
                <input v-model="s100MWOverPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>300MW：</span>
                <input v-model="h300MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>600MW：</span>
                <input v-model="h600MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>1000MW：</span>
                <input v-model="h1000MWPrice" type="text" placeholder="请输入价格（万元）" />
              </li>
            </ul>
          </div>

          <div id="section_addPrice_box_content_table1" v-show="show_two">
            <ul>
              <li>
                <span>分组：</span>
                <select v-model="projectGroup">
                  <option value disabled selected style="display:none;">请选择</option>
                  <option>高压电容器试验</option>
                  <option>高压套管试验</option>
                  <option>GIS断路器试验</option>
                  <option>避雷器试验</option>
                </select>
              </li>
              <li>
                <span>项目名称：</span>
                <input type="text" v-model="projectName" placeholder="请输入" />
              </li>
              <li>
                <span>单位：</span>
                <input type="text" v-model="unit" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>220kV等级及以下：</span>
                <input type="text" v-model="d220KVPrice" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>500kV等级及以下：</span>
                <input type="text" v-model="d500KVPrice" placeholder="请输入价格（万元）" />
              </li>
              <li>
                <span>750kV等级及以下：</span>
                <input type="text" v-model="d750KVPrice" placeholder="请输入价格（万元）" />
              </li>
            </ul>
          </div>

          <div id="section_addPrice_box_content_table2" v-show="show_three">
            <ul>
              <li>
                <span>分组：</span>
                <select v-model="projectGroup">
                  <option value disabled selected style="display:none;">请选择</option>
                  <option>变压器试验</option>
                  <option>互感器试验</option>
                  <option>主变低压侧共箱母线</option>
                  <option>35kV母线</option>
                  <option>35kV断路器</option>
                  <option>接地变压器及电阻柜</option>
                  <option>SVG（控制柜）</option>
                  <option>箱式变压器</option>
                  <option>35kV集电线路</option>
                  <option>高压断路器试验（含SF6组合电器）</option>
                  <option>三相组合式过电压保护器测试</option>
                  <option>接地试验</option>
                  <option>继电保护及自动化专业（全检）</option>
                  <option>其他项目</option>
                </select>
              </li>
              <li>
                <span>项目名称：</span>
                <input type="text" placeholder="请输入" v-model="projectName" />
              </li>
              <li>
                <span>单位：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="unit" />
              </li>
              <li>
                <span>50MW及以下价格：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="d50MWBelowPrice" />
              </li>
              <li>
                <span>100MW及以下价格：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="d100MWBelowPrice" />
              </li>
              <li>
                <span>100MW及以上价格：</span>
                <input type="text" placeholder="请输入价格（万元）" v-model="d50MWOverPrice" />
              </li>
            </ul>
          </div>
        </div>
        <div id="section_addPrice_box_holdBtn" style="position:absolute; bottom:0px;">
          <span @click="show(),refrashData2()">
            <!-- <router-link to="./Afterbaojia">保存</router-link> -->
            保存
          </span>
        </div>
      </div>
    </div>
    <!-- 新增框完 -->

    <div class="mainBox">
      <div class="headbox">
        <div class="navbar">
          <router-link to="/shiyan/zuoye">
            <div class="item">作业指导书</div>
          </router-link>
          <router-link to="/shiyan/baojia">
            <div class="item active">报价管理</div>
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
                  <el-input v-model="form.projectName" placeholder="请输入关键字" id="btn0"></el-input>
                </el-form-item>
                <el-form-item label="分类">
                  <el-select v-model="form.projectType" placeholder="请选择" id="btn1">
                    <el-option :label="s1" value="火电及水电按机组容量"></el-option>
                    <el-option :label="s2" value="火电及水电按电压等级"></el-option>
                    <el-option :label="s3" value="新能源组按机组容量"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="分组">
                  <el-select v-model="form.projectGroup" placeholder="请选择" id="btn2">
                    <el-option :label="s4" value="变压器试验"></el-option>
                    <el-option :label="s5" value="互感器试验"></el-option>
                    <el-option :label="s6" value="真空断路层"></el-option>
                    <el-option :label="s7" value="接地试验"></el-option>
                    <el-option :label="s8" value="系统试验"></el-option>
                    <el-option :label="s9" value="其他项目"></el-option>
                    <el-option :label="s10" value="继电保护及自动化专业"></el-option>
                    <el-option :label="s11" value="其他项目"></el-option>
                    <el-option :label="s12" value="高压电容器试验"></el-option>
                    <el-option :label="s13" value="高压套管试验"></el-option>
                    <el-option :label="s14" value="GIS断路器试验"></el-option>

                    <el-option :label="s15" value="避雷器试验"></el-option>
                    <el-option :label="s16" value="变压器试验"></el-option>
                    <el-option :label="s17" value="互感器试验"></el-option>

                    <el-option :label="s18" value="主变低压侧共箱母线"></el-option>
                    <el-option :label="s19" value="35kV母线"></el-option>
                    <el-option :label="s20" value="35kV断路器"></el-option>
                    <el-option :label="s21" value="接地变压器及电阻柜"></el-option>

                    <el-option :label="s22" value="SVG（控制柜)"></el-option>
                    <el-option :label="s23" value="箱式变压器"></el-option>
                    <el-option :label="s24" value="35kV集电线路"></el-option>
                    <el-option :label="s25" value="高压断路器试验(含SF6组合电器)"></el-option>
                    <el-option :label="s26" value="三相组合式过电压保护器测试"></el-option>
                    <el-option :label="s27" value="接地试验"></el-option>
                    <el-option :label="s28" value="继电保护及自动化专业(全检)"></el-option>
                    <el-option :label="s29" value="其他项目"></el-option>
                  </el-select>
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
                  <el-button type="success" @click="show">+新增</el-button>
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
              <el-table-column prop="projectName" label="实验项目名称"></el-table-column>
              <el-table-column prop="projectType" label="分类"></el-table-column>
              <el-table-column prop="projectGroup" label="分组"></el-table-column>
              <el-table-column
                prop="s100MWPrice,s100MWOverPrice,h300MWPrice,h600MWPrice,h1000MWPrice,d220KVPrice,d500KVPrice,d750KVPrice,d50MWBelowPrice,d100MWBelowPrice,d50MWOverPrice"
                label="价格(万元)"
              >
                <template slot-scope="scope">
                  <p v-show="scope.row.s100MWPrice">
                    100MW: &nbsp;
                    <label for style="color:red;font-weight:900">{{scope.row.s100MWPrice}}</label>
                  </p>
                  <p v-show="scope.row.s100MWOverPrice">
                    100MW以上:&nbsp;
                    <label for style="color:red;font-weight:900">{{scope.row.s100MWOverPrice}}</label>
                  </p>
                  <p v-show="scope.row.h300MWPrice">
                    300MW：&nbsp;
                    <label for style="color:red;font-weight:900">{{scope.row.h300MWPrice}}</label>
                  </p>
                  <p v-show="scope.row.h600MWPrice">
                    600MW：&nbsp;
                    <label for style="color:red;font-weight:900">{{scope.row.h600MWPrice}}</label>
                  </p>
                  <p v-show="scope.row.h1000MWPrice">
                    1000MW：&nbsp;
                    <label for style="color:red;font-weight:900">{{scope.row.h1000MWPrice}}</label>
                  </p>
                  <p v-show="scope.row.d220KVPrice">
                    220kV等级及以下：&nbsp;
                    <label for style="color:red;font-weight:900">{{scope.row.d220KVPrice}}</label>
                  </p>
                  <p v-show="scope.row.d500KVPrice">
                    500kV等级及以下：&nbsp;
                    <label for style="color:red;font-weight:900">{{scope.row.d500KVPrice}}</label>
                  </p>
                  <p v-show="scope.row.d750KVPrice">
                    750kV等级及以下:&nbsp;
                    <label for style="color:red;font-weight:900">{{scope.row.d750KVPrice}}</label>
                  </p>
                  <p v-show="scope.row.d50MWBelowPrice">
                    50MW及以下价格：&nbsp;
                    <label for style="color:red;font-weight:900">{{scope.row.d50MWBelowPrice}}</label>
                  </p>
                  <p v-show="scope.row.d50MWOverPrice">
                    100MW及以下价格：&nbsp;
                    <label for style="color:red;font-weight:900">{{scope.row.d50MWOverPrice}}</label>
                  </p>
                  <p v-show="scope.row.d100MWBelowPrice">
                    100MW及以上价格：&nbsp;
                    <label for style="color:red;font-weight:900">{{scope.row.d100MWBelowPrice}}</label>
                  </p>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleClick2(scope.row),xiugai()" type="text" size="small">修改</el-button>
                  <el-button
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    :data="list.id"
                    style="color:#FF1818"
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
import Maintabbar from "../../components/Main-tabbar";
export default {
  name: "",
  path:'/shiyan/Afterbaojia',
  components:{
    Maintabbar
  },
  created() {
    axios
      .get("http://localhost:8084/project/findall")

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
  data() {
    return {
      show_one: true,
      show_two: false,
      show_three: false,
      isshow: false,

      projectType: "",
      projectGroup: "",
      projectName: "",
      unit: "",

      //first
      s100MWPrice: "",
      s100MWOverPrice: "",
      h300MWPrice: "",
      h600MWPrice: "",
      h1000MWPrice: "",

      // second
      d220KVPrice: "",
      d500KVPrice: "",
      d750KVPrice: "",

      //third
      d50MWBelowPrice: "",
      d100MWBelowPrice: "",
      d50MWOverPrice: "",

      infoState:'',
      projectId:'',

      
      
      isshow: false,
      show_one: true,
      show_two: false,
      show_three: false,
      xiugaishow: false,

      s1: "",
      s2: "",
      s3: "",
      s4: "",
      s5: "",
      s6: "",
      s7: "",
      s8: "",
      s9: "",
      s10: "",
      s11: "",
      s12: "",
      s13: "",
      s14: "",
      s15: "",
      s16: "",
      s17: "",
      s18: "",
      s19: "",
      s20: "",
      s21: "",
      s22: "",
      s23: "",
      s24: "",
      s25: "",
      s26: "",
      s27: "",
      s28: "",
      s29: "",
      form: {
        name: "",
        region: "",
        projectName: "",
        projectType: "",
        projectGroup: ""
      },
      formInline: {
        user: "",
        region: ""
      },
      powerPlantType: "",
      generatorCapacity: "",
      voltageLevel: "",
      province: "",
      list3: [],
      list2: [],
      list: [
        {
          projectName: '123456',
          projectType: '123456',
          projectGroup : '123456',
          unit : 'a.unit',
          s100MWPrice: '123456',
          s100MWOverPrice : '123456',
          h300MWPrice: '123456',
          h600MWPrice: '123456',
          h1000MWPrice : '123456',
          d220KVPrice: '123456',
          d500KVPrice: '123456',
          d750KVPrice: '123456',
          infoState: '123456',
          d50MWBelowPrice: '123456',
          d50MWOverPrice: '123456',
          d100MWBelowPrice: '123456',
          projectId: '123456',
        }
      ],
      pagesize: 5,
      currpage: 1
    };
  },
  methods: 
  //修改框显示
 {
    xiugai() {
      this.xiugaishow = !this.xiugaishow;
    },

    // vue 分页函数
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    handleSelectionChange(val) {
      console.log(val);
    },
    
    
    //第一组
    show_1() {
      this.show_one = true;
      this.show_two = false;
      this.show_three = false;
    },


    //第二组
    show_2() {
      this.show_one = false;
      this.show_two = true;
      this.show_three = false;
    },

    //第三组
    show_3() {
      this.show_one = false;
      this.show_two = false;
      this.show_three = true;
    },

    //新增显示
    show() {
      this.isshow = !this.isshow;
    },
    
    
    //查询
    search() {
      var obtn0 = document.getElementById("btn0").value;
      var obtn1 = document.getElementById("btn1").value;
      var obtn2 = document.getElementById("btn2").value;
      console.log(obtn0, obtn1, obtn2);
      axios
        .get(`http://localhost:8084/project/findcondition?projectName=${obtn0}&&projectType=${obtn1}&&projectGroup=${obtn2}`)
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

    //重置
    reback() {
      document.getElementById("btn0").value = "";
      document.getElementById("btn1").value = '';
      document.getElementById("btn2").value = '';
      this.list = this.list2;
    },


    //删除
     //handleClick() 函数实现发送id，后台实现删除功能
      handleClick(a){
        alert(a.projectName)
       
        axios.get(`http://localhost:8084/project/delete?projectId=${a.projectId}`).then( result => {
        
               alert('确认删除？')
             window.location.reload();
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

     //修改

    handleClick2(a) {
      // console.log(a);
      this.projectName = a.projectName;
      this.projectType = a.projectType;
      this.projectGroup = a.projectGroup;
      this.unit = a.unit;
      this.s100MWPrice = a.s100MWPrice;
      this.s100MWOverPrice = a.s100MWOverPrice;
      this.h300MWPrice = a.h300MWPrice;
      this.h600MWPrice = a.h600MWPrice;
      this.h1000MWPrice = a.h1000MWPrice;
      this.d220KVPrice = a.d220KVPrice;
      this.d500KVPrice = a.d500KVPrice;
      this.d750KVPrice = a.d750KVPrice;
      this.infoState = a.infoState;
      this.d50MWBelowPrice = a.d50MWBelowPrice;
      this.d50MWOverPrice = a.d50MWOverPrice;
      this.d100MWBelowPrice = a.d100MWBelowPrice;
      this.projectId = a.projectId;
      console.log(this.projectId)
    },


    //修改功能
     refrashData(){
        // console.log(this.guidingBookId, this.form.name)
            axios.post('http://localhost:8084/project/update', {
          projectName:this.projectName,
          projectGroup:this.projectGroup,
          projectType:this.projectType,
          unit:this.unit,
         
         s100MWPrice:this.s100MWPrice,
          s100MWOverPrice:this.s100MWOverPrice,
          h300MWPrice:this.h300MWPrice,
          h600MWPrice:this.h600MWPrice,
          h1000MWPrice:this.h1000MWPrice,
          
          d220KVPrice:this.d220KVPrice,
          d500KVPrice:this.d500KVPrice,
          d750KVPrice:this.d750KVPrice,
          
          d50MWOverPrice:this.d50MWOverPrice,
          d100MWBelowPrice:this.d100MWBelowPrice,
          d50MWBelowPrice : this.d50MWBelowPrice,
         
          projectId : this.projectId,
          infoState : this.infoState
          })
            .then(function (response) {
           
              
            })
            .catch(function (error) {
              console.log(error);
            });
           
        window.location.reload();
           alert('修改成功!')
       
      },
      refrashData2(){
        // console.log(this.guidingBookId, this.form.name)
            axios.post('http://localhost:8084/project/update', {
          projectName:this.projectName,
          projectGroup:this.projectGroup,
          projectType:this.projectType,
          unit:this.unit,
         
         s100MWPrice:this.s100MWPrice,
          s100MWOverPrice:this.s100MWOverPrice,
          h300MWPrice:this.h300MWPrice,
          h600MWPrice:this.h600MWPrice,
          h1000MWPrice:this.h1000MWPrice,
          
          d220KVPrice:this.d220KVPrice,
          d500KVPrice:this.d500KVPrice,
          d750KVPrice:this.d750KVPrice,
          
          d50MWOverPrice:this.d50MWOverPrice,
          d100MWBelowPrice:this.d100MWBelowPrice,
          d50MWBelowPrice : this.d50MWBelowPrice,
         
          projectId : this.projectId,
          infoState : this.infoState
          })
            .then(function (response) {
          
              
            })
            .catch(function (error) {
              console.log(error);
            });
           
         window.location.reload();
           alert('新增成功!')
       
      },
  },
  

  activated() {
    this.$router.push(this.path); //处理默认现实的路由
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  },
  computed: {
    last() {}
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
  width: 200px;
  height: 25px;
}

.el-select {
  width: 200px;
  height: 25px;
}

.el-form-item {
  margin-bottom: 10px;
}

.el-button {
  width:65px;
  height:32px;
  padding: 0;
  line-height: 32px;
  border-radius:4px;
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
  padding: 8px 16px;
}

.element.style {
  width: 120px;
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

.content2 {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  /* border: 2px solid red; */
  /* top: -50px; */
}

.content3 {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: black; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  /* border: 2px solid red; */
  /* top: -50px; */
}

.add {
  position: absolute;
  width: 650px;
  height: 260px;
  top: 0px;
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
#section_addPrice_box {
  width: 750px;
  height: 530px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  margin: 10px auto;
  /* padding-bottom: 10px; */
  position: relative;
  /* border:2px solid red; */
}
#section_addPrice_box_title {
  width: 700px;
  height: 46px;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
}
#section_addPrice_box_title > span {
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
#section_addPrice_box_content_radio {
  width: 650px;
  height: 20px;
  margin-left: 85px;
  margin-top: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
#section_addPrice_box_content_radio > input {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(24, 144, 255, 1);
  vertical-align: text-bottom;
  margin-bottom: 2px;
  margin-right: 8px;
}
#section_addPrice_box_content_radio > span {
  display: inline-block;
  margin-right: 14px;
}
/*    按机组容量内容样式*/
#section_addPrice_box_content_table > ul > li {
  margin-top: 15px;
  margin-right: 70px;
  float: right;
}
#section_addPrice_box_content_table > ul > li > span {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
#section_addPrice_box_content_table > ul > li > input {
  width: 468px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
}
/*    下拉框样式*/
#section_addPrice_box_content_table > ul > li > select {
  width: 468px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}
#section_addPrice_box_holdBtn {
  width: 68px;
  height: 32px;
  background: rgba(45, 132, 239, 1);
  border-radius: 4px;
  /* position: absolute; */
  margin-left: 316px;
  /* margin-top: 20px; */
  margin-bottom: 20px;
  cursor: pointer;
}
#section_addPrice_box_holdBtn > span {
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
#section_addPrice_box_close {
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
#section_addPrice_box_content_table {
  width: 700px;
  /* margin-left: -40px; */
  /* border: 2px solid green; */
  overflow: hidden;
  zoom: 1;
  margin: auto;
}

#section_addPrice_box_content_table1 {
  width: 700px;
  /* margin-left: -20px; */
  /* border: 2px solid green; */
  overflow: hidden;
  zoom: 1;
  margin: auto;
}

#section_addPrice_box_content_table2 {
  width: 700px;
  /* margin-left: 60px; */
  /* border: 2px solid green; */
  overflow: hidden;
  zoom: 1;
  margin: auto;
}
/*    按电压等级选项*/
#section_addPrice_box_content_table1 > ul > li > select {
  width: 408px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table1 > ul > li {
  margin-top: 24px;
  margin-right: 101px;
  float: right;
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table1 > ul > li > span {
  width: 50px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  white-space: pre-wrap;
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table1 > ul > li > input {
  width: 408px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* padding-left: 12px; */
  /* padding-top: 6px;
  padding-bottom: 6px; */
  /* border: 2px solid green; */
}

#section_addPrice_box_content_table2 > ul > li > select {
  width: 408px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table2 > ul > li {
  margin-top: 24px;
  margin-right: 101px;
  float: right;
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table2 > ul > li > span {
  width: 50px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  white-space: pre-wrap;
  /* border: 2px solid green; */
}
#section_addPrice_box_content_table2 > ul > li > input {
  width: 408px;
  height: 32px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  /* padding-left: 12px; */
  /* padding-top: 6px;
  padding-bottom: 6px; */
  /* border: 2px solid green; */
}
</style>
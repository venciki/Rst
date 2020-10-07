<template>
<div id="app">
  <!-- 修改设备 -->
  <div class="back" v-show="isShow">
      <div class="card1">
        <div
          class="header"
          style="width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >修改设备</span>
          <span
            @click="Show()"
            style="cursor: pointer; display:block;width:100px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
        </div>
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="设备名称">
            <el-input v-model="form.powerPlantName"></el-input>
          </el-form-item>
          <el-form-item label="设备类型">
            <el-select v-model="powerPlantType" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item lable-width="120px" label="电压等级" width="120">
            <el-select v-model="generatorCapacity" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生产厂家">
            <el-select v-model="voltageLevel" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备型号">
            <el-select v-model="province" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="投运日期">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="备注(选填)">
            <el-input v-model="form.phone" type="textarea" style="width:468px;height:88px;"></el-input>
          </el-form-item>
          
          <el-button type="primary" @click="Show()">修改</el-button>
        </el-form>
      </div>
    </div>

    <!-- 修改设备结束 -->

    <!-- 修改设备 -->
  <div class="back" v-show="isShow2">
      <div class="card1">
        <div
          class="header"
          style="width:100%; height:50px; margin-bottom:20px; border-bottom:1px solid rgba(232,232,232,1);"
        >
          <span
            style=" display:block;width:100px;height:50px;float:left;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >新增设备</span>
          <span
            @click="Show2()"
            style="cursor: pointer; display:block;width:100px;height:50px;float:right;line-height:50px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;color:rgba(0,0,0,0.85);font-weight:900;"
          >X</span>
        </div>
        <el-form ref="form" :model="form" label-width="150px">
          <el-form-item label="设备名称">
            <el-input v-model="form.powerPlantName"></el-input>
          </el-form-item>
          <el-form-item label="设备类型">
            <el-select v-model="powerPlantType" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item lable-width="120px" label="电压等级" width="120">
            <el-select v-model="generatorCapacity" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生产厂家">
            <el-select v-model="voltageLevel" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设备型号">
            <el-select v-model="province" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="投运日期">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="备注(选填)">
            <el-input v-model="form.phone" type="textarea" style="width:468px;height:88px;"></el-input>
          </el-form-item>
          
          <el-button type="primary" @click="Show2()">保存</el-button>
        </el-form>
      </div>
    </div>

    <!-- 新增设备结束 -->
  <Maintabbar></Maintabbar>
   <div class="mainBox">
     <div class="headbox">
       <div class="navbar">
           
        <router-link to="/shebei/dianchang" ><div class="item"  >电厂管理</div></router-link>
        <router-link to="/shebei/shebeilibie" ><div class="item" >设备类别</div></router-link>
        <router-link to="/shebei/shebeiguanli" ><div class="item active" >设备管理</div></router-link>
    </div>
     </div>
      <div class="bottombox">
        <div class="shebei_left">   <button @click="jsonTree">jsonTree</button>
        电厂选择： 
 <el-tree
  :data="data"
  :props="defaultProps"
  accordion
  @node-click='handleNodeClick'
  id="tid"
  >
</el-tree>


      </div>
      <div class="shebei_right">
        <div class="card2">
          <div class="card2_top" style="padding: 10px 20px 10px 20px;">
            <el-form :inline="true" class="demo-form-inline">
              <div class="left" style="float: left;">
                <el-form-item label="设备类型名称">
                  <el-input id="btn0" v-model="formInline.powerPlantName" placeholder="请输入"></el-input>
                </el-form-item>
                 <el-form-item label="电厂类型">
            <el-select v-model="formInline.powerPlantTypes" placeholder="电厂类型" id="btn1">
              <el-option label="水电厂" value='t1'></el-option>
              <el-option label="火电厂" value='t2'></el-option>
              <el-option label="风电厂" value='t3'></el-option>
              <el-option label="新能源" value='t4'></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电压等级">
            <el-select v-model="formInline.voltageLevels" placeholder="活动区域"  id="btn2">
              <el-option label="110KV" value='l1'></el-option>
              <el-option label="220KV" value='l2'></el-option>
              <el-option label="500KV" value='l3'></el-option>
              <el-option label="750KV" value='l4'></el-option>
              <el-option label="1000KV" value='l5'></el-option>
            </el-select>
          </el-form-item>
  
                <el-form-item>
                  <el-button type="primary" @click='search'>查询</el-button>
                </el-form-item>
                <el-form-item>
                  <el-button type="info" @click='reback'>重置</el-button>
                </el-form-item>
              </div>
              
                <el-form-item>
                  <el-button type="success" @click='Show2'>+新增</el-button>
                </el-form-item>
              
  
            </el-form>
          </div>
          <div id="card2_bottom">
            <el-table :data="list.slice((currpage - 1) * pagesize, currpage * pagesize)" style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column prop="date" label="设备类型名称" >
              </el-table-column>
              <el-table-column prop="leixing" label="设备类型" >
              </el-table-column>
              <el-table-column prop="level" label="升压站电压等级" >
              </el-table-column>
              <el-table-column prop="changjia" label="电厂名称" >
              </el-table-column>
              <el-table-column prop="date2" label="设备完善日期" >
              </el-table-column>
  
              <el-table-column label="操作" width='250'>
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">
                    查看图片
                  </el-button>
  
                  <el-button @click="Show()" type="text" size="small">
                    修改
                  </el-button>
                  <el-button style="color:rgba(255,24,24,1);" @click="handleClick(scope.row)" type="text" size="small">
                    删除
                  </el-button>
  
                </template>
              </el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next, sizes, total, jumper" :page-sizes="[5, 10, 15, 20]"
              :page-size="pagesize" :total="list.length" @current-change="handleCurrentChange"
              @size-change="handleSizeChange">
            </el-pagination>
          </div>
        </div>
      </div>
      </div>
  </div>
   </div>




  </template>
  
  <script>
  import axios from 'axios'
   import navbar from './navbar'
   import Maintabbar from "../../components/Main-tabbar";
    export default {
      name: '',
      components:{
        navbar,
        Maintabbar
      },
      created(){
         
         axios.get('http://192.168.1.214:8084/power/findByType')
      
          .then(response => {

            // console.log(response);
            
           
          })


          .catch(error => {

            console.log(error);

            alert('网络错误，不能访问');

          })

    
      },
      data() {
        return {
        isShow: false,
        isShow2: false,
         data: [
          
        {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          },
           {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        },
         {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          },
           {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'name'
        },        
          tabPosition: 'left',
          list2:[],
          form: {
            name: '',
            region: '',
  
          },
          formInline: {
            powerPlantName:'',
            powerPlantType:'',
            voltageLevels:'',
          },
          pagesize: 5,
          currpage: 1,
          list2:[],
          list: [{
            date: '1#主变',
            leixing: '主变压器',
            level: "110KV",
            changjia: '西电',
            date2: "2012-06-01"
  
          }, {
            date: '1#组合电器',
            leixing: '组合电器',
            level: "110KV",
            changjia: '西邮',
            date2: "2012-06-01"
  
          }
          ],
          newlist:[],
        }
        
        
      },
      methods: {
        Show(){
          this.isShow = !this.isShow
        },
         Show2(){
          this.isShow2 = !this.isShow2
        },

        //获取电厂类型名字
        handleNodeClick(a){
        if(a.id == 1 || a.id == 2 || a.id ==3 || a.id ==4){

        }
        else{
          console.log(a.label,a.id);
        }
      //      axios.get(`http://localhost:8084/power/delete?powerPlantID=${a.id}`).then( result => {
      //      // 只有状态码为200,才能返回true,说明注册成功,其他状态码全部失败！
      //      alert(a.label)   //发送当前电厂类型
      //      console.log(result)
      //      //将数据存入
      //      alert('电厂类型传值成功！')
      //  } ).catch( ( error ) => {
      //     console.log(error);
      //     if (error.response) {
      //         console.log( error.response.data );
      //         console.log( error.response.status );
      //         console.log( error.response.headers );
      //      } else {
      //          console.log( "Error", error.message );
      //      }
      //      console.log( error.config );
      //  } );
     
       

     
        },
          refrashData(){
            axios.post('http://localhost:8084/power/add', {
            address:this.form.address,
            powerPlantName: this.form.powerPlantName,
            powerPlantType: this.powerPlantType,
            generatorCapacity: this.generatorCapacity,
            voltageLevel: this.voltageLevel,
            province: this.province,
            address: this.form.address,
            phone: this.form.phone,
            postcode: this.form.postcode,
            powerPlantID:this.powerPlantID
            })
            .then(function (response) {
          
              
            })
            .catch(function (error) {
              console.log(error);
            });
           
        window.location.reload();
        alert('修改成功!')
       
      },

      // //handleClick() 函数实现发送id，后台实现删除功能
      // handleClick(a){
       
      //   axios.get(`http://localhost:8084/power/delete?powerPlantID=${a.powerPlantID}`).then( result => {
          
           
        
           
      //   } ).catch( ( error ) => {
          
      //       console.log(error);
      //       if (error.response) {
               
      //           console.log( error.response.data );
      //           console.log( error.response.status );
      //           console.log( error.response.headers );
      //       } else {
              
      //           console.log( "Error", error.message );
      //       }
      //       console.log( error.config );
      //   } );
      //   alert('确认删除？')
      //   window.location.reload();
      // },


      // //handleClick2()  函数实现修改数据记录变化后的数据
      // handleClick2(a){
      //   var obj = {};
      //   obj = a;
      //   this.form.powerPlantName = obj.powerPlantName;
      //   this.powerPlantType = obj.powerPlantType;
      //   this.generatorCapacity = obj.generatorCapacity;
      //   this.voltageLevel = obj.voltageLevel;
      //   this.province = obj.province;
      //   this.form.powerPlantID = obj.powerPlantID;
      //   this.form.postcode = obj.postcode;
      //   this.form.province = obj.province;
      //   this.form.address = obj.address;
      //   this.form.phone = obj.phone;
      //   this.powerPlantID = obj.powerPlantID
      // },
        //jsonTree



  //请求列表
    jsonTree(){
    //         //模拟的json数据
    // axios.get('http://192.168.1.214:8084/power/findByType')
      
    //       .then(response => {

    //         console.log(response.data.data)   
    //         // newlist = response.data.data;
    //         // console.log(this.newlist) 
    //         this.newlist = response.data.data;
                   
    //       })


    //       .catch(error => {

    //         console.log(error);

    //         alert('网络错误，不能访问');

    //       })       
    function fommat({arrayList, pidStr = 'pid', idStr = 'id', childrenStr = 'children'}) {
           let listOjb = {}; // 用来储存{key: obj}格式的对象
           let treeList = []; // 用来储存最终树形结构数据的数组
           // 将数据变换成{key: obj}格式，方便下面处理数据
           for (let i = 0; i < arrayList.length; i++) {
               listOjb[arrayList[i][idStr]] = arrayList[i]
           }
           // 根据pid来将数据进行格式化
           for (let j = 0; j < arrayList.length; j++) {
               // 判断父级是否存在
               let haveParent = listOjb[arrayList[j][pidStr]] 
               if (haveParent) {
                   // 如果有没有父级children字段，就创建一个children字段
                   !haveParent[childrenStr] && (haveParent[childrenStr] = [])
                   // 在父级里插入子项
                   haveParent[childrenStr].push(arrayList[j])
               } else {
                   // 如果没有父级直接插入到最外层
                   treeList.push(arrayList[j])
               }
           }
           return treeList
       }
  
 
        // 测试数据
        var menu_list = [{
          id: '1',
          name: '设置',
          
          parent_id: 0
        }, {
          id: '1-1',
          name: '权限设置',
          
          parent_id: '1'
        }, {
          id: '1-1-1',
          name: '用户管理列表',
         
          parent_id: '1-1'
        }, {
          id: '1-1-2',
          name: '用户管理新增',
          
          parent_id: '1-1'
        }, {
          id: '1-1-3',
          name: '角色管理列表',
         
          parent_id: '1-1'
        }, {
          id: '1-2',
          name: '菜单设置',
         
          parent_id: '1'
        }, {
          id: '1-2-1',
          name: '菜单列表',
         
          parent_id: '1-2'
        }, {
          id: '1-2-2',
          name: '菜单添加',
         
          parent_id: '1-2'
        }, {
          id: '2',
          name: '订单',
        
          parent_id: 0
        }, {
          id: '2-1',
         name: '报单审核',
          
          parent_id: '2'
        }, {
          id: '2-2',
         name: '退款管理',
         
          parent_id: '2'
        }, {
          id: '2-2-1',
         name: '退款管理2-1',
         
          parent_id: '2-2'
        }






      
    ]
 
    // 输出
    var result =   fommat({
               arrayList: menu_list,
               pidStr: 'parent_id',
           })
   console.log(result)
      this.data = result;
        },




        //重置功能
        reback(){
        document.getElementById('btn0').value = '';
        document.getElementById('btn1').value = '';
        document.getElementById('btn2').value = '';
        this.list = this.list2;
      },
     getCheckedKeys() { console.log(this.$refs.tree.getCheckedKeys()); },


        handleCurrentChange(cpage) {
          this.currpage = cpage;
        },
        handleSizeChange(psize) {
          this.pagesize = psize;
        },
        handleSelectionChange(val) {
          console.log(val)
        },
        
getCurrentNode(){
  this.$refs.currentNode.node;
},

       
        
       //search()  组合查询
      // search() {
      //  var obtn1 = document.getElementById('btn0').value
      //  var obtn2 = document.getElementById('btn1').value
      //  var obtn3 = document.getElementById('btn2').value
      //  axios.get(`http://localhost:8084/power/findcondition?powerPlantNames=${obtn1}&powerPlantTypes=${obtn2}&generatorCapacitys=${obtn3}&voltageLevels=${obtn4}`).then( result => {

      //       console.log(obtn1, obtn2, obtn3, obtn4)
            
      //       this.list3 = this.list;
     
      //      this.list = result.data.data.filter(item =>{
      //        return item.infoState == 0;
      //      })
            
            
        
           
      //   } ).catch( ( error ) => {
          
        
      //       console.log(error);
      //       if (error.response) {
              
      //           console.log( error.response.data );
      //           console.log( error.response.status );
      //           console.log( error.response.headers );
      //       } else {
                
      //           console.log( "Error", error.message );
      //       }
      //       console.log( error.config );
      //   } );

      // },



       activated(){
      this.$router.push(this.path);   //处理默认现实的路由
    },
    beforeRouteLeave(to, from, next){
      this.path = this.$route.path;
      next();
    },

    }
    }

  
  </script>
  
  <style lang="" scoped>

  html,body{
  width: 100%;
  height: 100%;
}
  .mainBox{
    margin-top: 10px;
    width: 97%;
    height: 90%;
    margin-left: 1.5%;
    background: white;
    position: absolute;
   
  }

  .bottombox{
    position: absolute;
    width: 100%;
    height: 100%;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.12);
  }
   .el-input{
       width: 150px;
       height: 20px;
   }
  
   .el-select{
      width: 150px;
       height: 25px;
   }
  
   .card2 {
      text-align: center;
      width: 82%;
      position: absolute;
      height: 90%;
      background: white;
      border-left: 2px solid rgb(241, 237, 237);
      /* border: 2px solid green; */
  } 
  
  #card2_bottom{
      text-align: center;
      padding: 20px;
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
.el-form-item__content{
  margin: 0;
}
/* .card2 {
  text-align: center;
  width: 95%;
  margin: auto;
  background: white;
  border-left: 2px solid rgb(241, 237, 237);
} */

.card1 {
  width: 700px;
  margin: 0 auto;
  margin-top: 60px;
  text-align: center;
  box-sizing: border-box;
  padding-bottom: 10px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  border-radius: 0px 2px 2px 2px;
}
/* .el-form-item__label {
  width: 100px !important;
  padding: 0 !important;
} */
.card1 .el-input {
   width: 468px;
height: 32px;
background:rgba(255,255,255,1);
border-radius:4px;
/* border:1px solid rgba(0,0,0,0.15); */
}

.card1 .el-select {
 width: 468px;
height: 32px;
background:rgba(255,255,255,1);
border-radius:4px;
/* border:1px solid rgba(0,0,0,0.15); */
}

.card1 .el-button {
  width: 65px;
  height: 32px;
  background: rgba(24, 144, 255, 1);
  border-radius: 4px;
  padding: 0;
}
  .shebei_left{
      width: 12%;
     position: absolute;
      height: 85%;
      background: white;
      padding:20px;
      float: left;
      margin-left: 1%;
  }
  /* .shebei_left */
  
  .shebei_right{
      width: 81%;
      height: 500px;
      background:white;
      float: right;
      margin-right: 1%;
      /* border: 2px solid red; */
  }
  
  .card1 .el-input__inner {
      width: 66.86%;
      height: 4.97%;
  
  }
  
  .card1 .el-form-item {
      margin-bottom: 20px;
  }
  
  .card1 .el-button {
      padding: 8px 16px;
  }
  
  .card2 .el-input__inner {
      width: 170px;
      height: 30px;
  
  }
  
  .card2 .el-form-item {
      margin-bottom: 10px;
  }
  
  .card2 .el-button {
      padding: 0;
       width: 65px;
  height: 32px;
  /* background:rgba(24,144,255,1); */
  border-radius: 4px;
  padding: 0;
  }
  
  .navbar{
    width: 100%;
    /* margin-left: 1.5%; */
    height: 30px;
    line-height: 25px;
    display: flex;
    /* border: 2px solid red; */
    background: #F0F2F5;
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
  
<template>
  <div id="app">
    <div class="shebei_left">
      电厂选择：
      <el-tree :data="data" :props="defaultProps"></el-tree>
    </div>
    <div class="shebei_right">
      <div class="card2">
        <div class="card2_top" style="padding: 10px 20px 10px 20px;">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <div class="left" style="float: left;">
              <el-form-item label="设备类型名称">
                <el-input v-model="formInline.user" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="设备类型">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="电压等级">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button type="primary">查询</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="info">重置</el-button>
              </el-form-item>
            </div>
            <div class="right" style="float: right;">
              <el-form-item>
                <el-button type="success">+新增</el-button>
              </el-form-item>
            </div>

          </el-form>
        </div>
        <div id="card2_bottom">
          <el-table :data="list.slice((currpage - 1) * pagesize, currpage * pagesize)" style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column prop="date" label="设备类型名称">
            </el-table-column>
            <el-table-column prop="leixing" label="设备类型名称">
            </el-table-column>
            <el-table-column prop="level" label="设备类型名称">
            </el-table-column>
            <el-table-column prop="changjia" label="设备类型名称">
            </el-table-column>
            <el-table-column prop="date2" label="设备类型名称">
            </el-table-column>

            <el-table-column label="操作" width='200'>
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">
                  查看
                </el-button>

                <el-button @click="handleClick(scope.row)" type="text" size="small">
                  修改
                </el-button>
                <el-button @click="handleClick(scope.row)" type="text" size="small">
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
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        tabPosition: 'left',
        form: {
          name: '',
          region: '',

        },
        formInline: {
          user: '',
          region: ''
        },
        pagesize: 5,
        currpage: 1,
        list: [{
          date: '主变压器',
          leixing: '主变压器',
          level: "110KV",
          changjia: '西电',
          date2: "2012-06-01"

        }, {
          date: '组合电器',
          leixing: '主变压器',
          level: "110KV",
          changjia: '西电',
          date2: "2012-06-01"

        }, {
          date: '发电机',
          leixing: '主变压器',
          level: "110KV",
          changjia: '西电',
          date2: "2012-06-01"

        }, {
          date: '接地装置',
          leixing: '主变压器',
          level: "110KV",
          changjia: '西电',
          date2: "2012-06-01"

        }],
        data: [{
            label: '电厂1',
            children: [{
              label1: '加薪火电厂',

            }]
          }, {
            label: '电厂2',
            children: [{
              label: '二级 1-1',
            }]
          }, {
            label: '电厂3',
            children: [{
              label: '二级 1-1',
            }]
          },
          {
            label: '电厂4',
            children: [{
              label: '二级 1-1',
            }]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleCurrentChange(cpage) {
        this.currpage = cpage;
      },
      handleSizeChange(psize) {
        this.pagesize = psize;
      },
      handleSelectionChange(val) {
        console.log(val)
      }
    }
  }

</script>

<style lang="" scoped>
 .el-input{
     width: 180px;
     height: 20px;
 }

 .el-select{
    width: 180px;
     height: 25px;
 }

 .card2 {
    text-align: center;
    width: 95%;
    margin: auto;
    background: white;
    
}

.card2 .bottom{
    text-align: center;
    padding: 20px;
}

.shebei_left{
    width: 12%;
    height: 460px;
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
}

.card1 .el-input__inner {
    width: 400px;
    height: 30px;

}

.card1 .el-form-item {
    margin-bottom: 10px;
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
    padding: 5px 10px;
}

</style>

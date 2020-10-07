<template>
  <div id="app">
    <div class="card2">
      <div class="card2_top" style="padding: 10px 20px 10px 20px;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <div class="left" style="float: left;">
            <el-form-item label="设备类型名称">
              <el-input v-model="formInline.user" placeholder="设备类型名称"></el-input>
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

          <el-table-column label="操作">
            <template slot-scope="scope">

              <el-button @click="handleClick(scope.row)" type="text" size="small">修改
              </el-button>
              <el-button @click="handleClick(scope.row)" type="text" size="small">删除
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
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        pagesize: 5,
        currpage: 1,
        form: {
          name: '',
          region: '',

        },
        formInline: {
          user: '',
          region: ''
        },
        list: [{
          date: '主变压器',
        }, {
          date: '组合电器',
        }, {
          date: '发电机',
        }, {
          date: '接地装置',
        }],
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


  .card2 {
    text-align: center;
    width: 95%;
    margin: auto;
    background: white;

  }

  .card2 .bottom {
    text-align: center;
    padding: 20px;
  }

</style>

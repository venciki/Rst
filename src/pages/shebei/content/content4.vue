<template>
  <div id="app">
    <div class="card2">
      <div class="card2_top">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
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
          <el-form-item>
            <el-button type="success">+新增</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div id="card2_bottom">
        <el-table :data="list.slice((currpage - 1) * pagesize, currpage * pagesize)" style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column prop="date" label="电厂名称">
          </el-table-column>
          <el-table-column prop="name" label="电厂类型">
          </el-table-column>
          <el-table-column prop="province" label="发电组容量">
          </el-table-column>
          <el-table-column prop="city" label="升压站电压等级">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看
              </el-button>
              <el-button type="text" size="small"><a href="03.html">修改</a>
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
    name: 'content4',
    data() {
      return {
        data: {
                activeName: 'first',
                form: {
                    name: '',
                    region: '',

                },
                formInline: {
                    user: '',
                    region: ''
                },
                msg: 8888,
                list: [{
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1517 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1519 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1516 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1517 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1519 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1516 弄',
                        zip: 200333
                    },
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1517 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1519 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1516 弄',
                        zip: 200333
                    }
                ],
                pagesize: 5,
                currpage: 1
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
            },
            mounted() {
                this.getlist()
            }
      }
    }
  }

</script>

<style lang="" scoped>
.card2 .el-input__inner {
    width: 170px;
    height: 30px;

}

.card1 .el-form-item {
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
</style>

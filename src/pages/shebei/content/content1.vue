<template>
  <div id="app">
    <div class="card1">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-button type="primary"><a href="02.html">保存</a> </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'content1',
    data() {
      return {
        form: {
                        name: '',
                        region: '',

                    },
                    formInline: {
                        user: '',
                        region: ''
                    },
      }
    }
  }

</script>

<style lang="" scoped>
 .card1 {
    width: 600px;
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    background: white;
}

.card1 .el-input{
    width: 400px;
    height: 30px;
}

.card1 .el-select{
    width: 400px;
    height: 25px;
}

.card1 .el-form-item {
    margin-bottom: 10px;
}

.card1 .el-button {
    padding: 8px 16px;
}
</style>

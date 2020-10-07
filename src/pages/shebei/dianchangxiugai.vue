<template>
  <div id="app">
    <Maintabbar></Maintabbar>
    <div class="card1">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="电厂名称">
          <el-input v-model="form.name1"></el-input>
        </el-form-item>
        <el-form-item label="电厂类型">
          <el-select v-model="form.region1" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item lable-width="120px" label="发电机组容量" width='120'>
          <el-select v-model="form.region2" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="升压站电压等级">
          <el-select v-model="form.region3" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所在省份">
          <el-select v-model="form.region4" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电厂地址">
          <el-input v-model="form.name2"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.name3"></el-input>
        </el-form-item>
        <el-form-item label="邮编">
          <el-input v-model="form.name4"></el-input>
        </el-form-item>
        <el-button type="primary" @click='dataPush'>修改  </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import Maintabbar from "../../components/Main-tabbar";
  export default {
    name: 'xinjian',
    components:{
      Maintabbar
    },
    data() {
      return {
        form: {
          name1: '',
          name2: '',
          name3: '',
          name4: '',

          region1: '',
          region2: '',
          region3: '',
          region4: '',


        },

      }
    },
    methods:{
      dataPush(){
        this.$router.push({
        path:'./dianchangguanli',
        query:{
          isShow:"false"
        }
      })
      }
    }
  }
 

</script>

<style lang="" scoped>
  .card1 {
    width: 550px;
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    background: white;
  }
  .el-form-item__label{
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

  .element.style{
    width: 120px;
  }

  html,body{
  width: 100%;
  height: 100%;
}
  #app{
    margin-top: 10px;
    width: 97%;
    height: 90%;
    margin-left: 1.5%;
    background: white;
    position: absolute;
    box-shadow: 0px 0px  1px black;
  }
</style>

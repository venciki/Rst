<template>
  <div id="app">
        <div class="content">
                <div class="item">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="电厂管理" name="first">
                            <content1></content1>
                        </el-tab-pane>
                        <el-tab-pane label="设备类别" name="second">
                            <content2></content2>
                        </el-tab-pane>
                        <el-tab-pane label="设备管理" name="third">
                            <content3></content3>
                        </el-tab-pane>
                            
                    </el-tabs>
                </div>

            </div>
  </div>
</template>

<script>
import content1 from '../content/content1.vue'
import content2 from '../content/content2.vue'
import content3 from '../content/content3.vue'
export default {
  
  
  name: 'comment',
  components:{
    content1,
    content2,
    content3
  },
  data() { 
    return {
        activeName: 'first',
    }
  }
 }
</script>

<style lang="" scoped>
  
</style>
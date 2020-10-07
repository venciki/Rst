<template>
  <div class="center">
    <tabbar>
      <tabbarItem path='/shebei'>
        <div slot="item-text">设备管理</div>
      </tabbarItem>
      <tabbarItem path='/hetong'>
        <div slot="item-text">合同管理</div>
      </tabbarItem>
      <tabbarItem path='/shiyan'>
        <div slot="item-text">实验管理</div>
      </tabbarItem>
      <tabbarItem path='/xitong'>
        <div slot="item-text">系统管理</div>
      </tabbarItem>
      <tabbarItem path='/anliku'>
        <div slot="item-text">案例库管理</div>
      </tabbarItem>
     
    </tabbar>
  </div>
</template>

<script>
  import tabbar from './tabbar.vue'
  import tabbarItem from './tabbarItem.vue'
  export default {
    name: '',
    components:{
        tabbar,
        tabbarItem
    },
    data() {
      return {

      }
    },
    methods:{
     
    }
  }


  
</script>

<style lang="" scoped>
  .center {
    width: 600px;
    height: 50px;
    margin-left: 200px;
    padding: 0 80px 0 40px;
  }

</style>

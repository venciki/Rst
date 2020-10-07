<template>
    <div class="tab_bar_item" @click='itemClick' >
       
        <div :style='activeStyle'><slot name='item-text'></slot></div>
        
        
        </div>
</template>

<script>
export default {
  name: 'tabbarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    },
    activeBorder:{
      type:String,
      default:'2px solid white'
    }
  },
  data() { 
    return {
      // isActive:false
    }
  },
  methods:{
    itemClick(){
      //home -> item1(/home)  = true
      //cart -> item1(/home)  = false
      //category -> item1(/home)  = false
      //profile -> item1(/home)  = false
      // console.log(this)
    
      return this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive? {borderBottom:this.activeBorder} : {};
    }
  }
 }
 
</script>

<style lang="" scoped>
  .tab_bar_item {
    /* flex: 1; */
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: white;
    cursor: pointer;
   
    /* text-decoration: aquamarine; */
    margin-top: 10px;
    margin-left: 30px;
  }

  /* .tab_bar_item:hover{
    border-bottom:2px solid white;
  } */
  
</style>
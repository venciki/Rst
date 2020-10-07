<template>
  <div class="user">
    <div class="user_img">
      <img src="../../assets/img/img2.jpg" alt="" width="40px" height="40px">
    </div>
    <div class="user_id">
      <span>用户名</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabbar-right',
    data() {
      return {

      }
    }
  }

</script>

<style lang="" scoped>
 .user {
    width: 150px;
    height: 40px;
    margin-top: 5px;
    float: right;
    line-height: 40px;
}

 .user .user_img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
}

 .user .user_img img {
    width: 100%;
    height: 100%;
}

 .user .user_id {
    float: right;
    margin-right: 40px;
}

 .user .user_id span {
    color: #F4F4F4;
    font-size: 14px;
}

</style>

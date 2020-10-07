<template>
  <div id="app">
       <div id="app">
        <div class="wrapper">
            <div class="login_main">
                <div class="login_img">
                    <img src="../../assets/img/login_img_logo.png" alt="">
                </div>
                <p class="login_text">西安热工院调试部电气试验业务云平台</p>
                <form>
                    <div class="input">
                        <img src="../../assets/img/login_icon_user.png" alt="" class="input_img">
                        <input type="text"  id="account" placeholder="账户">
                    </div>
                    <div class="input">
                        <img src="../../assets/img/login_icon_lock.png" alt="" class="input_img">
                        <input type="password"   id="password" placeholder="密码">
                    </div>
                </form>
                <button @click="login" id="btn1">登陆</button>
            </div>
            <div class="login_img_element login_img_element1">
                <img src="../../assets/img/login_img_element1.png" alt="">
            </div>
            <div class="login_img_element login_img_element2">
                <img src="../../assets/img/login_img_element2.png" alt="">
            </div>
            <div class="login_img_element login_img_element3">
                <img src="../../assets/img/login_img_element3.png" alt="">
            </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'login',
    data() {
      return {
         
      }
    },
    methods:{
        login(){
           var name = document.getElementById('account').value;
           var password = document.getElementById('password').value;
           
             this.$router.push({
            path: './shebei',
          })

           if(name == '' || password == ''){
               alert('请填写正确的用户名！');
           }
           else{
               axios.get(`http://47.94.213.70:8084/user/login?name=${name}&password=${password}`)
     

          .then(res=>{
              console.log(res);
             
          })

          .catch(error => {

            console.log(error);

            alert('账户名或者密码错误！！！');
             

          })
        }
       
           }
           

           
    }
  }

</script>

<style lang="" scoped>
* {
    margin: 0;
    padding: 0;
}
html, body {
    width: 100%;
    height: 100%;
}
img {
    width: initial;
    height: inherit;
     /* border: 2px solid red; */
}
input {
    width: 100%;
    height: 100%;
    text-indent: 3em;
    /* border: 2px solid red; */
}
button {
    margin: 0;
    padding: 0;
    border: 1px solid transparent; 
    outline: none;   
    color: white;
    cursor: pointer;
}
#app {
    position: absolute;
    width: 100%;
    height: 100%;
}
.wrapper {
    position: relative;
    /* width: 1440px; */
    /* height: 800px; */
    width: 100%;
    /* height: 800px; */
    height: 100%;
      /* border: 2px solid red; */
    background:rgba(240,242,245,1);
}
.login_main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 600px; 
    height: 460px;
    /* border: 2px solid red; */
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 4px 0px rgba(51, 51, 51, 0.12);
      text-align: center;
    border-radius: 4px;
}
.login_main .login_img {
    width: 102px;
    height: 36px;
    margin: 68px auto 0;
     /* border: 2px solid red; */
}
.login_main .login_text {
    width: 272px;
    height: 22px;
    margin: 40px auto 0;
    font-size: 16px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: rgba(51,51,51,1);
    line-height: 22px;
}
.login_main form {
    width: 368px;
    height: 120px;
    margin: 46px auto 0;
}

.login_main form .input {
    position: relative;
    width: 100%;
    height: 40px;
    margin-bottom: 24px;
}
.login_main form .input .input_img {
    position: absolute;
    left: 12px;
    top: 12px;
    display: inline-block;
    width: 16px;
    height: 16px;
}
/* input::-webkit-input-placeholder {
    position: relative;
    left: 36px;
} */


#btn1{
    width: 368px;
    height: 40px;
    background: rgba(45,132,239,1);
    border-radius: 4px;
    /* margin-top: -100px; */
}

/* 背景的小图片 */
.login_img_element {
    position: absolute;
}
.login_img_element1 {
    top: 151px;
    left: 245px;
}
.login_img_element2 {
    top: 541px;
    left: 1088px;
}
.login_img_element3 {
    top: 246px;
    left: 1042px;
}
.login_img_element4 {
    top: 541px;
    left: 1088px;
}
</style>

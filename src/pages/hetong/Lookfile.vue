<template>
  <div id="app">
    <Maintabbar></Maintabbar>
        <div id="breadApp">
                <!-- 主要内容 -->
                <div class="bread-header" style="position:relative">
                  <div class="left" style="float:left;margin-left:50px; line-height:54px"> 
                    <span style="color:gray">  <router-link style="color:gray" to='./Filelist'>合同列表 / </router-link> <label for="" style="color:black">查看合同</label> </span>
                  </div>
                  <div class="right2" style="position:absolute;right:1.67%;top:11px">
                    <el-form ref="form" :model="form" label-width="80px"  >
                      <el-button type="primary"><router-link to='./Filelist'>返回 </router-link></el-button>
                    </el-form>
                  </div>
                </div>
               
                <div class="mainContent">
                  <div class="baseMessage">
                    <h4>基础信息
                            
                    </h4>
                   
                    <div class="baseMessage_mainContent">
                     
                      <span>合同编号：{{ form.contractNumber }}</span>
                      <span>合同名称：{{ form.contractName }}</span>
                      <span>合同金额：{{ form.contractAmount }}</span>
                      <span>币种：{{ form.currency }}</span>
                      <span>业务员：{{ form.salesman }}</span>
                      <span>签订日期：{{ form.dateSign }}</span>
                      <span>合同所属区域：{{ form.contractArea }}</span>
                      <span>合同业务类型：{{ form.contractType }}</span>
                      <span>合合同内容概述：{{ form.contractContent }}</span>
                      <span>合同异常情况备注：{{ form.contractException }}</span>
                      <span>合同附件：{{ form.contractFujian }}</span>
                    </div>
                    <div class="line"></div>
                  </div>
                  <!-- 甲方合同 -->
                  <div class="firstMessage">
                      <h4>甲方信息</h4>
                    
                      <div class="firstMessage_mainContent">
                        <span>合同甲方：{{ form.contractPartyA }}</span>
                        <span>甲方地址：{{ form.partyAaddress }}</span>
                        <span>甲方联系人：{{ form.contactA }}</span>
                        <span>联系电话：{{ form.contactNumberA }}</span>
                        <span>联系人E-mail：{{ form.contactEmailA }}</span>
                    </div>
                    <div class="line"></div>
                  </div>
                  <!-- 乙方合同 -->
                  <div class="secondMessage">
                    <h4>乙方信息</h4>
                   
                    <div class="secondMessage_mainContent">
                      <span>合同乙方：{{  form.contractPartyB }}</span>
                      <span>乙方联系人：{{ form.contactB }}</span>
                      <span>联系电话：{{ form.contactNumberB }}</span>
                      <span>联系人E-mail：{{form.contactEmailB }}</span>
                    </div>
                    <div class="line"></div>
                  </div>
                  <!-- 项目执行 -->
                  <div class="proRun">
                    <h4>项目执行</h4>
                  
                    <div class="proRun_mainContent">
                      <span>合同执行责任部门：{{ form.responsibleDapartment }}</span>
                        <span>执行开始日期：{{  form.startDate }}</span>
                        <span>执行截止日期：{{ form.stopDate }}</span>
                        <span>项目负责人：{{ form.chargePerson }}</span>
                        <span>项目执行人员：{{  form.executivePerson }}</span>
                        <span>技术报告编号：{{  form.reportNumber }}</span>
                        <span>技术报告文档：{{ form.reportText }}</span>
                        <span>技术报告邮寄日期：{{ form.reportDate }}</span>
                        <span>合同状态：{{ form.contactState }}</span>
                        <span>执行情况备注：{{ form.beizhu }}</span>
                    </div>
                    <div class="line"></div>
                  </div>
                  <!-- 发票&回款 -->
                  <div class="ticktAndMoney">
                    <h4>发票&回款</h4>
                 
                    <div class="ticktAndMoney_mainContent">
                      <span>开具发票金额：{{ form.fapiaoAccount }}</span>
                        <span>开具发票日期：{{ form.fapiaoDate }}</span>
                        <span>开具收票日期：{{  form.shoujuDate }}</span>
                        <span>发票，收据邮寄日期：{{ form.youjiDate }}</span>
                        <span>开具发票、收据想请备注：{{ form.shoujuBeizhu }}</span>
                        <span>发票收件人：{{ form.personAddress }}</span>
                        <span>发票收件人姓名：{{ form.personName }}</span>
                        <span>发票收件人电话：{{ form.personPhone }}</span>
                        <span>回款金额：{{ form.huikuanAccount }}</span>
                        <span>汇款日期：{{ form.huikuanDate }}</span>
                        <span>回款余额：{{ form.huikuanRange }}</span>
                        <span>回款想请备注：{{  form.huikuanBeizhu }}</span>
                    </div>
                  </div>
              </div>
          </div>
  </div>
</template>

<script>
import Maintabbar from "../../components/Main-tabbar";
export default {
  name: '',
  components: {
    Maintabbar
  },
  data() { 
    return {
          form: {

          // //基础信息
          // contractNumber:'HT0000001',
          // contractName:'嘉兴火电厂项目调试',
          // contractAmount:'250,000',
          // currency:'人民币',
          // salesman:'张三',
          // dateSign:'2019-06-01',
          // contractArea:'浙江省嘉兴市',
          // contractType:'涉网实验',
          // contractContent:'无',
          // contractException:'无',
          // contractFujian:'文档名称.docx',


          // //甲方信息
          // contractPartyA:'嘉兴火电厂',
          // partyAaddress:'浙江省平湖市',
          // contactA:'赵经理',
          // contactNumberA:'156-8694-2972',
          // contactEmailA:'无',

          //  //乙方信息
          // contractPartyB:'嘉兴火电厂',
          // contactB:'张三',
          // contactNumberB:'156-8694-2972',
          // contactEmailB:'无',

          // //项目执行
          // responsibleDapartment:'状态检测型',
          // startDate:'2019-06-15',
          // stopDate:'2019-06-30',
          // chargePerson:'李四',
          // executivePerson:'检测部门一队',
          // reportNumber:'无',
          // reportText:'无',
          // reportDate:'执行中',
          // contactState:'无',
          // beizhu:'无',

          // //发票&回款
          // fapiaoAccount:'250,000元',
          // fapiaoDate:'2019-06-10',
          // shoujuDate:'2019-06-01',
          // youjiDate:'2019-06-10',
          // shoujuBeizhu:'无',
          // personAddress:'嘉兴火电厂',
          // personName:'赵经理',
          // personPhone:'156-8694-2972',
          // huikuanAccount:'200,000元',
          // huikuanDate:'2019-06-20',
          // huikuanRange:'无',
          // huikuanBeizhu:'无',

        },
       
    }
  }
 }
</script>

<style lang="" scoped>
       * {
        padding: 0;
        margin: 0;
        list-style: none;
      }
  
      html,
      body {
        height: 100%;
        width: 100%;
      }
  
      body {
        overflow-x: hidden;
        background: rgba(240, 242, 245, 1);
      }
  
      .nav {
        width: 100%;
        height: 50px;
        background: #333333;
      }
  
      .nav .left {
        float: left;
        margin-left: 30px;
      }
  
      .nav .left span {
        color: #F4F4F4;
        line-height: 50px;
        font-size: 14px;
      }
  
      .nav .right {
        float: right;
        margin-right: 150px;
      }
  
      .nav .right li {
        height: 30px;
        margin-top: 10px;
        float: left;
        color: #F4F4F4;
        line-height: 30px;
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        text-align: center;
      }
  
      .nav .right li:hover {
        border-bottom: 3px solid #F4F4F4;
      }
  
      .nav .user {
        width: 150px;
        height: 40px;
        margin-top: 5px;
        float: right;
        line-height: 40px;
      }
  
      .nav .user .user_img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        float: left;
      }
  
      .nav .user .user_img img {
        width: 100%;
        height: 100%;
      }
  
      .nav .user .user_id {
        float: right;
        margin-right: 40px;
      }
  
      .nav .user .user_id span {
        color: #F4F4F4;
        font-size: 14px;
      }

      #breadApp .bread-header {
  width: 100%;
  height: 54px;
  background: rgba(255, 255, 255, 1);
  /* border: 1px solid #000; */
}

#breadApp .mainContent {
  /* height: 815px; */
  width: 97.5%;
  background: rgba(255, 255, 255, 1);
  /* border: 1px solid #000; */
  margin-top: 14px;
  margin-left: 1.25%;
  border-radius: 2px;
}

#breadApp .el-breadcrumb {
  margin-left: 32px;
}

#breadApp .el-breadcrumb span {
  line-height: 54px;
}

#breadApp .el-breadcrumb__item:last-child .el-breadcrumb__inner {
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

#breadApp .el-breadcrumb__item:first-child {
  color: rgba(136, 136, 136, 1);
}

.baseMessage,
.firstMessage,
.secondMessage,
.proRun,
.ticktAndMoney {
  margin-left: 100px;
  padding-top: 20px;
}

.baseMessage_mainContent,
.firstMessage_mainContent,
.secondMessage_mainContent,
.proRun_mainContent,
.ticktAndMoney_mainContent {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 10px 0;
}

.baseMessage span,
.firstMessage span,
.secondMessage span,
.proRun span,
.ticktAndMoney span {
  width: 300px;
  padding: 12px;
  margin-left: 20px;
  font-size: 14px;
  font-family:PingFangSC-Regular,PingFang SC;
  color: rgba(51, 51, 51, 1);
  font-weight: 400;
}
.mainContent .line {
  height: 1px;
  width: 98%;
  background-color:#E8E8E8;
  margin: auto;
}

#breadApp .el-button{
   width: 65px;
  height: 32px;
  background: rgba(24, 144, 255, 1);
  border-radius: 4px;
  padding: 0;
}

.bread-header {
  display: flex;
}

#breadApp .el-row {
  margin-top: 12px;
  margin-left: 80%;
}

</style>
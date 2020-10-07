<template>
  <div id="app">
    <Maintabbar></Maintabbar>
    <div class="content">
      <div id="app">

        <!-- 基础信息 -->
        <div class="base content_div">
          <div class="base_title">
            <h5>基础信息</h5>
          </div>
          <div class="line"></div>
          <div class="base_content">
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="form"
              style=" display:flex; flex-wrap: wrap;"
            >
              <el-form-item label="合同编号">
                <el-input v-model="form.contractNumber" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="合同名称">
                <el-input v-model="form.contractName" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="合同金额">
                <el-input v-model="form.contractAmount" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="币种">
                <el-input v-model="form.currency" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="业务员">
                <el-input v-model="form.salesMan" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form :label-position="labelPosition" label-width="80px" :model="form">
                <el-form-item label="签订日期">
                  <template>
                    <div class="block">
                      <el-date-picker v-model="form.signDate" type="date" placeholder="选择日期"></el-date-picker>
                    </div>
                  </template>
                </el-form-item>
              </el-form>

              <el-form :label-position="labelPosition" label-width="80px" :model="form">
                <el-form-item label="合同所属区域">
                  <el-select v-model="form.contractArea" placeholder="活动区域">
                    <el-option label="区域一" value="0"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>

              <el-form :label-position="labelPosition" label-width="80px" :model="form">
                <el-form-item label="合同业务类型">
                  <el-select v-model="form.businessType" placeholder="活动区域">
                    <el-option label="区域一" value="0"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <el-form-item label="合同内容概述(选填)" style="width:632px;">
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="form.overview">
                </el-input>
              </el-form-item>
              <el-form-item label="合同异常情况备注(选填)" style="width:632px;">
                <el-input
                  type="textarea"
                  :rows="4"
                  placeholder="请输入内容"
                  v-model="form.abnormalNote">
                </el-input>
              </el-form-item>
              <el-form-item label="合同附件">
                   <div class="uploading">
                      <img class="upload-icon" src="../../assets/img/upload.png">
                      <p>上传附件</p>
                      <a class="tijiao">
                        <input type="file" name="submit" id="btn0">
                      </a>
                    </div>
                </el-form-item>
            </el-form>
          </div>
        </div>

        <!-- 甲方信息 -->
        <div class="first_info content_div">
          <div class="base_title">
            <h5>甲方合同</h5>
          </div>
          <div class="line"></div>
          <div class="first_content">
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="form"
              style=" display:flex; flex-wrap: wrap;"
            >
              <el-form-item label="合同甲方">
                <el-input v-model="form.partyA" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="甲方地址">
                <el-input v-model="form.partyAAddress" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="甲方联系人">
                <el-input v-model="form.partyALinkman" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="form.partyAPhone" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="联系人E-mail(选填)">
                <el-input v-model="form.partyAEmail" placeholder="请输入"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <!-- 乙方信息 -->

        <div class="second_info content_div">
          <div class="base_title">
            <h5>乙方合同</h5>
          </div>
          <div class="line"></div>
          <div class="second_content">
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="form"
              style=" display:flex; flex-wrap: wrap;"
            >
              <el-form-item label="合同乙方">
                <el-input v-model="form.partyB" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="乙方联系人">
                <el-input v-model="form.partyBLinkman" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="form.partyBPhone" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="联系人E-mail(选填)">
                <el-input v-model="form.partyBEmail" placeholder="请输入"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <!-- 项目执行 -->
        <div class="project content_div">
          <div class="base_title">
            <h5>项目执行</h5>
          </div>
          <div class="line"></div>
          <div class="project_content">
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="form"
              style=" display:flex; flex-wrap: wrap;"
            >
              <el-form-item label="合同执行责任部门">
                <el-input v-model="form.executiveDept" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form :label-position="labelPosition" label-width="80px" :model="form">
                <el-form-item label="执行开始日期">
                  <template>
                    <div class="block">
                      <el-date-picker v-model="form.executiveStartDate" type="date" placeholder="选择日期"></el-date-picker>
                    </div>
                  </template>
                </el-form-item>
              </el-form>

              <el-form :label-position="labelPosition" label-width="80px" :model="form">
                <el-form-item label="执行截止日期">
                  <template>
                    <div class="block">
                      <el-date-picker v-model="form.executiveEndDate" type="date" placeholder="选择日期"></el-date-picker>
                    </div>
                  </template>
                </el-form-item>
              </el-form>

              <el-form-item label="项目负责人">
                <el-input v-model="form.projectManager" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form-item label="项目执行人员">
                <el-input v-model="form.projectExecutive" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form-item label="项目技术报告编号(选填)">
                <el-input v-model="form.reportNumber" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form-item label="技术报告文档(选填)">
                <el-input v-model="form.reportUrl" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form-item label="技术报告邮寄日期(选填)">
                <el-input v-model="form.reportMailingDate" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form :label-position="labelPosition" label-width="80px" :model="form">
                <el-form-item label="合同状态">
                  <el-select v-model="form.infoState" placeholder="活动区域">
                    <el-option label="0" value="0"></el-option>
                    <el-option label="1" value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>

              <el-form :label-position="labelPosition" label-width="80px">
                <el-form-item label="工程验收单(选填)">
                   <div class="uploading">
                      <img class="upload-icon" src="../../assets/img/upload.png">
                      <p>上传附件</p>
                      <a class="tijiao">
                        <input type="file" name="submit" id="btn1">
                      </a>
                    </div>
                </el-form-item>
              </el-form>

              <el-form :label-position="labelPosition" label-width="80px">
                <el-form-item label="合工程量确认单(选填)">
                  <div class="uploading">
                      <img class="upload-icon" src="../../assets/img/upload.png">
                      <p>上传附件</p>
                      <a class="tijiao">
                        <input type="file" name="submit" id="btn2">
                      </a>
                    </div>
                </el-form-item>
              </el-form>

              <el-form :label-position="labelPosition" label-width="80px">
                <el-form-item label="客户满意度调查表(选填)">
                  <div class="uploading">
                      <img class="upload-icon" src="../../assets/img/upload.png">
                      <p>上传附件</p>
                      <a class="tijiao">
                        <input type="file" name="submit" id="btn3">
                      </a>
                    </div>
                </el-form-item>
              </el-form>
            </el-form>
          </div>
        </div>

        <!-- 发票&回款 -->

        <div class="invoice_collection content_div" style=" display:flex; flex-wrap: wrap;">
          <div class="base_title">
            <h5>发票&回款</h5>
          </div>
          <div class="line"></div>
          <div class="invoice_content">
            <el-form
              :label-position="labelPosition"
              label-width="80px"
              :model="form"
              style=" display:flex; flex-wrap: wrap;"
            >
              <el-form-item label="开具发票金额">
                <el-input v-model="form.lnvoiceAmount" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form :label-position="labelPosition" label-width="80px" :model="form">
                <el-form-item label="开具发票日期">
                  <template>
                    <div class="block">
                      <el-date-picker v-model="form.lnvoiceDate" type="date" placeholder="选择日期"></el-date-picker>
                    </div>
                  </template>
                </el-form-item>
              </el-form>

              <el-form :label-position="labelPosition" label-width="80px" :model="form">
                <el-form-item label="开具收据日期">
                  <template>
                    <div class="block">
                      <el-date-picker v-model="form.receiptDate" type="date" placeholder="选择日期"></el-date-picker>
                    </div>
                  </template>
                </el-form-item>
              </el-form>

              <el-form :label-position="labelPosition" label-width="80px" :model="form">
                <el-form-item label="发票、收据邮寄日期">
                  <template>
                    <div class="block">
                      <el-date-picker v-model="form.mailingDate" type="date" placeholder="选择日期"></el-date-picker>
                    </div>
                  </template>
                </el-form-item>
              </el-form>

              <el-form-item label="开具发票、收据详情备注">
                <el-input v-model="form.detailsNote" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form-item label="发票收件人地址">
                <el-input v-model="form.receiverAddress" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form-item label="发票收件人姓名">
                <el-input v-model="form.receiverName" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form-item label="发票收件人电话">
                <el-input v-model="form.receiverPhone" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form-item label="回款金额">
                <el-input v-model="form.paymentAmount" placeholder="请输入"></el-input>
              </el-form-item>

              <el-form-item label="回款日期">
                <template>
                  <div class="block">
                    <el-date-picker v-model="form.paymentDate" type="date" placeholder="选择日期"></el-date-picker>
                  </div>
                </template>
              </el-form-item>

              <p>
                <el-form-item label="回款余额">
                  <el-input v-model="form.paybackBalance" placeholder="请输入"></el-input>
                </el-form-item>
              </p>


              <el-form-item label="回款详情备注" style="width:632px;">
                <el-input type="textarea" 
                v-model="form.paymentNote"
                :rows="4"
                placeholder="请输入内容">
                </el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <!-- footer -->
        <div class="footer">
          <el-row>
            <el-button type="primary" @click="update(),dataPush()">保存</el-button>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Maintabbar from '../../components/Main-tabbar'
export default {
  name: "Addfile",
  components:{
    Maintabbar,
  },
  data() {
    return {
      labelPosition: "top",
      form: {
        //基础信息

        contractNumber: '', //合同编号
        contractName: '', //合同名称
        contractAmount: '', //合同金额
        currency: '', //币种
        salesMan: '', //业务员
        signDate: '', //签订日期
        contractArea: '', //合同所属区域
        businessType: '', //合同业务类型
        overview: '', //合同内容概述
        abnormalNote: '', //合同异常情况备注


        //甲方信息
        
        partyA: '', //合同甲方
        partyAAddress: '', //合同甲方地址
        partyALinkman: '', //甲方联系人
        partyAPhone: '', //甲方电话
        partyAEmail: '', //合同甲方联系人Email

        //乙方信息

        partyB: '', //合同乙方
        partyBLinkman: '', //合同乙方联系人
        partyBPhone: '', //合同乙方联系人电话
        partyBEmail: '', //合同乙方联系人Email

        //项目执行

        executiveDept: '', //合同执行责任部门
        executiveStartDate: '', //执行开始日期
        executiveEndDate: '', //执行截止日期
        projectManager: '', //项目负责人
        projectExecutive: '', //项目执行人员
        reportNumber: '', //项目技术报告编号(选填)
        reportUrl: '', //技术报告文档(选填)
        reportMailingDate: '', //技术报告邮寄日期(选填)
        infoState: '', //合同状态

        //发票&回款

        lnvoiceAmount: '', //开具发票金额
        lnvoiceDate: '', //开具发票日期
        receiptDate: '', //开具收据日期
        mailingDate: '', //发票、收据邮寄日期
        detailsNote: '', //开具发票、收据详情备注
        receiverAddress: '', //发票收件人地址
        receiverName: '', //发票收件人姓名
        receiverPhone: '', //发票收件人电话
        paymentAmount: '', //回款金额
        paymentDate: '', //回款日期
        paybackBalance: '', //回款余额
        paymentNote: '', //回款详情备注


        
      },
    };
  },
  methods: {
    // 保存
    dataPush() {
        if (!(this.form.contractNumber && this.form.contractName && this.form.contractAmount && this.form.currency && this.form.salesMan && this.form.signDate &&
            this.form.contractArea && this.form.businessType&& this.form.partyA && this.form.partyAAddress && this.form.partyALinkman && this.form.partyAPhone 
            && this.form.partyB && this.form.partyBLinkman && this.form.partyBPhone 
            && this.form.executiveDept && this.form.executiveStartDate && this.form.executiveEndDate && this.form.projectManager && this.form.projectExecutive && this.form.paymentNote 
            && this.form.lnvoiceAmount && this.form.lnvoiceDate && this.form.receiptDate && this.form.mailingDate && this.form.detailsNote && this.form.receiverAddress && this.form.receiverName && this.form.receiverPhone && this.form.paymentAmount && this.form.paymentDate && this.form.paybackBalance && this.form.infoState)) {
          alert('请检查你输入的数据')
            }else{
              var data = {
                contractNumber: this.form.contractNumber,
                contractName: this.form.contractName,
                contractAmount: this.form.contractAmount,
                currency: this.form.currency,
                salesMan: this.form.salesMan,
                signDate: this.form.signDate,
                contractArea: this.form.contractArea,
                businessType: this.form.businessType,
                partyA: this.form.partyA,
                partyAAddress: this.form.partyAAddress,
                partyALinkman: this.form.partyALinkman,
                partyAPhone: this.form.partyAPhone,
                partyAEmail: this.form.partyAEmail,
                partyB: this.form.partyB,
                partyBLinkman: this.form.partyBLinkman,
                partyBPhone: this.form.partyBPhone,
                partyBEmail: this.form.partyBEmail,
                executiveDept: this.form.executiveDept,
                executiveStartDate: this.form.executiveStartDate,
                executiveEndDate: this.form.executiveEndDate,
                projectManager: this.form.projectManager,
                projectExecutive: this.form.projectExecutive,
                reportNumber: this.form.reportNumber,
                reportUrl: this.form.reportUrl,
                reportMailingDate: this.form.reportMailingDate,
                paymentNote: this.form.paymentNote,
                lnvoiceAmount: this.form.lnvoiceAmount,
                lnvoiceDate: this.form.lnvoiceDate,
                receiptDate: this.form.receiptDate,
                mailingDate: this.form.mailingDate,
                detailsNote: this.form.detailsNote,
                receiverAddress: this.form.receiverAddress,
                receiverName: this.form.receiverName,
                receiverPhone: this.form.receiverPhone,
                paymentAmount: this.form.paymentAmount,
                paymentDate: this.form.paymentDate,
                paybackBalance: this.form.paybackBalance,
                infoState: this.form.infoState,
                overview: this.form.overview,
                abnormalNote: this.form.abnormalNote
              }

              localStorage.setItem('data', JSON.stringify(data))
              this.$router.push({
                path: './Filelist',
              })
              axios.post('http://localhost:8084/contract/add', {
                contractNumber: this.form.contractNumber,
                contractName: this.form.contractName,
                contractAmount: this.form.contractAmount,
                currency: this.form.currency,
                salesMan: this.form.salesMan,
                signDate: this.form.signDate,
                contractArea: this.form.contractArea,
                businessType: this.form.businessType,
                partyA: this.form.partyA,
                partyAAddress: this.form.partyAAddress,
                partyALinkman: this.form.partyALinkman,
                partyAPhone: this.form.partyAPhone,
                partyAEmail: this.form.partyAEmail,
                partyB: this.form.partyB,
                partyBLinkman: this.form.partyBLinkman,
                partyBPhone: this.form.partyBPhone,
                partyBEmail: this.form.partyBEmail,
                executiveDept: this.form.executiveDept,
                executiveStartDate: this.form.executiveStartDate,
                executiveEndDate: this.form.executiveEndDate,
                projectManager: this.form.projectManager,
                projectExecutive: this.form.projectExecutive,
                reportNumber: this.form.reportNumber,
                reportUrl: this.form.reportUrl,
                reportMailingDate: this.form.reportMailingDate,
                paymentNote: this.form.paymentNote,
                lnvoiceAmount: this.form.lnvoiceAmount,
                lnvoiceDate: this.form.lnvoiceDate,
                receiptDate: this.form.receiptDate,
                mailingDate: this.form.mailingDate,
                detailsNote: this.form.detailsNote,
                receiverAddress: this.form.receiverAddress,
                receiverName: this.form.receiverName,
                receiverPhone: this.form.receiverPhone,
                paymentAmount: this.form.paymentAmount,
                paymentDate: this.form.paymentDate,
                paybackBalance: this.form.paybackBalance,
                infoState: this.form.infoState,
                overview: this.form.overview,
                abnormalNote: this.form.abnormalNote
              })
              .then(function (response) {
                console.log(response);
                window.location.reload();
              })
              .catch(function (error) {
                console.log(error);
              });
            }
      },
      // 上传文件
      update(){
        var formData = new FormData() // 声明一个FormData对象
        // var formData = new window.FormData() // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
        // console.log(document.getElementById('btn0').files)
        formData.append('file', document.getElementById('btn0').files[0])
        formData.append('file', document.getElementById('btn1').files[0])
        formData.append('file', document.getElementById('btn2').files[0])
        formData.append('file', document.getElementById('btn3').files[0])
        // formData.append('fileName', document.getElementById('btn1').value)
        var options = {  // 设置axios的参数
         url: 'http://localhost:8084/contract/multifileload',
         data:formData,
         method: 'post',
         headers: { 
          'Content-Type': 'multipart/form-data'
        }
      }
      axios(options).then((res) => {
          console.log(res);
          alert('文件 is ok')
          //    this.$router.push({
          //     path: '/shiyan/Afterzuoye',
          //   })
      })
    }
  },
  activated(){
    this.$router.push(this.path);   //处理默认现实的路由
  },
  beforeRouteLeave(to, from, next){
    this.path = this.$route.path;
    next();
  },
   
};
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
  color: #f4f4f4;
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
  color: #f4f4f4;
  line-height: 30px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-align: center;
}

.nav .right li:hover {
  border-bottom: 3px solid #f4f4f4;
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
  color: #f4f4f4;
  font-size: 14px;
}

.content div {
  border-radius: 2px;
  /* border: 1px solid #000; */
}

.content .content_div {
  background: #ffffff;
  margin-top: 15px;
  margin-left: 1.25%;
  width: 97.5%;
}

.base,
.first_content,
.second_content,
.project,
.invoice_collection {
  padding-bottom: 10px;
}
.invoice_collection {
  margin-bottom: 86px;
}

.content .content_div .base_title {
  height: 55px;
  border-radius: 0;
}

.content .content_div .base_title h5 {
  line-height: 55px;
}

.content .content_div .line {
  width: 100%;
  border-radius: 0;
  height: 1px;
  background: rgba(233, 233, 233, 1);
}

.content .content_div .base_title h5 {
  margin-left: 32px;
}

.content .base .base_content {
  /* height: 400px; */
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid #000; */
}

#app .el-form-item__label {
  padding: 0;
  width: 284px;
}

#app .el-form-item {
  margin-left: 50px;
  width: 284px;
  /* border: 2px solid red; */
}

.content .base .base_content {
  display: flex;
  flex-wrap: wrap;
  /* border: 2px solid red; */
}
.el-date-picker {
  width: 200px;
}
#app .little_input {
  margin-left: 64px;
}

#app .little_textarea {
  margin-left: 64px;
}

#app .el-textarea__inner {
  width: 632px;
}

.content .first_content {
  display: flex;
  flex-wrap: wrap;
}

.content .second_content {
  display: flex;
  flex-wrap: wrap;
}

.content .project_content {
  display: flex;
  flex-wrap: wrap;
}

.content .invoice_content {
  display: flex;
  flex-wrap: wrap;
}

.content .footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow:0px -1px 2px 0px rgba(0,0,0,0.2);
  height: 56px;
  margin-top: 20px;
  background-color: #ffffff;
  /* border: 1px solid #000; */
}

.content .footer .el-row {
  position: relative;
}

.content .footer .el-button {
  position: absolute;
  right: 1.67%;
  top: 12px;
}
.el-button {
  width:65px;
  height:32px;
  background:rgba(24,144,255,1);
  border-radius:4px;
}
#app .el-date-editor.el-input {
  width: 284px;
}

#app .el-select {
  width: 284px;
}

  .bread-header {
  width: 100%;
  height: 54px;
  background: rgba(255, 255, 255, 1);
  /* border: 1px solid #000; */
}


/* 上传按钮 */
.uploading{                   /*上传框*/  /*上传后*/
			height: 32px;
			width: 106px;
			border-radius: 10px;            
			position: relative;
      background-color:#2D84EF;
      border-radius:4px;
		}
    .uploading img {
      float: left;
      position: absolute;
      top: 50%;
      margin-top: -8px;
      margin-left: 12px;
    }
    .uploading p{
			font-size: 14px;
      color: white;
			text-align: center;
      margin-left: 12px;
      line-height: 32px;
		}
    .tijiao{
			height: 32px;
			width: 106px;
			position: absolute;
			top: 0;
			left: 0;
		}
		.tijiao input{
			height: 32px;
			width: 106px;
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0;
			cursor: pointer;
			z-index: 1;
		}
</style>

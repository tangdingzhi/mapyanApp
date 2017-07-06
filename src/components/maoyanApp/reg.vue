<template>
 <div class="login">
  <div class="theme">猫眼APP后台管理系统</div>
  <div style="width:360px; height: 310px; border:1px solid #C0CCDA; margin: 0 auto; margin-top: 20px; background-color: #C0CCDA;"> 
  <div class="loginbox">
  <div style="text-align: center; color: white; font-family: Microsoft YaHei; font-size: 25px;" >注册页面</div>
<div class="username">
  <el-input placeholder="请输入您的账号"  v-model="username" style="300px;" @blur="quertIsReg(username)">
    <template slot="prepend">账号</template>
  </el-input>
</div>
<div class="isReg" :class="{Gcolor:color,Rcolor:!color}">{{isReg}}</div>
<div class="password">
  <el-input placeholder="请输入您的密码" type="password" v-model="password" >
    <template slot="prepend">密码</template>
  </el-input>
</div>
<div class="isReg" style="color:#13CE66">{{isOk}}</div>
</div>
<div class="btn">
  <el-button type="primary" @click="reg(username,password)">注册</el-button>
  </div>
  
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'reg',
  data(){
    return{
      username:"",
      password:"",
      isReg:"",
      color:true,
      isOk:""
    }
  },
  methods:{
    async quertIsReg(username){
      const {
        data
      } = await axios.get("http://localhost:3000/users/isUse", {
        params: {
          username:username,         
        }
      })
      if(!data){
        this.isReg="此账号已被注册",
        this.color=false
      }else {
        this.isReg="此账号可以注册",
        this.color=true
      }
      
    },
    async reg(username,password){
      const {
        data
      } = await axios.post("http://localhost:3000/users/reg", {
          username:username,  
          password:password       
      })
     if(data){
      this.isOk="注册成功"
     }
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  padding: 0;
  margin: 0;
}
body {
  font-family: Helvetica, sans-serif;
}
.isReg{
  padding: 10px 0;
  text-align: center;
  font-family:"PingFang SC";
  font-size: 14px;
  height: 30px;
}
.Gcolor{
  color: #13CE66;
}
.Rcolor{
  color: #FF4949
}
.login{
  width: 100%;
  height: 300px;
  margin: 0 auto;
}
.login .loginbox{
  margin: 0 auto;
  margin-top: 20px;
  width: 300px;
  height: 200px;
  background-color: #C0CCDA;
}
.theme{
  height: 100px;
  width: 100%;
  text-align: center;
  line-height: 100px;
  font-family: "Microsoft YaHei";
  font-size: 30px;
  background-color: #8492A6;
}
.username{
  margin-top: 30px;
}
.password{
  /*margin-top: 30px;*/
}
.btn{
  text-align: center;
  margin-top: 30px;
}
</style>
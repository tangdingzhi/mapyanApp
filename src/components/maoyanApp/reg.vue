<template>
 <div class="login">
  <div class="theme">猫眼APP后台管理系统</div>
  <div style="width:400px; height: 400px; border:1px solid #C0CCDA; margin: 0 auto; margin-top: 100px; background-color: #C0CCDA;"> 
  <div class="loginbox">
  <div style="text-align: center; color: white; font-family: Microsoft YaHei; font-size: 25px;" >注册页面</div>
<div class="username">
  <el-input placeholder="请输入您的账号" v-model="input3" style="300px;">
    <template slot="prepend">账号</template>
  </el-input>
</div>
<div class="password">
  <el-input placeholder="请输入您的密码" v-model="input3">
    <template slot="prepend">密码</template>
  </el-input>
</div>
</div>
<div class="btn">
  <el-button type="primary">注册</el-button>
  </div>
  
  </div>
  </div>
</template>

<script>
export default {
  name: 'reg',
  
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
.login{
  width: 100%;
  height: 300px;
  margin: 0 auto;
}
.login .loginbox{
  margin: 0 auto;
  margin-top: 80px;
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
  margin-top: 30px;
}
.btn{
  text-align: center;
  margin-top: 30px;
}
</style>
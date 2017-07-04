<template>
  <div>
    <h3><router-link :to="'/maoyanApp/user'">员工管理</router-link></h3>
	<h3><router-link :to="'/maoyanApp/movies'">电影管理</router-link></h3>
	<h3><router-link :to="'/maoyanApp/theaters'">座位管理</router-link></h3>
	<h3><router-link :to="'/maoyanApp/studios'">影院管理</router-link></h3>
	<h3><router-link :to="'/maoyanApp/schedules'">排片管理</router-link></h3>
	<div>
		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1">选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		  </el-submenu>
		  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
	</div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: 'maoyanApp',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
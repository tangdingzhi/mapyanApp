<template>
  <div>
		<h5><router-link :to="'/maoyanApp/user/addUsers'">新增用户</router-link></h5>
		<h5><router-link :to="'/info/emp/empList'">用户列表</router-link></h5> 	
    	<div class="box"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: 'users',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<!-- scoped作用域的意思 就是说这里面声明的样式其他组件不能使用。 -->
<style scoped>
.box{
		/*width: 400px;*/
		position: absolute;
		top: 20px;
		left: 200px
	}

</style>
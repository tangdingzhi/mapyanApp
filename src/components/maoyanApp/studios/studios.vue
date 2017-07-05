<template>
  <div>
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
		width: 300;		
		top: 20px;
		left: 200px
	}

</style>
<template>
  <div>
    <h3><router-link :to="'/maoyanApp/user'">员工管理</router-link></h3>
	<h3><router-link :to="'/maoyanApp/movies'">电影管理</router-link></h3>
	<h3><router-link :to="'/maoyanApp/theaters'">座位管理</router-link></h3>
	<h3><router-link :to="'/maoyanApp/studios'">影院管理</router-link></h3>
	<h3><router-link :to="'/maoyanApp/schedules'">排片管理</router-link></h3>
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
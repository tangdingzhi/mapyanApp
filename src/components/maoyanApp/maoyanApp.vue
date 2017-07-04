<template>
  <div>
	<el-col :span="3">
	<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
        	<i class="el-icon-message"></i>员工管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
          	<router-link :to="'/maoyanApp/user/addUsers'">新增用户</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
          	<router-link :to="'/maoyanApp/user/addUsers'">用户列表</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
        	<i class="el-icon-menu"></i>电影管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
          	<router-link :to="'/maoyanApp/user/addUsers'">新增电影</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
          	<router-link :to="'/maoyanApp/user/addUsers'">电影列表</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
        	<i class="el-icon-setting"></i>放映厅管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
          	<router-link :to="'/maoyanApp/theaters/addtheaters'">新增</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
          	<router-link :to="'/maoyanApp/user/addUsers'">列表</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
        	<i class="el-icon-star-off"></i>影院管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">
          	<router-link :to="'/maoyanApp/user/addUsers'">新增</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
          	<router-link :to="'/maoyanApp/user/addUsers'">列表</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
        	<i class="el-icon-date"></i>排片管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">
          	<router-link :to="'/maoyanApp/user/addUsers'">新增</router-link>
          </el-menu-item>
          <el-menu-item index="5-2">
          	<router-link :to="'/maoyanApp/user/addUsers'">电影</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </el-col>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: 'maoyanApp',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-menu a{
	text-decoration: none;
	color: #48576A;
}

</style>
<template>
<div>
    <h1>影院列表</h1>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="name"
      label="影院名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="address"
      label="影院地址"
      width="250">
    </el-table-column>
    <el-table-column
      fixed="right"
      prop="_id"
      label="操作"
      width="100">
      <template scope="scope">
        <el-button @click="removeStudios(scope.row._id)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>

</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'//mapState用来返回容器组件里面所有state状态，

export default {  
  methods: {
      ...mapActions("studios",["getAllStudios","removeStudios"])
    },
    computed:{
    ...mapState("studios",["tableData"])
  },
   
    mounted(){
      this.getAllStudios()
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
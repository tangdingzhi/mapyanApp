<template>
  <div>
    <h1>新增影院</h1>
    <div class="box">
      <p>影院名称:</p>
      <el-input
        size="small"
        placeholder="请输入影院名称"
        v-model="name">
      </el-input>
    </div>
    <div class="address box">
    <p>影院地址:</p>
      <el-input
        size="small"
        placeholder="请输入影院地址"
        v-model="address">
      </el-input> 
    </div> 
    <div class="btn">
      <el-button type="primary" @click="addStudios(name,address)">保存</el-button>
    </div>
  </div>  
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'//mapState用来返回容器组件里面所有state状态，
import axios from 'axios'
export default {
  data(){
    return {
      name:"",
      address:"",
    }
  },
  methods:{
    async addStudios(name,address){
      const {
        data
      } = await axios.post("http://localhost:3000/studio/addstudio", {
        name:name,
        address:address
      })
      console.log(data)
    }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.address{
  margin-top: 30px
}
.box{
  display: flex;
  align-items: center;
}
.box p{
  width: 100px;
  font-size: 14px;
}
.btn{
  text-align: center;
  margin-top: 30px;
}
</style>
<template>
  <div class="">
      <h1>NEW放映厅</h1>
      <el-input v-model="input" placeholder="请输入放映厅名称"></el-input>
      <el-button type="primary" @click="addTheater({
          studioId,
          name: input
        })">保存</el-button>    
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex'
export default {
    name: 'addtheater',
    data() {
    return {
        input: '',
        studioId: this.$route.params.studioId
      }
    },
    methods: {
      ...mapActions("theaters",["addTheater"])
    },
    mounted() {
    console.log(this.$route.params.studioId)
  }
}

</script>

<style scoped>

</style>

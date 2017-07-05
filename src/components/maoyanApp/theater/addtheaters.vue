<template>
  <div>
      <h1>新增放映厅</h1>
      <el-table
        :data="this.tableData2"
        style="width: 50%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="name"
          label="影院名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button

              size="small"
              @click="add(scope)">新增</el-button>
            <el-button
              size="small"
              type="danger"
              @click="HANDLEDELETE({
                index:scope.$index, row:scope.row._id
                })">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import {
  mapMutations,
  mapActions,
  mapGetters,
  mapState
} from 'vuex'
import axios from 'axios'
import Router from '../../../router/index.js'
export default {
  name: 'addtheaters',
  computed: {
    ...mapState("theaters",["tableData2"])
  },
  methods: {
    add(scope){
      Router.push(`/maoyanApp/theaters/addtheaters/${scope.row._id}`)
    },
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      ...mapMutations("theaters",["HANDLEEDIT", "HANDLEDELETE"]),
      ...mapActions("theaters",["init", "removeTheater"])
      },
  mounted(){
    this.init()
  }
}
</script>

<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>

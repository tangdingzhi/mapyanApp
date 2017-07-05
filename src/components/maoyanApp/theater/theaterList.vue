<template>
  <div>
      <h1>放映厅列表</h1>
        <el-table
        :data="this.tableData2"
        style="width: 50%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="theaterName"
          label="放映厅名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="影院名称">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="HANDLEEDIT({
              	a:scope.$index, b:scope.row
              	})">修改</el-button>
            <el-button
              size="small"
              type="danger"
              @click="HANDLEDELETE({
              	index:scope.$index, row:scope.row
              	})">删除</el-button>
            <el-button
              size="small"
              type="success"
              @click="init">显示座位</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
// import {
// 	ASYNC_GETDATA,
// 	SHOWSEATS
// } from '../../../store/theaters.js'
import axios from "axios"
import {
  mapMutations,
  mapActions,
  mapGetters,
  mapState
} from 'vuex'
export default {
  name: 'theaterList',
  methods: {
    tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
    ...mapMutations("theaters",["HANDLEEDIT", "HANDLEDELETE", "SHOWSEATS", "ASYNC_GETDATA", "ASYNC_GETTHEATERS"]),
    ...mapActions("theaters",["init"])
    },
	computed: {
		...mapState("theaters",["tableData2"])
	},
	data() {
	  return {
	    add:1
	  }
	},
	mounted() {
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

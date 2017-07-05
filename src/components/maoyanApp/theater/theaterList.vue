<template>
  <div>
      <h1>放映厅列表</h1>
<el-table
        :data="this.theaters"
        style="width: 80%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="name"
          label="放映厅名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="studioId.name"
          label="影院名称">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="updateTheater({
                _id:scope.row._id, name:input
                })">修改</el-button>
            <el-button
              size="small"
              type="danger"
              @click="removeTheater(scope.row._id)">删除</el-button>
            <el-button
              size="small"
              type="success"
              @click="seatsQuery(scope.row._id)">显示座位</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import {
  mapActions,
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
    ...mapActions("theaters",["addTheater", "init", "theaterList", "removeTheater", "updateTheater", "seatsQuery"])
    },
	computed: {
    ...mapState("theaters",["tableData2","theaters"])
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

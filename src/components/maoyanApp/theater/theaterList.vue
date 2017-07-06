<template>
  <div>
      <h1>放映厅列表</h1>
  <el-table
        :data="this.theaterAll"
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
              @click="removeTheater({
                _id:scope.row._id
                })">删除</el-button>
            <el-button
              size="small"
              type="success"
              @click="seatsQuery(scope.row._id)">显示座位</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="topInput">
        <el-input v-model="input" placeholder="请输入放映厅名称"></el-input>
        <el-button type="primary" @click="addTheater({
            studioId,
            name: input
          })">保存</el-button>
      </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapState,
  mapMutations
} from 'vuex'
export default {
  name: 'theaterList',
  data() {
    return {
      input: '',
    }
  },
  methods: {
    tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
    ...mapMutations("theaters", ["setPageState"]),
    ...mapActions("theaters",["addTheater", "init", "theaterList", "removeTheater", "updateTheater", "seatsQuery", "theatersAll"])
    },
	computed: {
    ...mapState("theaters",["theaterAll", "pageState"])
	},
	mounted() {
      this.setPageState(false)
    	this.theatersAll()
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

  .topInput{
    margin-top: 20px;
    margin-left: 200px;
    width: 300px;
    display: flex;
  }

</style>

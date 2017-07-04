<template>
  <div>
      <h1>放映厅列表</h1>
        <el-table
        :data="tableData2"
        style="width: 50%"
        :row-class-name="tableRowClassName">
        <el-table-column
          prop="theaterName"
          label="放映厅名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="studioName"
          label="影院名称">
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="HANDLEEDIT(scope.$index, scope.row)">修改</el-button>
            <el-button
              size="small"
              type="danger"
              @click="HANDLEDELETE(scope.$index, scope.row)">删除</el-button>
            <el-button
              size="small"
              type="success"
              @click="SHOWSEATS">显示座位</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import {
  mapMutations,
  mapActions,
  mapGetters
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
      }
    },
    data() {
      return {
        tableData2: [{
          theaterName: '成都银行厅',
          studioName: 'CC影城莱蒙店',
        }, {
          theaterName: 'MAX厅',
          studioName: 'CC影城莱蒙店'
        }]
      }
    },
    computed: {
      ...mapMutations("theaters",["HANDLEEDIT", "HANDLEDELETE", "SHOWSEATS"])
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

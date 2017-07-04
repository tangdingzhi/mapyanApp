<template>
  <div>
      <h1>新增放映厅</h1>
      <el-table
        :data="tableData2"
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
              @click="handleEdit(scope.$index, scope.row)">新增</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import { 
  mapState,
  mapMutations
  } from 'vuex'
export default {
  name: 'addtheaters',
  methods: {
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    data() {
      return {
        tableData2: [{
          name: 'CC影城莱蒙店',
          address: '武侯区二环路南四段51号莱蒙置地广场6层',
        }, {
          name: 'CGV星聚汇影城(高新店)',
          address: '武侯区剑南大道中段998号世豪广场5F'
        }]
      }
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

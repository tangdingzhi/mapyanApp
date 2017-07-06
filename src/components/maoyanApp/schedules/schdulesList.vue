<template>
    <div>
        <h1>排片列表</h1>
        <div>
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column fixed prop="studioId.name" label="影院名称" width="150">
                </el-table-column>
                <el-table-column prop="movieId.cName" label="电影名称" width="120">
                </el-table-column>
                <el-table-column prop="theaterId.name" label="放映厅名称" width="120">
                </el-table-column>
                <el-table-column prop="show_time" label="上映时间" width="120">
                </el-table-column>
                <el-table-column prop="price" label="票价" width="120">
                </el-table-column>
                <el-table-column prop="studioId.address" label="地址" width="300">
                </el-table-column>
                <el-table-column fixed="right" prop="_id" label="操作" width="100">
                    <template scope="scope">
                        <el-button @click="removeSchedulesBySchedulesId(scope.row)" type="text" size="small">删除</el-button>
                        <el-button type="text" size="small">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import {
    mapState,
    mapMutations,
    mapActions
} from 'vuex' //mapState用来返回容器组件里面所有state状态，
import axios from 'axios'

export default {
    name: 'maoyanApp',
    computed: {
        ...mapState("schedules", ["tableData"])
    },
    methods: {
        ...mapActions("schedules", ["getAllSchedule", "removeSchedulesBySchedulesId"]),

    },
    mounted() {
        this.getAllSchedule()
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

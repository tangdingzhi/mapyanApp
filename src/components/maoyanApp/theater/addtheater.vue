<template>
    <el-col :span="24">
        <h1>NEW放映厅</h1>
        <div class="topInput">
            <el-input v-model="input" placeholder="请输入放映厅名称"></el-input>
            <el-button type="primary" @click="addTheater({
            studioId,
            name: input
          })">保存</el-button>
        </div>
        <el-table :data="this.theaters" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="name" label="放映厅名称" width="180">
            </el-table-column>
            <el-table-column prop="studioId.name" label="影院名称">
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small" @click="updateTheater({
                _id:scope.row._id, name:input, studioId
                })">修改</el-button>
                    <el-button size="small" type="danger" @click="removeTheater({
                _id:scope.row._id, studioId
                })">删除</el-button>
                    <el-button size="small" type="success" @click="seatsQuery(scope.row._id)">显示座位</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-col>
</template>
<script>
import {
    mapActions,
    mapState,
    mapMutations
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
        tableRowClassName(row, index) {
            if (index === 1) {
                return 'info-row';
            } else if (index === 3) {
                return 'positive-row';
            }
            return '';
        },
        ...mapMutations("theaters", ["setPageState"]),
        ...mapActions("theaters", ["addTheater", "init", "theaterList", "removeTheater", "updateTheater", "seatsQuery"])
    },
    computed: {
        ...mapState("theaters", ["tableData2", "theaters"])
    },
    mounted() {
        this.setPageState(true)
        this.theaterList(this.studioId)
    }
}
</script>
<style scoped>
.topInput {
    width: 300px;
    display: flex;
}

.el-table .info-row {
    background: #c9e5f5;
}

.el-table .positive-row {
    background: #e2f0e4;
}
</style>

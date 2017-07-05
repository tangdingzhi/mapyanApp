  <template>
    <el-table
      :data="movies"
      style="width: 600">
      <el-table-column
        prop="_id"
        label="电影ID"
        width="250">
      </el-table-column>
      <el-table-column
        prop="cName"
        label="电影名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="stata"
        label="状态">
      </el-table-column>
     <el-table-column
       label="操作"
       width="180">
      <template scope="scope">
        <el-button
          size="small"
          type="info"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </template>

<script>
import router from "../../../router/index.js"
import {mapState,mapMutations,mapActions} from "vuex"
export default {
  name: 'moviesList',
    computed:{
    ...mapState("movies",["movies"]),
  },
    created(){
  	this.GETMOVIES()
  },
    methods:{
  	...mapActions("movies",["GETMOVIES"]),
	  handleEdit(index, row) {
	    console.log(index, row);
	  },
	  handleDelete(index, row) {
	    console.log(index, row);
	  }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
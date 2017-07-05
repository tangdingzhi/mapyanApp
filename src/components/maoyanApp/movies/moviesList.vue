  <template>
     <div class="box">
        <h2>电影列表</h2>
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
            prop="imgs.length"
            label="状态">
          </el-table-column>
         <el-table-column
           label="操作"
           width="180">
          <template scope="scope">
            <el-button
              size="small"
              type="info"
              @click="CHANGEMOVIE(scope.row._id)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="DELMOVIES(scope.row._id)">删除</el-button>
          </template>
        </el-table-column>
        </el-table>
     </div>
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
  	...mapActions("movies",["GETMOVIES","CHANGEMOVIE","DELMOVIES"])
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin-top: 30px;
  margin-left: -150px;
  }
h2{
  width: 600px;
  margin:0 auto;
  text-align: center;
  color: #666666;
}
</style>
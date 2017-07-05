<template>
	<div>
		<h1>新增排片</h1>
		<div style="margin-top: 40px;" class="box">
			<p>选择电影:</p>
		    <el-select v-model="movieSlect" placeholder="选择电影" @change="moviesChang">
		      <el-option v-for="(item,index) in movies"  :key="item._id" :label="item.cName"  :value="item._id"></el-option>	      
		    </el-select>
		</div>
		<div style="margin-top: 40px;" class="box">
			<p>选择影院:</p>
		    <el-select v-model="studiosSlect" placeholder="选择电影" @change="studiosChang">
	    		<el-option v-for="(item,index) in studios" :key="item._id" :label="item.name"  :value="item._id"></el-option>		      
		    </el-select>
		</div>
		<div style="margin-top: 40px;" class="box">
			<p>选择放映厅:</p>
		    <el-select v-model="theaterSlect" placeholder="选择放映厅" @change="theaterChang">
		      <el-option v-for="(item,index) in theaters" :key="item._id"  :label="item.name"  :value="item._id"></el-option>	
		    </el-select>
		</div> 
		<div class="block box" style="margin-top: 40px;">
			<p>上映时间</p>
		    <span class="demonstration"></span>
		    <el-date-picker
		      v-model="time"
		      type="datetime"
		      placeholder="选择日期时间">
		    </el-date-picker>
		  </div>
		<div class="box" style="margin-top: 40px;">
			<p>设置价格:</p>
			<p>
				<el-input v-model="price"  style="width:218px"></el-input>
			</p>			
		</div>
		<div class="btn">
			<el-button type="primary" @click="addSchedule({
				price:price,
				showTime:time,
				movieId:moviesId,
				studioId:studiosId,
				theaterId:theatersId
				})">保存</el-button>
		</div>
	</div>  
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'//mapState用来返回容器组件里面所有state状态，

export default {
  name: 'maoyanApp',
  data(){
  	return{
  		time:"",
  		price:30,
  		movieSlect: "",
		theaterSlect: "",
		studiosSlect: "",
		studiosId:"",
		moviesId:"",
		theatersId:""		
  	}
  },
  computed:{
  	...mapState("schedules",["movies","theaters","studios"])
  },
  methods:{
    ...mapMutations("schedules",["setPrice"]),
    ...mapActions("schedules",["getMovies","getStudios","getTheatersBystudiosId","addSchedules"]),
	studiosChang(value){
		this.studiosId=value
	  	this.getTheatersBystudiosId(value)
	},
	moviesChang(value){
		this.moviesId=value
	},
	theaterChang(value){
		this.theatersId=value
	},
	addSchedule(obj){
		this.addSchedules(obj)
	}
  },
	mounted() {
		this.getMovies()
		this.getStudios()		
	}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span{
	margin-right: 20px
}
.box{
	display: flex;
	/*justify-content: space-between;*/
	align-items: center;
}
.box p{
	width: 100px;
	font-size: 14px;
	padding-left: 12px
}

.btn{
	text-align: center;
}
</style>
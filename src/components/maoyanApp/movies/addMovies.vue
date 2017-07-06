<template>
  <div class="box">
	<h2>新增电影</h2>
	<table cellpadding="5">
	<tr>
		<td>
			<p>中文名称</p>
			<el-input size="small" placeholder="请输入内容" v-model="movieList.cName" value="123"></el-input>
		</td>
		<td>
			<p>英文名称</p>
			<el-input size="small" placeholder="请输入内容" v-model="movieList.eName" ></el-input>
		</td>
	</tr>
	<tr>
		<td>
			<p>影片类型</p>
			<el-input size="small" placeholder="请输入内容" v-model="movieList.type" ></el-input>
		</td>
		<td>
			<p>制片国家/地区</p>
			<el-input size="small" placeholder="请输入内容" v-model="movieList.country"></el-input>
		</td>
	</tr>
	<tr>
		<td>
			<p>片长</p>
			<el-input size="small" placeholder="请输入内容" v-model="movieList.duration"></el-input>
		</td>
		<td>
			<p>导演</p>
			<el-input size="small" placeholder="请输入内容" v-model="movieList.director" ></el-input>
		</td>
	</tr>
	<tr>
		<td>
			<p>主演</p>
			<el-input size="small" placeholder="请输入内容" v-model="movieList.actors" ></el-input>
		</td>
		<td>
			<p>上映时间</p>
			<el-input size="small" placeholder="请输入内容" v-model="movieList.release"></el-input>
		</td>
	</tr>
	<tr>
		<td class="synopsisBox">
			<p>剧情简介</p>
			<el-input v-model="movieList.synopsis" type="textarea"  :autosize="{ minRows: 4, maxRows: 4}"></el-input>
		</td>
	</tr>
	<tr class="addImgBox" >
		<td>
			<p class="addImg">上传图片</p>
			<el-button size="small" type="primary" @click="SETIMG(newMovieId)" :disabled="isUse">上传</el-button></el-upload>
		</td>
	</tr>
	<tr>
		<td>
			<p class="addImg">操作</p>
			<el-button type="primary" id="saveBtn" size="small" @click="ADDMOVIES(movieList)" :disabled="isSet">保存</el-button>
			<el-button type="primary" id="resetBtn" size="small" :disabled="ischange" @click="CHANGEMOVIEMSG({movieId:movieId,
				cName:movieList.cName,
				eName:movieList.eName,
				type:movieList.type,
			    country:movieList.country,
			    duration:movieList.duration,
			    director:movieList.director,
			    actors:movieList.actors,
			    release:movieList.release,
			    synopsis:movieList.synopsis
				})">修改</el-button>
		</td>
	</tr>
</table>
  </div>

</template>

<script>
import router from "../../../router/index.js"
import axios from "axios"
import {mapState,mapMutations,mapActions} from "vuex"
export default {
  name: 'maoyanApp',
  data(){
  	return{
	 	movieId:this.$route.params.movieId,
  	}
  },
   created(){
   	if(!this.$route.params.movieId){
   		return
	}else{
		 this.CHANGEMSG(this.movieId)
	} 
  },
  computed:{
    ...mapState("movies",["newMovieId","isUse","movieList","ischange","isSet"]),
  },
  methods: {
  	...mapActions("movies",["ADDMOVIES","CHANGEMSG","CHANGEMOVIEMSG"]),
  	...mapMutations("movies",["SETIMG","INITMOVIE","INITADDMOVIE"]),
    },
    mounted(){
    	if(!this.$route.params.movieId){
   			this.INITADDMOVIE()
		}else{
			 return
		} 	
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
	margin-top: 30px;
	margin-left: -150px;
	}
el-input {
    width: 110px;
  }
tr{
	display: flex;
}
td{
	height: 50px;
	display: flex;
	align-items: center;
}
.synopsisBox{
	height: 40px;
	width: 580px;
	margin-top: 20px;
}
p{
	text-align: center;
	padding: 4px;
	border-radius: 4px;
	color: #fff;
	background-color: #58B7FF;
	width: 160px;
}
.addImg{
	display: inline-block;
	margin-right: 10px;
	width: 120px;
}
.addImgBox{
	margin-top: 30px;
}
#primaryBtn{
	margin-top: 10px;
	margin-left: 60px;
}
h2{
	width: 600px;
	margin:0 auto;
	text-align: center;
	color: #666666;
}
.addImgMsg{
	display: inline-block;
}
#resetBtn{
	margin-left: 40px;
}
#saveBtn{
	margin-left: 60px;
}
</style>
export const GETMOVIES = "GETMOVIES"
export const ADDMOVIES = "ADDMOVIES"
export const DELMOVIES = "DELMOVIES"
export const SETIMG = "SETIMG"
export const CHANGEMOVIE = "CHANGEMOVIE"
export const CHANGEMSG = "CHANGEMSG"
export const INITADDMOVIE = "INITADDMOVIE"
export const CHANGEMOVIEMSG = "CHANGEMOVIEMSG"



import router from "../router/index.js"
import axios from "axios"

const movies = {
	namespaced: true, //使用命名空间，以防其他组件里面有同样的方法污染。
	state: {
		curPage: 1,
		eachPage: 10,
		movies: [],
		newMovieId: "",
		movieIMG: [],
		isUse: true,
		ischange: true,
		isSet: false,
		total:0,
		movieList: {
			cName: "", //中文名称
			eName: "", //英文名称
			type: "", //影片类型
			country: "", //制片国家/地区
			duration: "", //片长, 单位 分钟
			release: "", //上映时间 格式: 2016-08-23
			synopsis: "", //剧情简介
			director: "", //导演, 关联演员_id 
			actors: "", //演员, 关联演员_id 
			stata: 1
		}
	},
	mutations: {
		SETMOVIES(state, options) {
			state.movies = options
		},
		ADDIMGTOMOVIES(state, options) {
			state.movies.imgs = options
		},
		SETIMG(state, options) {
			router.push(`/moviesImg/${options}`)
			state.isUse = true
			state.ischange = true
			state.isSet = false
		},
		CHANGEMOVIE(state, options) {
			if (options != "") {
				router.push(`/addMovies/${options}`)
			} else {
				router.push("/addMovies")
			}
			state.ischange = false
			state.isSet = true
		},
		INITADDMOVIE(state){
			state.isUse= true,
			state.ischange= true,
			state.isSet= false
			// state.movieList = {}
		}
	},
	actions: {
		async GETMOVIES(context) {
			const {
				data
			} = await axios.get('http://localhost:3000/movies/query', {
				//get请求时传的数据要包一个params
				params: {
					eachPage: context.state.eachPage,
					curPage:context.state.curPage
				}
			})
			console.log(data)
			context.state.total = data.total
			context.commit("SETMOVIES", data.rows)
		},
		async ADDMOVIES(context, movieList) {
			const {
				data
			} = await axios.post('http://localhost:3000/movies/addMovies', movieList)
			context.commit("SETMOVIES", data.rows)
			context.state.newMovieId = data._id
			context.state.movieList = {}
			context.state.isUse = false
		},
		async DELMOVIES(context, id) {
			const {
				data
			} = await axios.post('http://localhost:3000/movies/removeMovie', {
				movieId: id
			})
			context.dispatch("GETMOVIES")
		},
		async ADDIMGIDTOMOVIE(context, {
			movieid: movieid,
			imgid: imgid
		}) {
			console.log(movieid, imgid)
			const {
				data
			} = await axios.get('http://localhost:3000/imgs/update', {
				params: {
					movieId: movieid,
					_id: imgid
				}
			})
			console.log(data)
		},
		async CHANGEMSG(context,id) {			
				const {
				data
			} = await axios.get('http://localhost:3000/movies/movieQuery', {
				params: {
					_id: id
				}
			})
			// console.log(data)
			context.state.movieList = data.rows[0]
			context.state.movieList.actors=context.state.movieList.actors.join('')
			context.state.movieList.director=context.state.movieList.director.join('')
			// console.log(context.state.movieList)
		// this.movieList.length = 0
		// data.rows.map((item) => {
		// 		this.movieList.push(item)
		// 	})
		// console.log(this.movieList)
		},
		async CHANGEMOVIEMSG(context,{
			movieId:movieId,
			cName:cName,
			eName:eName,
			type:type,
			country:country,
			duration:duration,
			director:director,
			actors:actors,
			release:release,
			synopsis:synopsis
		}){
			console.log(movieId,cName,eName,type,country,duration,director,actors,release,synopsis)
			const {data} = await axios.post('http://localhost:3000/movies/updateMovie', {
					movieId:movieId,
					cName:cName,
					eName:eName,
					type:type,
					country:country,
					duration:duration,
					director:director,
					actors:actors,
					release:release,
					synopsis:synopsis
			})
			console.log(data)
		}
	}
}
export default movies;
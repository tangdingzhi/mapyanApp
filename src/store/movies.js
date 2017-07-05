export const GETMOVIES = "GETMOVIES"
export const ADDMOVIES = "ADDMOVIES"
export const DELMOVIES = "DELMOVIES"
export const SETIMG = "SETIMG"
export const GETURL = "GETURL"
export const CHANGEMOVIE = "CHANGEMOVIE"



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
		movieList: {
			cName: "绝世高手", //中文名称
			eName: "The One", //英文名称
			type: "喜剧,动作", //影片类型
			country: "中国大陆", //制片国家/地区
			duration: "116分钟", //片长, 单位 分钟
			release: "2017-07-07", //上映时间 格式: 2016-08-23
			synopsis: "一个先天没有知觉，挨揍不疼却冒充高手的小混混（卢正雨 饰），一个醉心于织毛衣的过气大师（范伟 饰），一个人称女张飞的暴力少女（郭采洁 饰），一个只会做黑暗料理的美食大亨（蔡国庆 饰），一个可以用汤操纵情绪的当代孟婆（陈冲 饰），一个身患强迫症的日本武士（仓田保昭 饰），为了一本失传的秘笈，引发了一场绝世高手的爆笑对决。", //剧情简介
			director: "卢正雨", //导演, 关联演员_id 
			actors: "卢正雨", //演员, 关联演员_id 
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
		},

	},
	actions: {
		async GETMOVIES(context) {
			const {
				data
			} = await axios.get('http://localhost:3000/movies/query', {
				//get请求时传的数据要包一个params
				params: {
					eachPage: context.state.eachPage
				}
			})
			console.log(data)
			context.commit("SETMOVIES", data.rows)
		},
		async ADDMOVIES(context, movieList) {
			const {
				data
			} = await axios.post('http://localhost:3000/movies/addMovies', movieList)
			context.commit("SETMOVIES", data.rows)
			context.state.newMovieId = data._id
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
		async GETURL(context, {
			movieid: movieid,
			type: type,
			imgUrl: imgUrl
		}) {
			const {
				data
			} = await axios.post('http://localhost:3000/imgs/addImg', {
				movieId: movieid,
				type: type,
				url: imgUrl
			})
			console.log(data._id)
			console.log(data.movieId)
			context.dispatch("ADDIMGIDTOMOVIE", {
				movieid: data.movieId,
				imgid: data._id
			})
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
		async CHANGEMOVIE(context, id) {
			const {
				data
			} = await axios.get('http://localhost:3000/movies/queryUpdateMovie', {
				params: {
					movieId: id
				}
			})
			context.state.movieList = data.rows[0]
			console.log(context.state.movieList)
			router.push("addMovies")
		}

	}
}
export default movies;
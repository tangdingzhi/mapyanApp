export const GETMOVIES = "GETMOVIES"
export const ADDMOVIES = "ADDMOVIES"



import router from "../router/index.js"
import axios from "axios"

const movies = {
	namespaced: true, //使用命名空间，以防其他组件里面有同样的方法污染。
	state: {
		curPage: 1,
		eachPage: 10,
		movies: []
	},
	mutations: {
		SETMOVIES(state, options) {
			state.movies = options
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
		},

	}
}
export default movies;
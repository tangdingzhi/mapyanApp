import axios from 'axios'
const schedules = {
	namespaced: true, //使用命名空间，以防其他组件里面有同样的方法污染。
	state: { //state定义仓库里面的状态
		movies: [],
		theaters: [],
		studios: [],
		schedules: [],
		tableData: []
	},
	mutations: { //相当于以前的methods把方法放在这里面，
		//注意mutations只能用同步的方法。

	},
	getters: {
		addSchedules(context) {
			console.log("in")
		}
	},
	actions: { //其实还是调用的mutations里面的方法只不过他可以实现异步方法
		async getMovies(context) {
			const {
				data
			} = await axios.get("http://localhost:3000/movies/query", {
				params: {
					eachPage: 100,
				}
			})
			context.state.movies.length = 0
			data.rows.map((item) => {
				context.state.movies.push(item)
			})
		},
		async getStudios(context) {
			const {
				data
			} = await axios.get("http://localhost:3000/studio/query", {
				params: {

				}
			})
			context.state.studios.length = 0
			data.rows.map((item) => {
				context.state.studios.push(item)
			})
		},
		async getTheatersBystudiosId(context, studioId) {
			const {
				data
			} = await axios.get("http://localhost:3000/schedule/getTheater", {
				params: {
					studioId
				}
			})
			context.state.theaters.length = 0
			data.map((item) => {
				context.state.theaters.push(item)
			})
		},
		async addSchedules(context, obj) {
			const {
				data
			} = await axios.post("http://localhost:3000/schedule/addSchedule", obj)

		},
		async getAllSchedule(context) {
			const {
				data
			} = await axios.get("http://localhost:3000/schedule/getAllSchedule", {

			})
			context.state.tableData.length = 0
			data.map((item) => {
				context.state.tableData.push(item)
			})
		},
		async removeSchedulesBySchedulesId(context, row) {
			const data = await axios.get("http://localhost:3000/schedule/removeSchedulesBySchedulesId", {
				params: {
					schedulesId: row._id,
				}
			})
			context.dispatch("getAllSchedule")

		}
	}

}
export default schedules;
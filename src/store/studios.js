import axios from 'axios'

const studios = {
	namespaced: true, //使用命名空间，以防其他组件里面有同样的方法污染。
	state: {
		tableData: [],
		curPage: 1,
		eachPage: 100,
	},
	actions: {
		async getAllStudios(context) {
			const {
				data
			} = await axios.get("http://localhost:3000/studio/query", {
				params: {
					page: context.state.curPage,
					rows: context.state.eachPage
				}
			})
			context.state.tableData.length = 0
			data.rows.map((item) => {
				context.state.tableData.push(item)
			})
		},
		async removeStudios(context, _id) {
			const {
				data
			} = await axios.post("http://localhost:3000/studio/deleteStudio", {
				_id
			})
			context.dispatch("getAllStudios")
		}
	}
}

export default studios;
import Vuex from "vuex" //首先引入vuex
import Vue from 'vue'
import movies from './movies.js'
import theaters from './theaters.js'
import schedules from './schedules.js'
import studios from './studios.js'
import users from './users.js'
Vue.use(Vuex) //再使用Vuex
const store = new Vuex.Store({
	modules: {
		movies,
		theaters,
		schedules,
		studios,
		users
	}
})
export default store